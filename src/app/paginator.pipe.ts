import { Pipe, PipeTransform } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NFT } from './models/nft.model';
import { Dict } from './services/load.service';

@Pipe({
  name: 'paginator',
})
export class PaginatorPipe implements PipeTransform {
  transform(value: NFT[], paginator: MatPaginator) {
    let data = new MatTableDataSource<NFT>(value);

      data.paginator = paginator;
    
    return data;
  }
}
