import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Collection } from '../models/collection.model';
import { NFT } from '../models/nft.model';
import { Row } from '../models/row.model';
import { Store } from '../models/store.model';
import { Dict } from '../services/load.service';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.css']
})
export class ProductSectionComponent implements OnInit {

  @Input() items?: Dict<{
    nft: NFT;
    collection: Collection;
  }> = {};

  @Input() row?: Row = undefined;

  @Input() storeInfo?: Store = undefined;
  @Input() selectedTheme?: any = undefined;
  @Input() canOpen?: boolean = true;

  @Output() nftPressed = new EventEmitter<{
    nft: NFT,
    col: Collection
  }>();

  @Input() hidePrice?: boolean = false;
  @Input() lazy: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
