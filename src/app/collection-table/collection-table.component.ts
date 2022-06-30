import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Collection } from '../models/collection.model';
import { NFT } from '../models/nft.model';
import { NftPipe } from '../nft.pipe';
import { ProductFilterPipe } from '../product-filter.pipe';

@Component({
  selector: 'app-collection-table',
  templateUrl: './collection-table.component.html',
  styleUrls: ['./collection-table.component.css'],
})
export class CollectionTableComponent
  implements OnInit, AfterViewInit, OnChanges
{
  col?: Collection;
  @Input() set collection(col: Collection) {
    let pipe = new NftPipe();
    let sortPipe = new ProductFilterPipe();
    this.col = col;
    this.dataSource = new MatTableDataSource<NFT>(
      sortPipe.transform(pipe.transform(col.NFTs), 'tokenId-asc')
    );
    console.log(this.dataSource);
    this.dataSource!.paginator = this.paginator!;
    this.cdr.detectChanges();
  }

  @Input() count: number = 0;

  @Output() viewNFT = new EventEmitter<{
    contract?: Collection;
    asset?: NFT;
  }>();

  dataSource?: MatTableDataSource<NFT>;

  displayedColumns2: string[] = [
    'image',
    'edition',
    'price',
    'status',
    'action',
  ];

  ngOnChanges() {
    console.log('CHANGED');
    console.log(this.collection);
    console.log(this.col);
    this.collection = this.col!;
    console.log(this.dataSource);

    this.cdr.detectChanges();
  }

  createNewNFT(contract?: Collection, asset?: NFT) {
    console.log(contract);
    console.log(asset);
    this.viewNFT.emit({
      contract,
      asset,
    });
  }

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewInit() {}
}
