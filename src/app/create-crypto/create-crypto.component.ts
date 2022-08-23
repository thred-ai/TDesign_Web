import {
  Component,
  OnInit,
  Inject,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  LOCALE_ID,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { create } from 'ipfs-http-client';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
// import { Options } from 'ipfs-core/src/types';
import {
  NgxFileDropEntry,
  FileSystemFileEntry,
  FileSystemDirectoryEntry,
} from 'ngx-file-drop';
import { CurrencyMaskInputMode } from 'ngx-currency';
import { NFT } from '../models/nft.model';
import { Globals } from '../globals';
import { ethers, BigNumber } from 'ethers';

import { LazyMinter, NFTVoucher } from 'LazyMinter';
import { Dict, LoadService } from '../services/load.service';
import { AdminViewComponent } from '../admin-view/admin-view.component';
import { Collection } from '../models/collection.model';
import { Store } from '../models/store.model';
import { NgxSpinnerService } from 'ngx-spinner';
import axios from 'axios';
import { thredInfra } from 'config';
import { NgxDropzoneComponent } from 'ngx-dropzone';
import { CurrencyPipe } from '@angular/common';
import { local } from 'web3modal';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

class SafeObjectUrl {
  url: any;
  constructor(url: string) {
    this.url = url;
  }
  get unsafeUrl() {
    return this.url;
  }
}

@Component({
  selector: 'app-create-crypto',
  templateUrl: './create-crypto.component.html',
  styleUrls: ['./create-crypto.component.css'],
})
export class CreateCryptoComponent implements OnInit {
  storeInfo?: Store;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    @Inject(LOCALE_ID) public localId: string,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateCryptoComponent>,
    private cdr: ChangeDetectorRef,
    private laodService: LoadService,
    private spinner: NgxSpinnerService
  ) {
    this.nftContract = data.contract;
    this.storeInfo = Globals.storeInfo;
    this.utility =
      (this.data.asset
        ? data.utils
        : this.data.utils?.filter((u: any) => u.active)) ?? [];
    // currency: col!.currency
    let pipe = new CurrencyPipe(localId);

    this.customCurrencyMaskConfig.prefix =
      pipe.transform(0, data.contract.currency ?? 'USD')?.replace('0.00', '') ??
      '$';

    this.filteredPages = this.pageCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) =>
        fruit
          ? this._filter(fruit)
          : this.pages.slice()
      )
    );
  }

  private _filter(value: string): any[] {
    console.log(value)
    const filterValue = value.toLowerCase();

    let newPages = this.pages.filter(
      (p) =>
        p.url.replace('/', '').toLowerCase().includes(filterValue) ||
        p.name.toLowerCase().includes(filterValue)
    );

    var returnArr = new Array<any>();

    newPages.forEach(p => {
      returnArr.push(p);
    })

    return returnArr;
  }

  selectedPages: string[] = [];

  add(event: MatChipInputEvent): void {
    const value = event.value || '';

    this.selectedPages.push(value);

    // Clear the input value
    event.chipInput!.clear();
    this.pageCtrl.setValue(null);
  }

  @ViewChild('pageInput') productInput?: ElementRef<HTMLInputElement>;

  separatorKeysCodes: number[] = [ENTER, COMMA];

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedPages.push(event.option.value);

    this.productInput!.nativeElement.value = '';

    this.pageCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.selectedPages.indexOf(fruit);

    if (index >= 0) {
      this.selectedPages.splice(index, 1);
    }
  }

  pageName(url: string){
    return this.pages.find(p => p.url == url).url
  }

  nftContract: Collection;
  provider?: ethers.providers.Web3Provider;
  saving = false;
  planInfo?: any;

  customCurrencyMaskConfig = {
    align: 'left',
    allowNegative: false,
    allowZero: false,
    decimal: '.',
    precision: 2,
    prefix: 'US $',
    suffix: '',
    thousands: ',',
    min: 0,
    inputMode: CurrencyMaskInputMode.NATURAL,
  };

  customCurrencyMaskConfig2 = {
    align: 'left',
    allowNegative: false,
    allowZero: false,
    precision: 0,
    prefix: '',
    suffix: ' %',
    max: 15,
    min: 1,
    inputMode: CurrencyMaskInputMode.NATURAL,
  };

  nftForm = this.fb.group({
    title: [null, Validators.required],
    description: [null],
    price: [null, Validators.required],
    file: [null, Validators.required],
    skybox: [null],
    cover: [null],
    ios_model: [null],
    royalty: [null],
    tokenURL: [null],
  });

  fileName?: string;
  skyBoxName?: string;
  coverName?: string;

  utility: any[] = [];
  pages: any[] = [];

  // <p><mat-checkbox formControlName="pepperoni">Pepperoni</mat-checkbox></p>
  // <p><mat-checkbox formControlName="extracheese">Extra Cheese</mat-checkbox></p>
  // <p><mat-checkbox formControlName="mushroom">Mushroom</mat-checkbox></p>

  ngOnInit(): void {
    let con =
      !this.nftContract.royalty ||
      this.nftContract.royalty == ethers.constants.AddressZero;
    if (con) {
      this.royaltyPlaceholder = 'Royalties not available';
      this.nftForm.controls.royalty.disable();
    }

    this.utility.forEach((u) => {
      u.active = false;
    });

    if (this.data.asset) {
      let nft = this.data.asset as NFT;
      this.nftForm.controls.title.setValue(nft.name);
      this.nftForm.controls.description.setValue(nft.description);
      this.nftForm.controls.price.setValue(nft.price);
      this.nftForm.controls.file.setValue(nft.assetUrl);
      this.fileDisplay = nft.assetUrl;
      this.nftForm.controls.royalty.setValue(!con ? nft.royalty / 100 : null);
      this.nftForm.controls.cover.setValue(nft.img);
      this.nftForm.controls.tokenURL.setValue(nft.tokenURL);
      this.nftForm.controls.skybox.setValue(
        nft.skybox ??
          'https://storage.googleapis.com/clothingapp-ed125.appspot.com/Resources/site-demo/street.hdr'
      );
      this.skyBoxDisplay = nft.skybox;
      console.log(nft.skybox);

      this.utility.forEach((u) => {
        if (this.data.asset.info.utility?.find((a: any) => a.code == u.code)) {
          u.active = true;
        }
      });

      this.nftForm.disable();
    } else {
      this.laodService.getPages((info) => {
        this.pages = info ?? [];
        console.log(info);
      });
    }
    // if (this.nftContract.currency)
    //   this.customCurrencyMaskConfig.suffix = ` ${this.nftContract.currency}`;
    // if (this.admin.selected)
    // this.nftForm.controls.lazyMint.setValue(true);
  }

  royaltyPlaceholder = 'Royalties %';

  traits = new Array<any>();
  selectable = true;
  removable = true;
  pageCtrl = new FormControl();
  filteredPages: Observable<any[]>;

  addTrait() {
    let trait = {
      trait_type: '',
      value: '',
    };
    this.traits.push(trait);
  }

  removeTrait(i: number) {
    this.traits.splice(i, 1);
  }

  set isLoading(isLoading: boolean) {
    this.saving = isLoading;
  }

  admin?: AdminViewComponent;

  private convertBase64ToBlob(base64Image: string) {
    // Split into two parts
    const parts = base64Image.split(';base64,');

    // Hold the content type
    const imageType = parts[0].split(':')[1];

    // Decode Base64 string
    const decodedData = window.atob(parts[1]);

    // Create UNIT8ARRAY of size same as row data length
    const uInt8Array = new Uint8Array(decodedData.length);

    // Insert all character code into uInt8Array
    for (let i = 0; i < decodedData.length; ++i) {
      uInt8Array[i] = decodedData.charCodeAt(i);
    }

    // Return BLOB image after conversion
    return new Blob([uInt8Array], { type: imageType });
  }

  err = '';

  async save() {
    if (this.nftForm.valid) {
      let name = this.nftForm.controls.title.value as string;
      let description = this.nftForm.controls.description.value as string;
      let cost = this.nftForm.controls.price.value as number;
      let contractNFT = this.nftContract.contract;
      let file = this.nftForm.controls.file.value as File;
      let royalty =
        ((this.nftForm.controls.royalty.value as number) ?? 0.0) * 100;
      let skyBox = this.nftForm.controls.skybox.value as File;
      let utility = this.utility.filter((f) => f.active) ?? [];
      let ios_model = this.nftForm.controls.ios_model.value as File;
      let traits = (this.traits as Array<Dict<any>>) ?? [];
      let tokenURL = this.nftForm.controls.tokenURL.value as string;
      let urls = { ...this.selectedPages ?? [] }


      this.isLoading = true;

      let img = this.save3DThumbnail();

      this.laodService.saveNFT(
        contractNFT,
        name,
        description,
        file,
        img,
        traits,
        royalty,
        cost,
        skyBox,
        utility,
        ios_model,
        tokenURL,
        urls,
        (nft?: NFT) => {
          console.log('done');
          this.isLoading = false;
          this.dialogRef.close(nft);
        }
      );

      // let docID = await this.laodService.saveNFT(
      //   nft,
      //   Globals.storeInfo?.uid,
      //   undefined,
      //   img
      // );
      // if (docID) {
      //   nft.docID = docID;
      //   nft.img = this.laodService.getURL(docID);
      // }
      // const meta = await axios.get(url2);
      // nft.url = meta.data.image;
      // this.dialogRef.close(nft);
      // this.isLoading = false;
    } else {
      console.log('invalid');
    }
  }

  async getImgBase64(file: string) {
    var uploadFile = this.convertBase64ToBlob(file);
    let base64Image = Buffer.from(await uploadFile.arrayBuffer()).toString(
      'base64'
    );
    return base64Image;
  }

  saveVideoThumbail() {
    let ref = this.video?.nativeElement;
    if (ref) {
      var canvas = document.createElement('canvas');
      canvas.width = ref.videoWidth;
      canvas.height = ref.videoHeight;
      var ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(ref, 0, 0);
        let img = canvas.toDataURL();
        return img;
      }
    }
    return undefined;
  }

  save3DThumbnail() {
    let viewer = document.getElementById('viewer') as HTMLElement;

    if (viewer) {
      const img = (viewer as any).toDataURL('image/jpeg');
      return img;
    }
    return undefined;
  }

  @ViewChild('video') video?: ElementRef;

  selectedIndicator() {
    if (!Globals.storeInfo) {
      return {
        name: '',
        color: '',
        bg_color: '',
      };
    }
    let co = Globals.storeInfo?.loading?.color;
    let bco = Globals.storeInfo?.loading?.bg_color;
    let name = Globals.storeInfo?.loading?.name;

    let color = 'rgba(' + co[0] + ',' + co[1] + ',' + co[2] + ',' + co[3] + ')';

    let bg_color =
      'rgba(' + bco[0] + ',' + bco[1] + ',' + bco[2] + ',' + bco[3] + ')';

    var indicator: Dict<string> = {
      name: name,
      color: color,
      bg_color: bg_color,
    };
    return indicator;
  }

  @ViewChild('drop', { read: NgxDropzoneComponent })
  drop?: NgxDropzoneComponent;

  radioChange(event: any) {
    let val = event.value;

    this.nftForm.controls.lazyMint.setValue(val);
    this.cdr.detectChanges();
  }

  closeDialog() {
    // this.interval = undefined;
    this.nftForm.controls.file.setValue('0');
    this.dialogRef.close();
    this.cdr.detectChanges();
  }

  acceptedModels = '.glb,.gltf';
  acceptedSkybox = '.hdr';
  acceptedCovers = '.png,.jpeg';

  createSafeObjectURL(blob: Blob) {
    return new SafeObjectUrl(URL.createObjectURL(blob));
  }

  createSafeObjectUrlFromArrayBuffer(contents: ArrayBuffer) {
    return this.createSafeObjectURL(new Blob([new Uint8Array(contents)]));
  }

  async createBlobUrlFromEnvironmentImage(file: File) {
    const arrayBuffer = await file.arrayBuffer();
    const safeObjectUrl = this.createSafeObjectUrlFromArrayBuffer(arrayBuffer);
    const unsafeUrl = file.name.match(/\.(hdr)$/i)
      ? safeObjectUrl.unsafeUrl + '#.hdr'
      : safeObjectUrl.unsafeUrl;
    return unsafeUrl;
  }

  async fileChangeEvent(event: any, mode = 'skybox') {
    const file = event.target.files[0] as File;

    // const reader = new FileReader();
    // reader.onload = async (event: any) => {
    //   var base64 = event.target.result;
    //   console.log(base64)
    if (mode == 'skybox') {
      const unsafeUrl = await this.createBlobUrlFromEnvironmentImage(file);
      this.skyBoxDisplay = unsafeUrl;
      this.nftForm.controls.skybox.setValue(file);
    } else if (mode == 'ios_model') {
      this.nftForm.controls.ios_model.setValue(file);
    }
    // else {
    //   this.nftForm.controls.cover.setValue(base64);
    // }
    this.cdr.detectChanges();
    // };
    // reader.readAsDataURL(blob);
  }

  public async dropped(files: any) {
    // this.files = files;
    for (const file of files.addedFiles) {
      // Is it a file?

      // Here you can access the real file

      var type = file.type;

      var acceptedFiles = this.acceptedModels;
      this.fileName = file.name;

      // else if (mode == 'skybox'){
      //   acceptedFiles = this.acceptedSkybox
      //   this.skyBoxName = file.name;
      // }
      // else{
      //   acceptedFiles = this.acceptedCovers
      //   this.coverName = file.name;
      // }

      let arrs = acceptedFiles.replace(/\./g, '').split(',');

      if (type == '') {
        arrs.forEach((t) => {
          if (file.name.indexOf(t) > -1) {
            type = t;
            return;
          }
        });
        if (type == '') {
          return;
        }
      } else {
        let match = arrs.find((j) => {
          return type.indexOf(j) > -1;
        });
        if (!match) {
          return;
        }
      }

      // You could upload it like this:
      // const formData = new FormData()
      // formData.append('logo', file, file.)

      // console.log(formData)
      // // Headers
      // const headers = new HttpHeaders({
      //   'security-token': 'mytoken'
      // })

      // this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
      // .subscribe(data => {
      //   // Sanitized logo returned from backend
      // })

      let buffer = await file.arrayBuffer();

      var blob = new Blob([buffer]);

      // this.nftForm.controls.format.setValue(null);

      var reader = new FileReader();
      reader.onload = (event: any) => {
        var base64 = event.target.result;

        this.nftForm.controls.file.setValue(file);
        this.fileDisplay = base64;
        this.cdr.detectChanges();
      };

      reader.readAsDataURL(blob);
    }
  }

  fileDisplay = '';
  skyBoxDisplay = '';

  public fileOver(event: any) {}

  public fileLeave(event: any) {}
}
