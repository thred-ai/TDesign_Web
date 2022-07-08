import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  loc?: any;
  @Input() set analytics(loc: any) {
    this.loc = loc;
    this.dataSource = new MatTableDataSource<any>(loc.data);
    this.dataSource!.paginator = this.paginator!;
    this.cdr.detectChanges();
  }


  @Output() viewLocation = new EventEmitter<any>();
  @Output() openLocation = new EventEmitter<any>();

  dataSource?: MatTableDataSource<any>;

  displayedColumns2: string[] = [
    'name',
    'views',
    'sales',
    'action',
  ];

  ngOnChanges() {
    this.analytics = this.loc!;
    this.cdr.detectChanges();
  }

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewInit() {}
}
