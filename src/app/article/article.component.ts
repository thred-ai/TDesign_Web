import { Component, OnInit, Inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { LoadService, Dict } from '../services/load.service';
import { Globals } from '../globals';
import { isPlatformBrowser } from '@angular/common';
import { Blog } from '../models/blog.model';
import { AppComponent } from '../app.component';
import { RoutingService } from '../services/routing.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformID: Object,
    private cdr: ChangeDetectorRef,
    private router: ActivatedRoute,
    private titleService: Title, 
    private metaService: Meta,
    private loadService: LoadService,
    private _router: Router,
    private routingService: RoutingService,
    private rootComponent: AppComponent,
  ) {}

    storeInfo(){return Globals.storeInfo}

  availableCurrencies(){return Globals.availableCurrencies}

  selectedCurrency(){return Globals.selectedCurrency}

  templates(){return Globals.availableTemplates}

  availableTemplates(){return Globals.availableTemplates}


  blogs(){return Globals.blogs}

  selectedBlog(){return Globals.selectedBlog}

  blogItems(){
    return this.selectedBlog()?.blogItems ?? []
  }  

  isBrowser(){
    return isPlatformBrowser(this.platformID)
  }

  formattedText(text: string){
    return text.replace(/\n/g, "<br>") ?? "";
  }

  isText(item: Dict<any>){
    return item.Type == "Text"
  }

  productUrl(item: Dict<any>){
    return this.loadService.getURL(this.storeInfo()?.uid ?? "", item.Content)
  }

  coverUrl(){
    return "url(" + this.selectedBlog()!.coverURl.toString() + ")"
  }

  format(d: Date) {
    return Globals.months[d.getMonth()] + ", " + d.getDate() + " " + d.getFullYear()
  }

    ngOnInit(): void {
      this.init()
    }

    minRead(){
      return Math.ceil((Globals.selectedBlog?.blogItems.length ?? 0) * 0.5) + " min read"
    }

    // routeTo404(){
    //   const storeName = this.getStoreName()
    //   this._router.navigateByUrl(storeName + '/' + "not-found")
    // }
  
    checkLoad(blogID: string){
      if (Globals.selectedBlog == undefined){
        Globals.selectedBlog == new Blog()
        this.loadService.getBlog(blogID)
        return
      }
      else{

        if (!(Globals.selectedBlog.isAvailable)){
          // this.routingService.routeTo404(this.getStoreName().isCustom)
          return
        }
        else{
        }
        this.rootComponent.setFavIcon(Globals.storeInfo?.profileLink!.toString())
        this.addTags(Globals.selectedBlog?.title ?? "", Globals.selectedBlog?.coverURl?.toString() ?? "", "", "https://shopmythred.com")
        if (isPlatformBrowser(this.platformID)){
          if (Globals.storeInfo?.uid == undefined){
            const storeName = this.getStoreName()
            this.loadService.getUser(storeName)
            return
          }
          else if (Globals.storeInfo?.uid != Globals.selectedBlog.uid){
              // this.routingService.routeTo404(this.getStoreName().isCustom)
              return
          }
          else{
            //ADD TAGS
            this.cdr.detectChanges()
          }
        }
      }
    }
    
    init() {
  
      const blogID = this.getArticleID()

      Globals.selectedBlog = undefined

      this.loadService.myCallback = () => this.checkLoad(blogID)
      this.checkLoad(blogID)
      
  
    }

    getArticleID(){
      const routeParams = this.router.snapshot.paramMap;
      const productID = routeParams.get('article') as string;
  
    // Find the product that correspond with the id provided in route.
      return productID
    }

    addTags(title: string, imgUrl: string, description: string, url: string){
      this.metaService.updateTag({property: 'og:title', content: title});
      this.metaService.updateTag({property: 'og:image', content: imgUrl});
      this.metaService.updateTag({property: 'og:url', content: url})
      this.metaService.updateTag({property: 'og:description', content: description})
      var newTitle = title
      if (Globals.storeInfo?.fullName){
        newTitle += " - " + Globals.storeInfo?.fullName ?? ""
      }
      this.titleService.setTitle(newTitle)
      this.metaService.updateTag({property: 'description', content: description})
    }
   

  getStoreName(){
    const routeParams = this.router.snapshot.paramMap;
    const storeID = routeParams.get('user') as string;

  // Find the product that correspond with the id provided in route.
    return storeID
  }

}
