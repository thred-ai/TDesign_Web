import { Component, OnInit, Inject } from '@angular/core';
import { Popup } from '../models/popup.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { Globals } from '../globals';
import { Dict, LoadService } from '../services/load.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styles: [':host ::ng-deep .mat-form-field.mat-focused .mat-form-field-ripple {height: 0px!important}'],
})
export class PopupComponent implements OnInit {

  storeInfo(){
    return Globals.storeInfo
  }

  err?: string

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

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<PopupComponent>,
    private loadService: LoadService,
    private spinner: NgxSpinnerService,
  ) { 
    this.popup = data.popup
  }

  popupForm = this.fb.group({
    email: [null, [Validators.required]],
    name: [null],
    countryCode: [null],
    sms: [null, [Validators.pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/),Validators.required]],
  });

  popup?: Popup

  ngOnInit(): void {

  }

  close(){
    this.spinner.hide('popupSpinner')
    this.dialogRef.close()
  }


  save(){
    this.err = undefined

    if (
      (!this.popupForm.controls.email.value ||
      this.popupForm.controls.email.value?.replace(" ", '') == '') &&
      (!this.popupForm.controls.sms.value || 
      this.popupForm.controls.sms.value?.replace(" ", '') == '')){
        this.err = "1 or more field(s) are empty"
        return 
    }

    if (!this.popupForm.controls.name.value && (this.popup?.type == 1 || this.popup?.type == 3)){
      this.err = "Invalid Name"
      return
    }

    this.spinner.show('popupSpinner')

    const data = (this.popup?.type == 0 || this.popup?.type == 2) ? 0 : 1
    var info = (this.popup?.type == 0 || this.popup?.type == 2) ? this.popupForm.controls.email.value : ('+' + (this.popupForm.controls.countryCode.value ?? "1") + " ") + this.popupForm.controls.sms.value

    this.loadService.saveData(data, info, success => {
      this.spinner.hide('popupSpinner')
      if (success){
        this.dialogRef.close()
      }
      else{
        this.err = "An Error Occured, Try Again Later"
      }
    }, this.popupForm.controls.name.value, Globals.storeInfo.uid)

    this.close()

  }

}