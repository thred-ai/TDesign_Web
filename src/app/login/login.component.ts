import {
  Component,
  OnInit,
  ChangeDetectorRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import { LoadService, Dict } from '../services/load.service';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Globals } from '../globals';
import { NgxSpinnerService } from 'ngx-spinner';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  authMode = 1;
  err = '';

  @Input() isLanding?: boolean;
  @Input() affiliate?: string;

  @Output() signedIn = new EventEmitter<boolean>();

  loadingAction = 'Creating Account...';
  username = 'Username';

  textCode() {
    if (this.isLanding) {
      return 'light';
    }
    return Globals.storeInfo?.colorStyle.text_code;
  }

  backCode() {
    if (this.isLanding) {
      return 'dark';
    }
    return Globals.storeInfo?.colorStyle.back_code;
  }

  

  backColor() {
    if (this.isLanding) {
      return '#802cb8';
    }
    return this.selectedTheme().bg_color;
  }

  textColor() {
    if (this.isLanding) {
      return '#220138';
    }
    return this.selectedTheme().color;
  }

  storeInfo() {
    return Globals.storeInfo;
  }

  title() {
    var suffix = 'account';
    if (this.isLanding) suffix = 'store';

    if (this.isSignIn()) {
      return 'Sign in to your ' + suffix;
    } else if (this.isSignUp()) {
      var action = 'Create your ';
      if (this.isLanding) action = 'Launch your ';

      return action + suffix;
    }
    return 'Recover your ' + suffix;
  }

  selectedIndicator() {
    if (!Globals.storeInfo) { return {
      name: '',
      color: '',
      bg_color: '',
    }}
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

  selectedTheme() {
    let co = Globals.storeInfo?.colorStyle?.btn_color;
    let bco = Globals.storeInfo?.colorStyle?.bg_color;
    let name = Globals.storeInfo?.colorStyle?.name;

    let color = 'rgba(' + co[0] + ',' + co[1] + ',' + co[2] + ',' + co[3] + ')';

    let bg_color =
      'rgba(' + bco[0] + ',' + bco[1] + ',' + bco[2] + ',' + bco[3] + ')';

    var theme: Dict<string> = {
      name: name,
      color: color,
      bg_color: bg_color,
    };
    return theme;
  }

  authForm = this.fb.group({
    username: [
      null,
      [Validators.required, Validators.minLength(3), Validators.maxLength(50)],
    ],
    email: [null, [Validators.required, Validators.email]],
  });

  loginForm = this.fb.group({
    username: [
      null,
      [Validators.required, Validators.minLength(3), Validators.maxLength(50)],
    ],
    password: [
      null,
      [Validators.required, Validators.minLength(6), Validators.maxLength(50)],
    ],
  });
  constructor(
    private cdr: ChangeDetectorRef,
    private load: LoadService,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService,
    private authService: AuthService
  ) {}

  isSpinning = false;
  isSpinningLog = false;

  showSpinner() {
    if (!this.isSpinning) {
      this.isSpinning = true;
      this.spinner.show('loginSpinner');
    }
  }

  hideSpinner() {
    if (this.isSpinning) {
      this.spinner.hide('loginSpinner');
      this.isSpinning = false;
    }
  }

  showLogSpinner() {
    if (!this.isSpinningLog) {
      this.isSpinningLog = true;
      this.spinner.show('logSpinner');
    }
  }

  hideLogSpinner() {
    if (this.isSpinningLog) {
      this.spinner.hide('logSpinner');
      this.isSpinningLog = false;
    }
  }

  isSignIn() {
    return this.authMode == 2;
  }

  isGoogle() {
    return this.authMode == 4;
  }
  isApple() {
    return this.authMode == 3;
  }
  isSignUp() {
    return this.authMode == 1;
  }

  isRecover() {
    return this.authMode == 5;
  }

  changeAuth(to: number) {
    this.authMode = to;
    this.hideSpinner();
    this.cdr.detectChanges();
  }




  error(err: string) {
    this.spinner.hide('loginSpinner');
    console.log(err);
    this.err = err;
    this.cdr.detectChanges();
  }


  // useApple(){
  //   this.load.myCallback = () => this.close()
  //   this.load.errCallback = (err: string) => this.error(err)

  //   this.load.registerAccount("Apple", undefined, this.affiliate)
  // }

  // useGoogle(){
  //   this.load.myCallback = () => this.close()
  //   this.load.errCallback = (err: string) => this.error(err)

  //   this.load.registerAccount("Google", undefined, this.affiliate)
  // }

  storeVal() {
    return (this.authForm.controls.username.value ?? '')
      ?.replace(/[^a-zA-Z0-9]/g, '')
      .split(' ')
      .join('')
      .trim() as string;
  }



  hide = true

  ngOnInit(): void {
    this.username = this.isLanding ? 'Store Name' : 'Username';
  }
}