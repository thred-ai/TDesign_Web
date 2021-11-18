import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popup-dialog',
  templateUrl: './popup-dialog.component.html',
  styleUrls: ['./popup-dialog.component.css']
})
export class PopupDialogComponent implements OnInit {

  title = "Popup Title"
  message = "This is the message"
  img?: string

  yesBtn = "Yes"
  noBtn = "No"

  mode = 'img'
  iconName?: string
  iconColor?: string

  constructor(private activeModal: NgbActiveModal) { }

  dismiss(success: boolean){
    this.activeModal.dismiss({Success: success})
  }

  ngOnInit(): void {
    this.mode = (this.img?.indexOf('MATICON') != 0) ? 'img' : 'icon'
    if (this.mode == 'icon'){
      var icon = this.img?.split(":")
      if (icon && icon[1] && [icon[2]]){
        this.iconName = icon[1]
        this.iconColor = icon[2]
        console.log(icon)
      }
    }
  }

}
