import { Pipe, PipeTransform, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isPlatformServer } from '@angular/common';
import { Globals } from './globals';

@Pipe({
  name: 'storeChecker'
})
export class StoreCheckerPipe implements PipeTransform {

  constructor(
    private router: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformID: Object,
    ){}

  transform(value: string, matchLink = false) {
    var v = value

    if (matchLink){
      v = Globals.storeInfo?.pages?.find(p => p.id == value)?.url ?? 'home'
    }
    if (this.getStoreName().isCustom){
      return v
    }
    return Globals.storeInfo.username + v
  }


  getStoreName(){
    var request = ""
    if (isPlatformServer(this.platformID)){
      request = Globals.URL
    }
    else{
      request = globalThis.location.host
    }  
    if (request != 'localhost:4200' && request != 'shopmythred.com'){
      return {
        isCustom: true,
        link: request
      }
    }
    const routeParams = this.router.snapshot.paramMap;
    const storeID = routeParams.get('user') as string;
    return {
      isCustom: false,
      link: storeID
    }
  }

}
