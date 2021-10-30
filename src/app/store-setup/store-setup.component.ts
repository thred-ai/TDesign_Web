import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-store-setup',
  templateUrl: './store-setup.component.html',
  styleUrls: ['./store-setup.component.css']
})
export class StoreSetupComponent implements OnInit {

  constructor(
    private activeModal: NgbActiveModal
  ) { }

  getStarted(){
    this.activeModal.dismiss()
  }

  ngOnInit(): void {
  }

}
