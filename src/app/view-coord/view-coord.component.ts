import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Collection } from '../models/collection.model';
import { NFT } from '../models/nft.model';
import { Dict } from '../services/load.service';

@Component({
  selector: 'app-view-coord',
  templateUrl: './view-coord.component.html',
  styleUrls: ['./view-coord.component.css']
})
export class ViewCoordComponent implements OnInit {

  @Input() coord?: Dict<any>;
  @Output() close = new EventEmitter<boolean>();
  @Output() open = new EventEmitter<{asset: NFT, contract: Collection}>();

  viewMapping:
      {[k: string]: string} = {'=0': 'No Views', '=1': '1 View', 'other': '# Views'};
  saleMapping:
      {[k: string]: string} = {'=0': 'No Sales', '=1': '1 Sale', 'other': '# Sales'};
  
  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

  }

  openDialog(){
    this.open.emit({asset: this.coord!.product, contract: this.coord!.collection})
    // this.close.emit(true)
    this.cdr.detectChanges()
  }

}
