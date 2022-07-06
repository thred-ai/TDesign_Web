import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import jwt_decode from "jwt-decode";
import { LoadService } from '../services/load.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(
    private cdr: ChangeDetectorRef,
    private spinner: NgxSpinnerService,
    private router: ActivatedRoute,
    private loadService: LoadService,
    private rootComponent: AppComponent
  ) {}

  mode = 'signup'
  showSpinner = false

  async ngOnInit() {
    this.showSpinner = true
    this.router.queryParams.subscribe(async (params) => {

      let code = params.code;
      let jwt = params.signed_payload_jwt;

      if (code){
        this.mode = 'signup'
        this.loadService.createAccount(params, error => {
          this.showSpinner = false

          this.routeToStore()

        })
      }
      else if (jwt){
        this.mode = 'signin'
        this.loadService.signIntoAccount(params, error => {
          this.showSpinner = false
          this.routeToStore()

        })
      }
    });
  }

  routeToStore(){
      this.rootComponent.accountPressed()
  }

}
