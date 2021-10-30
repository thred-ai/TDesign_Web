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

  constructor(private activeModal: NgbActiveModal) { }

  dismiss(success: boolean){
    this.activeModal.dismiss({Success: success})
  }

  ngOnInit(): void {
  }

}
