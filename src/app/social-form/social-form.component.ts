import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-social-form',
  templateUrl: './social-form.component.html',
  styleUrls: ['./social-form.component.css']
})
export class SocialFormComponent implements OnInit {

  linkImg?: string
  name?: string

  constructor(private fb: FormBuilder, private activeModal: NgbActiveModal) { }

  socialForm = this.fb.group({
    link: [null],
  });


  ngOnInit(): void {
    console.log(this.linkImg)
  }

  close(){
    this.activeModal.dismiss()
  }

  finish(){
    var returnItem = this.socialForm.controls.link.value ?? undefined

    console.log(returnItem)
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
