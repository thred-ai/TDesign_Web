import {
  Component,
  OnInit,
  Inject,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { create } from 'ipfs-http-client';
import { FormBuilder, Validators } from '@angular/forms';
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
const THRED_MARKET = require('artifacts/contracts/ThredMarketplace/ThredMarketplace.sol/ThredMarketplace.json');

const client = create('https://ipfs.infura.io:5001/api/v0' as any); // eslint-disable-line no-use-before-define
import { LazyMinter, NFTVoucher } from 'LazyMinter';
import { Dict, LoadService } from '../services/load.service';
import { AdminViewComponent } from '../admin-view/admin-view.component';
import { Collection } from '../models/collection.model';
import { Store } from '../models/store.model';
import { NgxSpinnerService } from 'ngx-spinner';
import axios from 'axios';
import { thredMarketplace } from 'config';

@Component({
  selector: 'app-create-crypto',
  templateUrl: './create-crypto.component.html',
  styleUrls: ['./create-crypto.component.css'],
})
export class CreateCryptoComponent implements OnInit {
  storeInfo?: Store;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateCryptoComponent>,
    private cdr: ChangeDetectorRef,
    private laodService: LoadService,
    private spinner: NgxSpinnerService
  ) {
    this.nftContract = data.contract;
    this.storeInfo = Globals.storeInfo;
  }

  nftContract: Collection;
  provider?: ethers.providers.Web3Provider;

  customCurrencyMaskConfig = {
    align: 'left',
    allowNegative: false,
    allowZero: false,
    decimal: '.',
    precision: 3,
    prefix: '',
    suffix: ' MATIC',
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
    // skybox: [null, Validators.required],
    // cover: [null, Validators.required],
    format: [null],
    lazyMint: [null],
    url: [null],
    royalty: [null],
    external_url: [null],
  });

  fileName?: string;
  skyBoxName?: string;
  coverName?: string;

  ngOnInit(): void {
    this.provider = this.data.provider;

    if (this.nftContract.currency)
      this.customCurrencyMaskConfig.suffix = ` ${this.nftContract.currency}`;
    // if (this.admin.selected)
    this.nftForm.controls.lazyMint.setValue(true);
  }

  traits = new Array<any>();

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
    if (isLoading) {
      this.spinner.show('loader');
    } else {
      this.spinner.hide('loader');
    }
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
      if (window.ethereum && typeof window.ethereum == 'object') {
        this.provider = new ethers.providers.Web3Provider(
          window.ethereum,
          'any'
        );
        Globals.provider = this.provider;
      }
      if (!this.provider?.getSigner()) {
        try {
          await Globals.checkProvider();
          this.provider = Globals.provider;
        } catch (error) {
          this.err = 'No Wallet Connected. Please try again';
          return;
        }
      }
      if (!(await (this.laodService.networkCheck() ?? false))) {
        this.err = 'Please switch your Network to the Polygon Mainnet';
        return;
      }

      let signer = this.provider?.getSigner();

      let address = (await signer?.getAddress()) ?? '';
      if (
        address?.toLowerCase() !=
        Globals.storeInfo?.walletAddress?.toLowerCase()
      ) {
        this.err = 'Wrong Wallet';
        return;
      }

      let name = this.nftForm.controls.title.value as string;
      let description = this.nftForm.controls.description.value as string;
      let cost = this.nftForm.controls.price.value as number;
      let contractNFT = this.nftContract.contract;
      let file = this.nftForm.controls.file.value as string;
      let format = this.nftForm.controls.format.value as string;
      let lazyMint = this.nftForm.controls.lazyMint.value as boolean;
      let royalty =
        ((this.nftForm.controls.royalty.value as number) ?? 0.0) * 100;

      let traits = (this.traits as Array<Dict<any>>) ?? [];
      let external = (this.nftForm.controls.external_url.value as string) ?? '';
      this.isLoading = true;
      try {
        if (file) {
          var uploadFile = this.convertBase64ToBlob(file);
          const added = await client.add(uploadFile, {
            progress: (prog) => console.log(`received: ${prog}`),
          });
          const url = `https://ipfs.infura.io/ipfs/${added.path}`;
          this.nftForm.controls.url.setValue(url);
        }
      } catch (error) {
        console.log('Error uploading file: ', error);
        this.isLoading = false;
        this.err = 'Something went wrong. Please try again';
      }

      let url = this.nftForm.controls.url.value as string;

      var data1 = {
        name,
        description,
        image: url,
        traits: traits != [] ? traits : undefined,
        external_link: external != '' ? external : undefined,
      };

      const data = JSON.stringify(data1);

      try {
        const added = await client.add(data);
        const url2 = `https://ipfs.infura.io/ipfs/${added.path}`;
        /* after file is uploaded to IPFS, pass the URL to save it on Polygon */
        const price = ethers.utils.parseUnits(cost.toString(), 'ether');

        //tokenid 0x3C68CE8504087f89c640D02d133646d98e64ddd9
        // this.laodService.getWalletInfo((signer?: ethers.Wallet) => {

        this.laodService.getCollection(
          this.nftContract.contract,
          async (cl) => {
            if (!cl) {
              throw 'ERROR';
              return;
            }
            var contract2 = new ethers.Contract(
              thredMarketplace,
              THRED_MARKET.abi,
              signer
            );

            const lazyMinter = new LazyMinter(contract2, signer!, 'THRED-NFT');
            console.log(signer);

            let tokenId = (cl.collectionCount ?? 0) + 1;
            const voucher = await lazyMinter.createVoucher(
              tokenId,
              url2,
              royalty,
              price,
              cl.customTokenCheck() == undefined
            );

            if (!voucher) {
              this.isLoading = false;
              this.err = 'Creation Cancelled';
              return;
            }

            console.log('loo');

            if (!lazyMint) {
              try {
                let transaction = await contract2.mintNFT(voucher, cl.contract);
                await transaction.wait();
              } catch (error) {
                this.isLoading = false;
                throw 'An Error Occured';
              }
            }

            console.log(voucher);

            let nft = new NFT(
              tokenId,
              contractNFT,
              await signer?.getAddress(),
              false,
              lazyMint,
              format,
              royalty,
              voucher,
              url2
            );

            nft.format = format;
            var x = ethers.utils.parseUnits('0.02', 'ether');
            if (voucher) {
              x = voucher['minPrice'] as ethers.BigNumber;
            }
            nft.price = x;
            nft.name = name;
            nft.description = description;
            nft.traits = traits;
            nft.external_url = external;
            nft.isAvailable = true;

            // if (!lazyMint) {
            //   await this.mintNFT(voucher, price, contract2, contract3);
            // }
            // else{
            // console.log(voucher)
            // const transaction = await contract2.mintAndTransfer(voucher, { value: x });
            // await transaction.wait()

            let img =
              this.saveVideoThumbail() ?? this.save3DThumbnail() ?? (await this.getImgBase64(file));

            let docID = await this.laodService.saveNFT(
              nft,
              Globals.storeInfo?.uid,
              undefined,
              img
            );
            if (docID) {
              nft.docID = docID;
              nft.linkUrl = this.laodService.getURL(docID);
            }
            const meta = await axios.get(url2);
            nft.url = meta.data.image;
            this.dialogRef.close(nft);
            this.isLoading = false;
          }
        );
        // })

        // }
      } catch (error) {
        this.isLoading = false;
        let data = (error as any).data;
        if (data && data.code == -32000) {
          this.err = 'Not enough MATIC' + ' in wallet!';
        } else {
          this.err = 'Something went wrong, please try again.';
        }
      }
    } else {
      console.log("invalid")
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
    let frame = document.getElementById('3dIframe') as HTMLIFrameElement;

    if (frame) {
      const viewer = frame.contentWindow?.document.querySelector(
        'model-viewer'
      ) as any;
      const img = viewer.toDataURL('image/jpeg');
      return img
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

  radioChange(event: any) {
    let val = event.value;

    this.nftForm.controls.lazyMint.setValue(val);
    this.cdr.detectChanges();
  }

  closeDialog() {
    // this.interval = undefined;
    this.dialogRef.close();
  }

  acceptedModels = '.glb,.gltf';
  acceptedSkybox = '.hdr';
  acceptedCovers = '.png,.jpeg';

  public async dropped(files: any, mode = "model") {

    console.log(files)
    // this.files = files;
    for (const file of files.addedFiles) {
      // Is it a file?

          // Here you can access the real file

          var type = file.type;

          console.log(file);

          var acceptedFiles: string = ""

          if (mode == 'model'){
            acceptedFiles = this.acceptedModels
            this.fileName = file.name;
          }
          else if (mode == 'skybox'){
            acceptedFiles = this.acceptedSkybox
            this.skyBoxName = file.name;
          }
          else{
            acceptedFiles = this.acceptedCovers
            this.coverName = file.name;
          }

          let arrs = acceptedFiles.replace(/\./g, '').split(',');

          console.log(arrs)

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

          console.log(type);
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

          this.nftForm.controls.format.setValue(null);

          var reader = new FileReader();
          reader.onload = (event: any) => {
            var base64 = event.target.result;


            if (mode == 'model'){
              this.nftForm.controls.file.setValue(base64);
            }
            else if (mode == 'skybox'){
              this.nftForm.controls.skybox.setValue(base64);
            }
            else{
              this.nftForm.controls.cover.setValue(base64);
            }

            var format = '3d';
            // if (type.indexOf('image') > -1) {
            //   format = 'image';
            // } else if (type.indexOf('video') > -1) {
            //   format = 'video';
            // } else if (type.indexOf('glb') > -1 || type.indexOf('gltf') > -1) {
            //   format = '3d';
            // }


            this.nftForm.controls.format.setValue(format);


            this.cdr.detectChanges();

          };

          reader.readAsDataURL(blob);
    }
  }

  public fileOver(event: any) {}

  public fileLeave(event: any) {}
}
