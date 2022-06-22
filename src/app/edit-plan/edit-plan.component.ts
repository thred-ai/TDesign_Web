import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { Globals } from '../globals';
import { Plan } from '../models/plan.model';
import { Dict, LoadService } from '../services/load.service';

@Component({
  selector: 'app-edit-plan',
  templateUrl: './edit-plan.component.html',
  styleUrls: ['./edit-plan.component.css'],
})
export class EditPlanComponent implements OnInit {
  plans?: Plan[] = undefined;
  subInfo?: any = undefined;

  planRenewalDate() {
    return new Date(this.subInfo.current_period_end * 1000).toDateString();
  }

  planEndDate() {
    return new Date(this.subInfo.cancel_at * 1000).toDateString();
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditPlanComponent>,
    private loadService: LoadService,
    private spinner: NgxSpinnerService
  ) {
    this.plans = data.plans;
    this.subInfo = data.subInfo;
  }

  switchToSubscription(plan: Plan) {
    this.renewSubscription(plan);
  }

  cancelSubscription(plan: Plan) {
    this.saveId = plan.id;
    this.loadService.stopSubscription(plan, (id: any) => {
      this.subInfo = id;
      this.dialogRef.close(this.subInfo);
      this.saveId = 'undefined';
      // this.toast('Plan Cancelled!');
    });
  }

  closeDialog(){
    this.dialogRef.close()
  }

  renewSubscription(plan: Plan) {
    this.saveId = plan.id;
    this.loadService.reactivateSubscription(plan, (id: any, err?: string) => {
      this.subInfo = id;
      this.saveId = 'undefined';
      this.dialogRef.close(this.subInfo);
      // this.toast('Plan Updated!');
      // if (err && err != ''){
      //   this.err = err!
      // }
      // else{
      //   this.subInfo = id
      //   this.undefined()
      // }
    });
  }

  saveId?: string;



  selectedIndicator() {
    if (!Globals.storeInfo) {
      return {
        name: '',
        color: '',
        bg_color: '',
      };
    }
    let co = Globals.storeInfo?.loading?.color;
    let bco = Globals.storeInfo?.loading?.bg_color;
    let name = Globals.storeInfo?.loading?.name;

    let color = 'rgba(' + co[0] + ',' + co[1] + ',' + co[2] + ',' + co[3] + ')';
    let bg_color =
      'rgba(' + bco[0] + ',' + bco[1] + ',' + bco[2] + ',' + bco[3] + ')';
    let indicator: Dict<string> = {
      name: name,
      color: color,
      bg_color: bg_color,
    };
    return indicator;
  }

  startSubscription(plan: Plan) {
    this.saveId = plan.id;

    this.loadService.startSubscription(plan, (id: any, err?: string) => {
      this.subInfo = id ?? '';
      // this.toast('Plan Started!');
      this.saveId = 'undefined';
      this.dialogRef.close(this.subInfo);
    });
  }

  ngOnInit(): void {}
}
