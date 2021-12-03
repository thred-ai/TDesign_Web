import { Component, OnInit } from '@angular/core';
import { Inventory } from '../models/inventory.model';
import { Globals } from '../globals';
import { DomSanitizer } from '@angular/platform-browser';
import { Dict, LoadService } from '../services/load.service';
import { Country } from '../models/shipping-country.model';
import { Template } from '../models/template.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-inventory-buy',
  templateUrl: './inventory-buy.component.html',
  styleUrls: ['./inventory-buy.component.css']
})
export class InventoryBuyComponent implements OnInit {

  inventory?: Inventory
  template?: Template

  storeInfo(){return Globals.storeInfo}
  templates(){return Globals.templates}


  mode = "new"
  err = ''

  calculateMarginPercent(template: Template){
    return Math.round(this.calculateMargin(true, template) / (template.bulkSuggestPrice / 100) * 100)
  }

  calculateMarginDifference(template: Template){
    return Math.round(((template.bulkSuggestPrice - template.bulkPrice) * 0.95) / ((template.bulkSuggestPrice - template.minPrice) * 0.90))
  }

  calculateMargin(isBulk: boolean, template: Template){
    if (isBulk){
      return ((template.bulkSuggestPrice - template.bulkPrice) * 0.95) / 100
    }
    return ((template.bulkSuggestPrice - template.minPrice) * 0.90) / 100
  }

  matchTemplate(inventory: Inventory){
    
    return this.templates().filter(obj => { return obj.productCode == inventory.code })[0]
  }

  

  formatPrice(price: number, short = false){
    var priceAsString = new String(Number(Math.round((price * Globals.selectedCurrency!.rate)).toFixed(2)).toLocaleString('en'))

    if (!short){
      priceAsString = new String(Number((price * Globals.selectedCurrency!.rate).toFixed(2)).toLocaleString('en'))
    }
    let index = priceAsString.indexOf(".")

    switch (index){
      case priceAsString.length - 1:
          priceAsString += "00"
          break
      case priceAsString.length - 2:
          priceAsString += "0"
          break
      default:
  
          break
    }
    return this.getCurrencyForCountry(Globals.selectedCurrency!, Globals.selectedCurrency!.name != "US") + priceAsString
}
  
getCurrencyForCountry(country: Country, shouldShowName: boolean){

  var returnItem = country.currency_symbol
  if (shouldShowName) returnItem = country?.name + " " + returnItem

  return returnItem
}

  constructor(
    private sanitizer: DomSanitizer,
    private loadService: LoadService,
    private spinner: NgxSpinnerService,
    private activeModal: NgbActiveModal
  ) { }

  async buyMore(inventory: Inventory){
    this.spinner.show("invSpinner")

    await this.loadService.createBulkPayment(inventory.code, (id: string, err?: string) => {
      if (err && err != ''){
        this.err = err!
        this.spinner.hide("invSpinner")
      }
      else{
        if (this.inventory){
          this.inventory.amount += this.matchTemplate(inventory).bulkUnit
        }
        this.spinner.hide("invSpinner")
        this.activeModal.dismiss(this.inventory)
        this.toast(this.matchTemplate(inventory).bulkUnit + " " + inventory.name.toLowerCase() + " added to inventory!")
      }
    })
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

  async buyNew(template: Template){

    this.spinner.show("invSpinner")
    await this.loadService.createBulkPayment(template.productCode, (id: string, err?: string) => {
      if (err && err != ''){
        this.err = err!
        this.spinner.hide("invSpinner")
      }
      else{
        this.inventory = new Inventory(template.productCode, template.templateDisplayName, template.bulkUnit, new Date(), id, true)
        this.mode = "add"
        this.spinner.hide("invSpinner")
        this.activeModal.dismiss(this.inventory)
        this.toast(template.bulkUnit + " " + template.templateDisplayName.toLowerCase() + " added to inventory!")
      }
    })
  }

  toast(message: string){

    this.loadService.openSnackBar(message)

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


  removeAutoReload(inventory: Inventory){
    this.loadService.removeAutoReload((inventory), success => {
      if (success){
        inventory.autoReload = false
        this.toast("Auto-Reload for " + inventory.name.toLowerCase() + " removed")
      }
    })
  }

  setUpAutoReload(inventory: Inventory){
    this.loadService.setAutoReload((inventory), success => {
      if (success){
        inventory.autoReload = true
        this.toast("Auto-Reload for " + inventory.name.toLowerCase() + " set")
      }
    })
  }

  getTypeImages(templateName: string) {

    let template = Globals.templates.find(obj => {
      return obj.templateDisplayName == templateName
    })



    return "https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Templates%2F" + template?.templateID + "%2Fdisplay1.jpg?alt=media"
  }

  ngOnInit(): void {
    this.mode = this.inventory == undefined ? 'new' : 'add' 
  }

}
