import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Collection } from '../models/collection.model';
import { NFT } from '../models/nft.model';
import { Store } from '../models/store.model';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  @Input() product?: NFT = undefined;
  @Input() collection?: Collection = undefined;
  @Input() storeInfo?: Store = undefined;
  @Input() selectedTheme?: any = undefined;
  @Input() hidePrice?: boolean = false;
  @Input() lazy?: boolean = true;
  @Input() canOpen?: boolean = true;


  @Output() nftPressed = new EventEmitter<{
    nft: NFT,
    col: Collection
  }>();
  // @Output() didClose = new EventEmitter<boolean>();

  
  constructor() { 
  }

  ngOnInit(): void {
  }

}
