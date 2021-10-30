import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
import { Dict, LoadService } from '../services/load.service';
import { Country } from '../models/shipping-country.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-edit-plan',
  templateUrl: './edit-plan.component.html',
  styleUrls: ['./edit-plan.component.css']
})
export class EditPlanComponent implements OnInit {

  subInfo?: any
  canTrial?: boolean
  mode = 'new'

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

  storeInfo(){return Globals.storeInfo}

  startSubscription(){
    this.spinner.show('subSpinner')
    this.loadService.startSubscription((id: any) => { 
      this.subInfo = id
      this.done()
    })
  }

  planStatus(){
    console.log(this.subInfo?.items.data[0].plan.id)
    if (this.subInfo?.plan.id == "price_1JmgQyIdY1nzc70NXgzC1vCN"){
      return "Thred Core Plan"
    }
    return ""
  }

  planRenewalDate(){
    return new Date(this.subInfo.current_period_end * 1000).toDateString();
  }

  planEndDate(){
    return new Date(this.subInfo.cancel_at * 1000).toDateString();
  }

  formatPrice(price: number, short = false){
    var priceAsString = new String(Number((price * Globals.selectedCurrency!.rate).toFixed(2)).toLocaleString('en'))
    if (!short){
      priceAsString = new String(Number((price * Globals.selectedCurrency!.rate).toFixed(2)))
    }
    let index = priceAsString.indexOf(".")
    
    switch (index){
      case priceAsString.length - 1:
          priceAsString += "00"
          break
      case -1:
          priceAsString += ".00"
          break
      case priceAsString.length - 2:
        console.log(priceAsString)
          priceAsString += "0"
          break
      default:
  
          break
    }
    return this.getCurrencyForCountry(Globals.selectedCurrency!, Globals.selectedCurrency!.name != "US") + priceAsString
}

cancelSubscription(){
  this.spinner.show('subSpinner')
  this.loadService.stopSubscription((id: any) => {
    this.subInfo = id
    this.done()
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


reactivateSubscription(){
  this.spinner.show('subSpinner')
  this.loadService.reactivateSubscription((id: any) => {
    this.subInfo = id
    this.done()
  })
}

done(){
  this.spinner.hide('subSpinner')
  this.activeModal.dismiss(this.subInfo)
}
  
getCurrencyForCountry(country: Country, shouldShowName: boolean){

  var returnItem = country.currency_symbol
  if (shouldShowName) returnItem = country?.name + " " + returnItem

  return returnItem
}

  constructor(
    private activeModal: NgbActiveModal,
    private loadService: LoadService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.mode = this.subInfo == undefined ? 'new' : 'edit' 
    console.log(this.canTrial)
  }

}
