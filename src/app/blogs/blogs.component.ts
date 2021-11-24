import { Component, OnInit, PLATFORM_ID, Inject, ChangeDetectorRef } from '@angular/core';
import { Globals } from '../globals';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { LoadService } from '../services/load.service';
import { isPlatformBrowser } from '@angular/common';
import { Blog } from '../models/blog.model';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformID: Object,
    private cdr: ChangeDetectorRef,
    private router: ActivatedRoute,
    private titleService: Title, 
    private metaService: Meta,
    private loadService: LoadService,
    private rootComponent: AppComponent,
    private _router: Router,

  ) {}

  storeInfo(){return Globals.storeInfo}

  blogs(){return Globals.blogs}
    
  ngOnInit(): void {
    this.init()
  }

  routeTo404(){
    const storeName = this.getStoreName()
    this._router.navigateByUrl(storeName + '/' + "not-found")
  }

  routeToMain404(){
    this._router.navigateByUrl("not-found")
  }

  callback(){
    if (Globals.storeInfo.username){
      this.rootComponent.setOptions()
      this.rootComponent.setFavIcon(Globals.storeInfo.profileLink?.toString() ?? '')

      this.addTags(Globals.storeInfo.fullName ?? "Thred", (Globals.storeInfo.profileLink ?? new URL("https://shopmythred.com")).toString(), Globals.storeInfo.bio ?? "Check out my Thred Store!", "shopmythred.com/" + Globals.storeInfo.username)
      if (Globals.blogs.length == 0 && isPlatformBrowser(this.platformID)){
        this.loadService.getBlogs()
      }
      else{
        this.cdr.detectChanges()
      }
    }
    else{
      this.routeToMain404()
    }
  }

  addTags(title: string, imgUrl: string, description: string, url: string){
    this.metaService.updateTag({property: 'og:title', content: title + " - " + "Blogs"});
    this.metaService.updateTag({property: 'og:image', content: imgUrl});
    this.metaService.updateTag({property: 'og:url', content: url})
    this.metaService.updateTag({property: 'og:description', content: description})
    this.titleService.setTitle(title)
    this.metaService.updateTag({property: 'description', content: description})

  }

  format(d: Date) {
    return Globals.months[d.getMonth()].substring(0,3) + " " + d.getDate() + " " + d.getFullYear()
  }
  
  isBrowser(){
    return isPlatformBrowser(this.platformID)
  }
  
  init() {

    const storeName = this.getStoreName()
    this.downloadAllStoreInfo(storeName)
    
  }

  downloadAllStoreInfo(storeName: string){
    this.loadService.myCallback = () => this.callback()
    this.loadService.getUser(storeName)
  }

  getStoreName(){
    const routeParams = this.router.snapshot.paramMap;
    const storeID = routeParams.get('user') as string;

  // Find the product that correspond with the id provided in route.
    return storeID
  }



}
