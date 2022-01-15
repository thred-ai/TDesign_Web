import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-social-form',
  templateUrl: './social-form.component.html',
  styleUrls: ['./social-form.component.css']
})
export class SocialFormComponent implements OnInit {

  linkImg?: string
  name?: string
  isDomain = false
  step = 0
  copied = false


  constructor(private fb: FormBuilder, private activeModal: NgbActiveModal, private clipboard: Clipboard) { }

  socialForm = this.fb.group({
    link: [null],
    dns: ["75.2.60.5"]
  });


  ngOnInit(): void {
  }

  copyDNS(){
    this.copied = true

    this.clipboard.copy(this.socialForm.controls.dns.value);
  }

  close(){
    this.activeModal.dismiss('0')
  }

  btnName(){
    if (this.step == 0){
      return 'Save ' + name + ' URL'
    }
    else{
      return 'Finish Setup'
    }
  }

  finish(){
    var returnItem = this.socialForm.controls.link.value ?? undefined


    let link = returnItem as string

    var tester = /((ftp|http|https):\/\/)([a-z0-9][a-z0-9-]*)?((\.[a-z]{2,6})|(\.[a-z]{2,6})(\.[a-z]{2,6}))$/i
    if (
      this.isDomain
      &&
      link != ''
      &&
      ((link.indexOf('https://') != 0 
      && 
      link.indexOf('http://') != 0)
      ||
      !tester.test(link))
      ||
      link.includes('shopmythred.com')
      ){
      return
    }

    if (this.isDomain && this.step == 0){
      this.step = 1
      return
    }

    this.activeModal.dismiss(returnItem)
  }
  

  myInnerHeight(){
    let height = window.innerHeight
    let width = window.innerWidth

    if (width < height){
      return width * 0.98
    }
    else{
      return height * 0.70
    }
  }

}
