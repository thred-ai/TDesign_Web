import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Popup } from '../models/popup.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Dict } from '../services/load.service';
import { Field } from '../models/field.model';

@Component({
  selector: 'app-edit-popup',
  templateUrl: './edit-popup.component.html',
  styleUrls: ['./edit-popup.component.css']
})
export class EditPopupComponent implements OnInit {

  editPopup?: Popup
  mode = 0
  name = ''

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditPopupComponent>
  ) { 
    this.editPopup = data.editPopup
  }

  popupForm = this.fb.group({
    title: [null, Validators.required],
    description: [null],
    type: [null, Validators.required],
    cta: [null, Validators.required],
    exit: [null, Validators.required],
    trigger: [null, Validators.required],
  });

  types = [
    {
      name: 'EMAIL',
      code: 0
    },
    {
      name: 'SMS',
      code: 1
    },
    {
      name: 'EMAIL & NAME',
      code: 2
    },
    {
      name: 'SMS & NAME',
      code: 3
    },
  ]

  triggers = [
    {
      name: 'Initial Store Visit',
      code: 0
    },
    {
      name: 'Add to Cart',
      code: 1
    },
    // {
    //   name: '',
    //   code: 2
    // },
    // {
    //   name: 'SMS & NAME',
    //   code: 3
    // },
  ]

  matchingType(id: number){
    return this.types.find(type => { return type.code == id})
  }

  matchingTrigger(id: number){
    return this.triggers.find(type => { return type.code == id})
  }

  ngOnInit(): void {
    this.mode = this.editPopup ? 1 : 0
    this.name = (this.mode == 0) ? 'NEW POP-UP' : 'EDIT POP-UP'

    if (this.editPopup){
      this.popupForm.controls.title.setValue(this.editPopup.title)
      this.popupForm.controls.description.setValue(this.editPopup.description)
      this.popupForm.controls.type.setValue(this.editPopup.type)
      this.popupForm.controls.cta.setValue(this.editPopup.ctaBtnTitle)
      this.popupForm.controls.exit.setValue(this.editPopup.exitBtnTitle)
      this.popupForm.controls.trigger.setValue(this.editPopup.trigger)
    }
    else{
      this.popupForm.controls.type.setValue(this.types[0].code)
      this.popupForm.controls.trigger.setValue(this.triggers[0].code)
    }
  }

  save(){
    var title = ((this.popupForm.controls.title.value ?? '') as string)
    var message = ((this.popupForm.controls.description.value ?? '') as string)
    var cta = ((this.popupForm.controls.cta.value ?? 'SUBSCRIBE') as string)
    var exit = ((this.popupForm.controls.exit.value ?? 'NO THANKS') as string)
    var trigger = this.popupForm.controls.trigger.value as number

    var type = this.popupForm.controls.type.value

    if (title == '' || type == undefined || trigger == undefined){
      return
    }

    let fields = new Array<Field>()

    if (type == 0){
      fields.push(new Field("Email", 0))
    }
    else if (type == 1){
      fields.push(new Field("Phone Number", 2))
    }
    else if (type == 2){
      fields.push(new Field("Name", 1))
      fields.push(new Field("Email", 0))
    }
    else if (type == 3){
      fields.push(new Field("Name", 1))
      fields.push(new Field("Phone Number", 2))
    }

    let popup = new Popup(title, message, fields, trigger, type, cta, exit)

    this.dialogRef.close(popup)
  }

  close(){
    this.dialogRef.close()
  }
}
