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
    return Globals.storeInfo.colorStyle.text_code;
  }

  backCode() {
    if (this.isLanding) {
      return 'dark';
    }
    return Globals.storeInfo.colorStyle.back_code;
  }

  connect() {
    if (this.authMode == 1) {
      this.loadingAction = 'Connecting...';

      this.showSpinner();

      this.authService.signInWithMetaMask(
        (uid?: string, app?: AppComponent, error?: string) => {
          this.hideSpinner();
          console.log(error);
          if (uid) {
            app!.signedIn = true;
            app!.signedInUid = uid;
            app?.setOptions();
            this.close();
            return;
          } else if (error) {
            this.err = error;
            if (error == 'signin') {
              this.authMode = 2;
            }
          }
        }
      );
    } else {
      const email = (this.authForm.controls.email.value ?? '') as string;

      const username = this.storeVal();

      if (username == '' || email == '') {
        this.err = 'Invalid Username or Email';
        return;
      }

      // let associated = (Globals.storeInfo?.uid && Globals.storeInfo?.uid != '') ? Globals.storeInfo?.uid : undefined

      this.loadingAction = 'Creating Account...';

      this.showLogSpinner();

      this.authService.signUpWithMetaMask(
        email.replace(/\s/g, '').split(' ').join('').trim().toLowerCase(),
        username.replace(/\s/g, '').split(' ').join('').trim().toLowerCase(),
        (uid?: string, app?: AppComponent, error?: string) => {
          this.hideLogSpinner();
          if (uid) {
            app!.signedIn = true;
            app!.signedInUid = uid;
            app?.setOptions();
            this.close();
          } else if (error) {
            this.err = error;
          }
        }
      );
    }
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

  useGuest() {
    this.loadingAction = 'Making Guest Account...';

    this.showSpinner();
    this.load.registerAccount('Guest', (app, error) => {
      if (error) {
        this.err = error;
        this.hideSpinner();
      } else {
        app?.setOptions();
        this.close();
      }
    });
  }

  async close() {
    this.hideSpinner();
    if (this.isLanding) {
      this.signedIn.emit(true);
    } else {
      let user = await this.load.isLoggedIn();
      if (
        Globals.storeInfo.uid &&
        Globals.storeInfo.uid != '' &&
        user?.uid &&
        user?.uid != Globals.storeInfo.uid &&
        user?.email &&
        Globals.isNewUser &&
        !user?.isAnonymous
      ) {
        this.load.saveData(
          0,
          user?.email,
          (success) => {
            this.spinner.hide('popupSpinner');
            if (success) {
            } else {
              this.err = 'An Error Occured, Try Again Later';
            }
          },
          undefined,
          Globals.storeInfo.uid
        );
      }
      this.modalService.dismissAll('success');
    }
  }

  error(err: string) {
    this.spinner.hide('loginSpinner');
    console.log(err);
    this.err = err;
    this.cdr.detectChanges();
  }

  signInEmail() {
    if (this.loginForm.valid) {
      const usernameOrEmail =
        this.loginForm.controls.username.value.toLowerCase();

      const password = this.loginForm.controls.password.value;

      let fieldToSearch = 'Username';

      const credentials = {
        email: usernameOrEmail,
        password: password,
        Code: password,
        Field: fieldToSearch,
        Term: usernameOrEmail,
      };
      this.loadingAction = 'Signing in...';

      this.showSpinner();

      if (usernameOrEmail.includes('@')) {
        // this.showSpinner()
        this.load.registerAccount(
          'Email_IN',
          (app, error) => {
            if (error) {
              this.err = error;
              this.hideSpinner();
            } else {
              app?.setOptions();
              this.close();
            }
          },
          credentials
        );
      } else {
        // this.showSpinner()
        this.load.registerAccount(
          'Email_IN_USER',
          (app, error) => {
            if (error) {
              this.err = error;
              this.hideSpinner();
            } else {
              app?.setOptions();
              app!.signedIn = true;
              app!.signedInUid = Globals.storeInfo.uid;
              this.close();
            }
          },
          credentials
        );
      }
    } else {
      this.err = 'One or more fields are invalid.';
    }
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

  useEmail() {
    if (this.authForm.valid) {
      const password = (this.authForm.controls.password.value ?? '') as string;

      const confirmpassword = (this.authForm.controls.confirmpassword.value ??
        '') as string;

      const email = (this.authForm.controls.email.value ?? '') as string;

      const username = this.storeVal();

      if (password == '' || username == '' || email == '') {
        return;
      }

      if (password?.replace(/\s/g, '') != confirmpassword?.replace(/\s/g, '')) {
        this.error("Password Field's don't match");
        return;
      }

      let associated =
        Globals.storeInfo?.uid && Globals.storeInfo?.uid != ''
          ? Globals.storeInfo?.uid
          : undefined;

      const credentials = {
        email: email
          .replace(/\s/g, '')
          .split(' ')
          .join('')
          .trim()
          .toLowerCase(),
        password: password
          .replace(/\s/g, '')
          .split(' ')
          .join('')
          .trim()
          .toLowerCase(),
        username: username
          .replace(/\s/g, '')
          .split(' ')
          .join('')
          .trim()
          .toLowerCase(),
      };

      this.loadingAction = 'Creating Account...';

      this.showSpinner();

      if (password == confirmpassword) {
        this.load.myCallback = () => this.close();
        this.load.checkUsername(username, (err) => {
          if (err) {
            this.error(err);
          } else {
            this.load.registerAccount(
              'Email_UP',
              (app, error) => {
                if (error) {
                  this.err = error;
                  this.hideSpinner();
                } else {
                  app!.signedIn = true;
                  app!.signedInUid = Globals.storeInfo.uid;
                  app?.setOptions();
                  this.hideSpinner();
                  this.close();
                }
              },
              credentials,
              this.affiliate,
              associated
            );
          }
        });
      } else {
        this.hideSpinner();
      }
    } else {
      if (this.authForm.controls.password.invalid) {
        this.err = 'Password must be longer than 6 characters.';
      } else if (this.authForm.controls.email.invalid) {
        this.err = 'Invalid Email';
      }
    }
    return false;
  }

  hide = true

  ngOnInit(): void {
    this.username = this.isLanding ? 'Store Name' : 'Username';
  }
}
