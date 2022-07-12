import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SafeTextRowsPipe } from '../safe-text-rows.pipe';
import { ProductsPipePipe } from '../products-pipe.pipe';
import { StoreThemePipe } from '../store-theme.pipe';
import { StoreBannerPipe } from '../store-banner.pipe';
import { StringPipePipe } from '../string-pipe.pipe';
import { safeHtmlPipe } from '../safeHtml.pipe';
import { LiveEarthPipePipe } from '../live-earth-pipe.pipe';
import { LiveEarthViewPipePipe } from '../live-earth-view-pipe.pipe';
import { LiloadedAllProductsPipePipe } from '../liloaded-all-products-pipe.pipe';
import { VideoPipePipe } from '../video-pipe.pipe';
import { SafeUrlPipe } from '../safe-url.pipe';
import { StoreCheckerPipe } from '../store-checker.pipe';
import { HtmlPipe } from '../html.pipe';
import { MatIconPipe } from '../mat-icon.pipe';
import { ClassCheckPipe } from '../class-check.pipe';
import { CollectionPipePipe } from '../collection-pipe.pipe';
import { StorePipe } from '../store.pipe';
import { PricePipe } from '../price.pipe';
import { ProductFilterPipe } from '../product-filter.pipe';
import { CollectionFilterPipe } from '../collection-filter.pipe';
import { AddressPipe } from '../address.pipe';
import { DateAgoPipe } from '../date-ago.pipe';
import { TypeofPipe } from '../typeof.pipe';
import { ProviderCheckPipe } from '../provider-check.pipe';
import { NetworkCheckPipe } from '../network-check.pipe';
import { FileDownloaderPipe } from '../file-downloader.pipe';
import { BufferToBase64Pipe } from '../buffer-to-base64.pipe';
import { EventSortPipe } from '../event-sort.pipe';
import { EventTimestampPipe } from '../event-timestamp.pipe';
import { DateConstructPipe } from '../date-construct.pipe';
import { WalletBalancePipe } from '../wallet-balance.pipe';
import { ProviderAddressPipe } from '../provider-address.pipe';
import { Big2NumPipe } from '../big-2-num.pipe';
import { CurrencyIconPipe } from '../currency-icon.pipe';
import { RatePipePipe } from '../rate-pipe.pipe';
import { ProductCurrencyPipe } from '../product-currency.pipe';
import { StrPipe } from '../str.pipe';
import { OwnedCollectionsPipe } from '../owned-collections.pipe';
import { CommaNumPipe } from '../comma-num.pipe';
import { WalletProviderPipe } from '../wallet-provider.pipe';
import { TokenInfoPipe } from '../token-info.pipe';
import { LoggedInPipe } from '../logged-in.pipe';
import { NftPipe } from '../nft.pipe';
import { BigNumPipe } from '../big-num.pipe';
import { ModelViewerPipe } from '../model-viewer.pipe';
import { ViewsPipe } from '../views.pipe';
import { SalesPipe } from '../sales.pipe';
import { LocationPipe } from '../location.pipe';
import { PaginatorPipe } from '../paginator.pipe';
import { UtilityDataPipe } from '../utility-data.pipe';
import { UtilityInfoPipe } from '../utility-info.pipe';

@NgModule({
  imports: [
    // dep modules
  ],
  declarations: [ 
    SafeTextRowsPipe, 
    ProductsPipePipe, 
    StoreThemePipe, 
    StoreBannerPipe, 
    StringPipePipe,
    safeHtmlPipe,
    LiveEarthPipePipe,
    LiveEarthViewPipePipe,
    LiloadedAllProductsPipePipe,
    VideoPipePipe,
    SafeUrlPipe,
    StoreCheckerPipe,
    HtmlPipe,
    MatIconPipe,
    ClassCheckPipe,
    CollectionPipePipe,
    StorePipe,
    PricePipe,
    ProductFilterPipe,
    CollectionFilterPipe,
    AddressPipe,
    DateAgoPipe,
    TypeofPipe,
    ProviderCheckPipe,
    NetworkCheckPipe,
    FileDownloaderPipe,
    BufferToBase64Pipe,
    EventSortPipe,
    EventTimestampPipe,
    DateConstructPipe,
    WalletBalancePipe,
    ProviderAddressPipe,
    Big2NumPipe,
    CurrencyIconPipe,
    RatePipePipe,
    ProductCurrencyPipe,
    StrPipe,
    OwnedCollectionsPipe,
    CommaNumPipe,
    WalletProviderPipe,
    TokenInfoPipe,
    LoggedInPipe,
    NftPipe,
    BigNumPipe,
    ModelViewerPipe,
    ViewsPipe,
    SalesPipe,
    LocationPipe,
    PaginatorPipe,
    UtilityDataPipe,
    UtilityInfoPipe,
  ],
  exports: [
    SafeTextRowsPipe,
    ProductsPipePipe,
    StoreThemePipe, 
    StoreBannerPipe,
    StringPipePipe,
    safeHtmlPipe,
    LiveEarthPipePipe,
    LiveEarthViewPipePipe,
    LiloadedAllProductsPipePipe,
    VideoPipePipe,
    SafeUrlPipe,
    StoreCheckerPipe,
    HtmlPipe,
    MatIconPipe,
    ClassCheckPipe,
    CollectionPipePipe,
    StorePipe,
    PricePipe,
    ProductFilterPipe,
    CollectionFilterPipe,
    AddressPipe,
    DateAgoPipe,
    TypeofPipe,
    ProviderCheckPipe,
    NetworkCheckPipe,
    FileDownloaderPipe,
    BufferToBase64Pipe,
    EventSortPipe,
    EventTimestampPipe,
    DateConstructPipe,
    WalletBalancePipe,
    ProviderAddressPipe,
    Big2NumPipe,
    CurrencyIconPipe,
    RatePipePipe,
    ProductCurrencyPipe,
    StrPipe,
    OwnedCollectionsPipe,
    CommaNumPipe,
    TokenInfoPipe,
    LoggedInPipe,
    NftPipe,
    BigNumPipe,
    ModelViewerPipe,
    ViewsPipe,
    SalesPipe,
    LocationPipe,
    PaginatorPipe,
    UtilityDataPipe,
    UtilityInfoPipe
  ]
})
export class ApplicationPipesModule {}