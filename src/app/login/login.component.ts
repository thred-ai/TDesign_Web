import { Component, OnInit, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';

import { LoadService, Dict } from '../services/load.service';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Globals } from '../globals';
import { NgxSpinnerService } from 'ngx-spinner';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authMode = 1
  err = ""
  title = "account"

  @Input() isLanding?: boolean;
  @Input() affiliate?: string;

  @Output() signedIn = new EventEmitter<boolean>();


  loadingAction = "Creating Account..."

  storeInfo(){
    return Globals.storeInfo
  }

  selectedIndicator(){

    let co = Globals.storeInfo?.loading?.color
    let bco = Globals.storeInfo?.loading?.bg_color
    let name = Globals.storeInfo?.loading?.name
    
    let color = "rgba(" + co[0] + "," + co[1] + "," + co[2] + "," + co[3] + ")"

    let bg_color = "rgba(" + bco[0] + "," + bco[1] + "," + bco[2] + "," + bco[3] + ")"

    let indicator: Dict<string> = {
      "name": name,
      "color": color,
      "bg_color": bg_color
    }
    return indicator
  }

  selectedTheme(){
    
    let co = Globals.storeInfo?.colorStyle?.btn_color
    let bco = Globals.storeInfo?.colorStyle?.bg_color
    let name = Globals.storeInfo?.colorStyle?.name

    let color = "rgba(" + co[0] + "," + co[1] + "," + co[2] + "," + co[3] + ")"

    let bg_color = "rgba(" + bco[0] + "," + bco[1] + "," + bco[2] + "," + bco[3] + ")"

    var theme: Dict<string> = {
      "name": name,
      "color": color,
      "bg_color": bg_color
    }
    return theme
  }


  authForm = this.fb.group({
    username: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    confirmpassword: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
  });

  loginForm = this.fb.group({
    username: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    password: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
  });

  constructor(
    private cdr: ChangeDetectorRef, 
    private load: LoadService, 
    private fb: FormBuilder, 
    private modalService: NgbModal,
    private spinner: NgxSpinnerService,
  ) { }

  isSpinning = false



showSpinner(){
  if (!this.isSpinning){
    this.isSpinning = true
    this.spinner.show("loginSpinner")

    setTimeout(() => {
        this.hideSpinner()
    }, 2000);
  }
}

hideSpinner(){
  if (this.isSpinning){
    this.spinner.hide("loginSpinner")
    this.isSpinning = false
  }
}

  isSignIn(){
    this.loadingAction = "Signing in..."
    return this.authMode == 2
  }
  isGoogle(){
    this.loadingAction = "Signing in..."
    return this.authMode == 4
  }
  isApple(){
    this.loadingAction = "Signing in..."
    return this.authMode == 3
  }
  isSignUp(){
    this.loadingAction = "Creating Account..."
    return this.authMode == 1
  }

  changeAuth(to: number){
    this.authMode = to
    this.hideSpinner()
    this.cdr.detectChanges()
  }

  useGuest(){

    this.load.myCallback = () => this.close()

    this.showSpinner()
    this.load.registerAccount("Guest")
  }
  
  close(){
    this.hideSpinner()
    console.log("go")
    if (this.isLanding){
      this.signedIn.emit(true)
    }
    else{
      this.modalService.dismissAll("success")
    }
  }


  error(err: string){
    this.spinner.hide("loginSpinner")
    console.log(err)
    this.err = err
    this.cdr.detectChanges()    
  }



  signInEmail(){

    if (this.loginForm.valid){

      this.load.myCallback = () => this.close()
      this.load.errCallback = (err: string) => this.error(err)


      const usernameOrEmail = this.loginForm.controls.username.value

      const password = this.loginForm.controls.password.value

      let fieldToSearch = "Username"
  
      const credentials = {
        "email": usernameOrEmail,
        "password": password,
        "Code" : password,
        "Field" : fieldToSearch,
        "Term" : usernameOrEmail
      }
  
      this.showSpinner()

      if (usernameOrEmail.includes("@")){
        // this.showSpinner()
        this.load.registerAccount("Email_IN", credentials)
      }
      else{
        // this.showSpinner()
        this.load.registerAccount("Email_IN_USER", credentials)
      }
    }
    else{

    }
  }

  useApple(){
    this.load.myCallback = () => this.close()
    this.load.errCallback = (err: string) => this.error(err)

    this.load.registerAccount("Apple", undefined, this.affiliate)
  }

  useGoogle(){
    this.load.myCallback = () => this.close()
    this.load.errCallback = (err: string) => this.error(err)

    this.load.registerAccount("Google", undefined, this.affiliate)
  }

  useEmail(){

    if (this.authForm.valid){


      const email = this.authForm.controls.email.value

      const username = this.authForm.controls.username.value

      const password = this.authForm.controls.password.value

      const confirmpassword = this.authForm.controls.confirmpassword.value

      const credentials = {

        "email": email,
        "password": password,
        "username": username,
      }

      console.log(this.affiliate)
      this.showSpinner()
      if (password == confirmpassword){
        this.load.myCallback = () => this.close()        
        this.load.checkUsername(username, err => {
          if (err){
            this.error(err)
          }
          else{
            this.load.registerAccount("Email_UP", credentials, this.affiliate)
          }
        })
      }
    }
    return false

  }

  ngOnInit(): void {
    
    if (this.isLanding) this.title = 'store'
  }

}
