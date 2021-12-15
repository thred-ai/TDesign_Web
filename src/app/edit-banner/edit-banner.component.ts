import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Banner } from '../models/banner.model';
import { Dict, LoadService } from '../services/load.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-edit-banner',
  templateUrl: './edit-banner.component.html',
  styleUrls: ['./edit-banner.component.css']
})
export class EditBannerComponent implements OnInit {

  banner?: Banner
  icons = new Array<any>()
  OnDestroy = new Subject<void>();


  filteredCodeCtrl: FormControl = new FormControl();
  filteredIcons: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>([])

  bannerForm = this.fb.group({
    text: [null],
    icon: [null],
    bannerTextColor: [null, Validators.required],
    bannerColor: [null, Validators.required],
  });

  formattedName(name: string){
    let str = name?.replace("_", " ").replace("_", " ").replace("_", " ").replace("_", " ")
    return this.titleCase(str)
  }

  titleCase(str: string = '') {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    return splitStr.join(' '); 
 }

  bannerTheme(banner: Banner){
    
    let co = banner.color
    let bco = banner.bg_color
    let text = banner.text


    let color = "rgba(" + co[0] + "," + co[1] + "," + co[2] + "," + co[3] + ")"

    let bg_color = "rgba(" + bco[0] + "," + bco[1] + "," + bco[2] + "," + bco[3] + ")"

    var theme: Dict<string> = {
      "text": text,
      "color": color,
      "bg_color": bg_color
    }
    return theme
  }
  selectBannerColor(value: string, isPrimary: boolean){

  
    if (isPrimary){
      this.bannerForm.controls.bannerTextColor.setValue(value ?? [])
    }
    else{
      this.bannerForm.controls.bannerColor.setValue(value ?? [])
    }

    // this.showSampleSpinner(2000)

}

joinColor(color: string){

  let c = color?.replace("rgb", "")?.replace("a", "")?.replace("(", "")?.replace(")", "")?.split(",")
  var returnArr = new Array<string>()
  c.forEach(element => {
    returnArr.push(element.trim())
  });

  if (returnArr.length < 4){
    for (let i = 0; i < (4 - returnArr.length); i++) {
        returnArr.push("1")
    }
  }

  return returnArr.join(",")
}


save(){

  let bg_color = this.bannerForm.controls.bannerColor
  let color = this.bannerForm.controls.bannerTextColor
  let text = this.bannerForm.controls.text
  var icon = this.bannerForm.controls.icon

  if (!(this.icons.find(ic => { return ic.icons.find((i: string) => i == icon.value)}))){
    icon.setValue(undefined)
  }

  if (this.bannerForm.valid){



    let banner = new Banner(
      text.value ?? '', 
      icon.value ?? '', 
      this.loadService.parseColor(this.joinColor(bg_color.value)), 
      this.loadService.parseColor(this.joinColor(color.value))
    )

    this.activeModal.close(banner)
  }
}


  constructor(
    private fb: FormBuilder,
    public activeModal: MatDialogRef<EditBannerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private loadService: LoadService,
    ) {
      this.banner = data.banner

      let co = this.banner?.color ?? []
      let bco = this.banner?.bg_color ?? []
  
      let color = "rgba(" + co[0] + "," + co[1] + "," + co[2] + "," + co[3] + ")"
  
      let bg_color = "rgba(" + bco[0] + "," + bco[1] + "," + bco[2] + "," + bco[3] + ")"

      this.bannerForm.controls.bannerTextColor.setValue(color ?? [])
      this.bannerForm.controls.bannerColor.setValue(bg_color ?? [])

      this.filteredCodeCtrl.setValue(this.banner?.icon)
      this.bannerForm.controls.icon.setValue(this.banner?.icon)
      this.bannerForm.controls.text.setValue(this.banner?.text)

     }

  ngOnInit(): void {
    this.loadService.getBanners(data => {
      this.icons = data ?? []
    })

    this.filteredCodeCtrl.valueChanges
      .pipe(takeUntil(this.OnDestroy))
      .subscribe(() => {
        this.filterCodes();
    });
  }

  height: any

  filterCodes() {
    if (!this.icons) {
      return;
    }
    let search = this.filteredCodeCtrl.value;

    if (!search) {
      this.filteredIcons.next(this.icons.slice());
      this.bannerForm.controls.icon.setValue(undefined)
      return;
    } else {
      search = search.toLowerCase();
    }

    let filt = new Array<any>()

    let i = this.icons.filter(
      (icon) => icon.icons.filter((i: string) => i.toLowerCase().indexOf(search) > -1)
    )

    i.forEach(ic => {
      let newIc = {category: ic.category, icons: new Array<any>()}
      ic.icons.forEach((ico: any) => {
        if (ico.toLowerCase().indexOf(search) > -1){
          newIc.icons.push(ico)
        }
      })
      if (newIc.icons.length > 0){
        filt.push(newIc)
      }
    })

    this.filteredIcons.next(
      filt
    );
    
    if (this.filteredIcons.value?.length < 10) {
      let total = 0
      this.filteredIcons.value.forEach((icon: any) => {
        total += 40
        total += (icon.icons.length * 56)
      })
      this.height = total + 'px';
    } else {
      this.height = '400px'
    }
  }

  selectIcon(icon?: Dict<any>) {
    this.bannerForm.controls.icon.setValue(icon)
  }

  ngOnDestroy(): void {
    this.OnDestroy.next();
    this.OnDestroy.complete();
  }

}
