import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { switchMap, first } from 'rxjs/operators';
import detectEthereumProvider from '@metamask/detect-provider';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { Globals } from '../globals';
import { LoadService } from './load.service';
import { AppComponent } from '../app.component';
import { ethers } from 'ethers';
interface NonceResponse {
  nonce: string;
}

interface VerifyResponse {
  token: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private auth: AngularFireAuth,
    private functions: AngularFireFunctions,
    private loadService: LoadService
  ) {}

  app?: AppComponent = undefined;

  public async signInWithMetaMask(
    callback: (uid?: string, app?: AppComponent, error?: string) => any
  ) {
    try {

      // Step 1: Request (limited) access to users ethereum account
      let provider = await Globals.initializeProvider()

      if (!provider) {
        callback(undefined, this.app, 'Please install MetaMask');
        return;
      }

      let address = await provider.getSigner().getAddress()

      this.functions
        .httpsCallable('getNonceToSign')({
          address: address.toLowerCase(),
        })
        .pipe(first())
        .subscribe(async (response) => {
          if (!response || !response.nonce) {
            callback(undefined, this.app, 'login');
            return;
          }
          try {

            let s = await provider.getSigner().signMessage(`0x${this.toHex(`${response.nonce}`)}`)

            this.functions
              .httpsCallable('verifySignedMessage')({
                address: address,
                signature: s,
              })
              .pipe(first())
              .subscribe(async (resp) => {
                let user = await this.auth.signInWithCustomToken(resp.token);
                callback(user.user?.uid, this.app, '');
                return;
              });
          } catch (error) {
            console.log(error)
            callback(undefined, this.app, '');
          }
        });
    } catch (error) {
      callback(undefined, this.app, 'Something went wrong. Please try again later');
    }
  }

  randomString = function (length: number) {
    var text = '';
    var possible = '0123456789';
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

  randomHash() {
    return Array.apply(0, Array(66))
      .map(function () {
        return (function (charset) {
          return charset.charAt(Math.floor(Math.random() * charset.length));
        })(
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$%&!.+=-'
        );
      })
      .join('');
  }

  public async signUpWithMetaMask(
    email: string,
    username: string,
    callback: (uid?: string, app?: AppComponent, error?: string) => any
  ) {
    try {
      let ethereum: any;
      var nonce = this.randomString(10);
      let password = this.randomHash();
      let provider = await from(detectEthereumProvider()).toPromise();

      if (!provider) {
        callback(undefined, this.app, 'Please install MetaMask');
        return;
      }

      ethereum = provider;

      return this.auth
        .createUserWithEmailAndPassword(email, password)
        .then(async (result) => {
          await result.user?.sendEmailVerification();
          if (result.user && username) {
            Globals.isNewUser = result.additionalUserInfo?.isNewUser ?? false;
            await this.loadService.setUsername(
              result.user?.uid,
              username,
              true,
              undefined,
              undefined,
              nonce,
              ethereum.selectedAddress.toLowercase()
            );
            callback(result.user.uid, this.app);
          } else {
            await this.auth.signOut();
            callback(
              undefined,
              this.app,
              'Something went wrong. Please try again later'
            );
          }
        });
    } catch (error) {
      callback(undefined, this.app, 'Something went wrong. Please try again later');
    }
  }

  private toHex(stringToConvert: string) {
    return stringToConvert
      .split('')
      .map((c) => c.charCodeAt(0).toString(16).padStart(2, '0'))
      .join('');
  }
}
