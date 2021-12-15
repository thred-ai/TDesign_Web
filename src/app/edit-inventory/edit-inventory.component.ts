import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Inventory } from '../models/inventory.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CropperComponent } from '../cropper/cropper.component';
import { type } from 'os';
import { LoadService, Dict } from '../services/load.service';
import { Globals } from '../globals';
import { NgxSpinnerService } from 'ngx-spinner';
import { SKU } from '../models/sku.model';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-edit-inventory',
  templateUrl: './edit-inventory.component.html',
  styleUrls: ['./edit-inventory.component.css']
})
export class EditInventoryComponent implements OnInit {

  editInventory?: Inventory
  mode = 0
  name = ''
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];

  @ViewChild('productInput') productInput?: ElementRef<HTMLInputElement>;
  @ViewChild('sizeInput') sizeInput?: ElementRef<HTMLInputElement>;
  @ViewChild('skuTable') skuTable?: MatTable<any>;

  displayedColumns: string[] = ['style', 'size', 'sku'];


  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditInventoryComponent>,
    private modalService: NgbModal,
    private loadService: LoadService,
    public spinner: NgxSpinnerService,
  ) { 
    dialogRef.disableClose = true
    this.editInventory = data.inv
  }

  invForm = this.fb.group({
    name: [null, Validators.required],
    img: [null, Validators.required],
    description: [null],
    variations: [[], Validators.required],
    sizes: [[], Validators.required],
    qty: [null, Validators.required],
    sku: [[], Validators.required],
    countries: [[], Validators.required],
  });


  productCtrl = new FormControl();
  sizeCtrl = new FormControl();

  //     sku: [null],


  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();


    if (value) {
      if (this.invForm.controls.variations.value){
        let same = this.invForm.controls.variations.value ?? []
        let sameSku = this.invForm.controls.sku.value ?? []

        same.push(value)

        this.invForm.controls.variations.setValue(same);

        (this.invForm.controls.sizes.value ?? []).forEach((s: string) => {
          sameSku.push(new SKU('', value, s))
        });

        sameSku.sort(function(a: SKU, b: SKU){
          if(a.type! < b.type!) { return -1; }
          if(a.type! > b.type!) { return 1; }
          return 0;
        })
        
        this.invForm.controls.sku.setValue(sameSku);
        this.skuTable?.renderRows()
      }
    }

    // Clear the input value
    event.chipInput!.clear();

    this.productCtrl.setValue(null);
  }

  addSize(event: MatChipInputEvent): void {
    const value = ((event.value || '').trim())?.toUpperCase()


    if (value) {
      if (this.invForm.controls.sizes.value && this.invForm.controls.sku.value){
        let same = this.invForm.controls.sizes.value ?? []
        let sameSku = this.invForm.controls.sku.value ?? []

        same.push(value)
        this.invForm.controls.sizes.setValue(same);

        (this.invForm.controls.variations.value ?? []).forEach((s: string) => {
          sameSku.push(new SKU('', s, value))
        });
        sameSku.sort(function(a: SKU, b: SKU){
          if(a.type! < b.type!) { return -1; }
          if(a.type! > b.type!) { return 1; }
          return 0;
        })
        this.invForm.controls.sku.setValue(sameSku);
        this.skuTable?.renderRows()
      }
    }

    // Clear the input value

    this.sizeCtrl.setValue(null);
    this.sizeInput!.nativeElement.value = '';
  }

  fileChangeEvent(event: any): void {
    const modalRef = this.modalService.open(CropperComponent, {size : "lg"});
    modalRef.componentInstance.imageChangedEvent = event

    modalRef.componentInstance.ratio = 1.5
    modalRef.componentInstance.width = 1280
    modalRef.componentInstance.height = 853

    let sub = modalRef.dismissed.subscribe((img: string) => {
       sub.unsubscribe()
      if (img != '0'){
        this.invForm.controls.img.setValue(img)
      }
    })
  }

  addVal(){
    const value = (this.productCtrl.value ?? '').trim();

    if (value) {
      if (this.invForm.controls.variations.value){
        let same = this.invForm.controls.variations.value ?? []
        let sameSku = this.invForm.controls.sku.value ?? []

        same.push(value)
        this.invForm.controls.variations.setValue(same);

        (this.invForm.controls.sizes.value ?? []).forEach((s: string) => {
          sameSku.push(new SKU('', value, s))
        });
        sameSku.sort(function(a: SKU, b: SKU){
          if(a.type! < b.type!) { return -1; }
          if(a.type! > b.type!) { return 1; }
          return 0;
        })

        this.invForm.controls.sku.setValue(sameSku);
        this.skuTable?.renderRows()

      }
    }

    this.productCtrl.setValue(null);
    this.productInput!.nativeElement.value = '';
  }

  addSizeVal(){
    const value = (this.sizeCtrl.value ?? '').trim();


    if (value) {
      if (this.invForm.controls.sizes.value){
        let same = this.invForm.controls.sizes.value ?? []
        same.push(value)
        this.invForm.controls.sizes.setValue(same)
      }
    }

    this.sizeInput!.nativeElement.value = '';
  }

  remove(inv: string): void {
    const index = this.invForm.controls.variations.value?.indexOf(inv);

    if (index >= 0) {
      var products = this.invForm.controls.variations.value ?? []
      let sameSku = this.invForm.controls.sku.value ?? []

      products.splice(index, 1);
      
      sameSku.forEach((s: SKU, i: number) => {
        if (s.type == inv){
          sameSku.splice(i, 1);
        }
      });

      sameSku.sort(function(a: SKU, b: SKU){
        if(a.type! < b.type!) { return -1; }
        if(a.type! > b.type!) { return 1; }
        return 0;
      })


      this.invForm.controls.sku.setValue(sameSku);

      this.invForm.controls.variations.setValue(products)
    }
  }

  removeSize(s: string): void {
    const index = this.invForm.controls.sizes.value?.indexOf(s);

    if (index >= 0) {
      var products = this.invForm.controls.sizes.value ?? []
      let sameSku = this.invForm.controls.sku.value ?? []

      products.splice(index, 1);
      sameSku.forEach((s: SKU, i: number) => {
        if (s.type == s){
          sameSku.splice(i, 1);
        }
      });

      sameSku.sort(function(a: SKU, b: SKU){
        if(a.type! < b.type!) { return -1; }
        if(a.type! > b.type!) { return 1; }
        return 0;
      })
      this.invForm.controls.sizes.setValue(products)
    }
  }

  storeInfo(){
    return Globals.storeInfo
  }

  close(){
    this.dialogRef.close()
  }

  selectedTheme(){
    
    let co = Globals.storeInfo?.colorStyle?.btn_color
    let bco = Globals.storeInfo?.colorStyle?.bg_color
    let name = Globals.storeInfo?.colorStyle?.name

    let color = "rgba(" + co[0] + "," + co[1] + "," + co[2] + "," + co[3] + ")"

    let bg_color = "rgba(" + bco[0] + "," + bco[1] + "," + bco[2] + "," + bco[3] + ")"

    var theme: Dict<string> = {
      "name": name,
      "color": color,
      "bg_color": bg_color
    }
    return theme
  }

  selectedIndicator(){

    let co = Globals.storeInfo?.loading?.color
    let bco = Globals.storeInfo?.loading?.bg_color
    let name = Globals.storeInfo?.loading?.name
    
    let color = "rgba(" + co[0] + "," + co[1] + "," + co[2] + "," + co[3] + ")"

    let bg_color = "rgba(" + bco[0] + "," + bco[1] + "," + bco[2] + "," + bco[3] + ")"

    let indicator: Dict<string> = {
      "name": name,
      "color": color,
      "bg_color": bg_color
    }
    return indicator
  }


  ngOnInit(): void {
    this.mode = this.editInventory ? 1 : 0
    this.name = (this.mode == 0) ? 'NEW INVENTORY' : 'EDIT INVENTORY'


    if(this.editInventory){
      this.invForm.controls.name.setValue(this.editInventory.name)
      this.invForm.controls.description.setValue(this.editInventory.desc)
      this.invForm.controls.qty.setValue(this.editInventory.amount)
      this.invForm.controls.sizes.setValue(this.editInventory.sizes)
      this.invForm.controls.variations.setValue(this.editInventory.variations)
      this.invForm.controls.img.setValue(this.editInventory.img)
    }
    
  }

  

  save(){
    var title = ((this.invForm.controls.name.value ?? 'Inventory') as string)
    var desc = ((this.invForm.controls.description.value ?? '') as string)
    var qty = ((this.invForm.controls.qty.value ?? 1) as number)
    var sizes = ((this.invForm.controls.sizes.value ?? []) as Array<string>)
    var variation = ((this.invForm.controls.variations.value ?? []) as Array<string>)
    var img = this.invForm.controls.img.value ?? undefined

    let inv = new Inventory(this.editInventory?.code ?? "", title, qty, new Date(), this.editInventory?.id ?? "", false, variation, "", desc, sizes, true, img)
  
    this.spinner.show('newInvSpinner')
    this.loadService.saveInventory(inv, (inventory?: Inventory) => {
      this.spinner.hide('newInvSpinner')
      this.dialogRef.close(inventory)
    }, Globals.storeInfo.uid)

  }

}
