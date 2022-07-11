import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Page } from '../models/page.model';

@Component({
  selector: 'app-page-table',
  templateUrl: './page-table.component.html',
  styleUrls: ['./page-table.component.css']
})
export class PageTableComponent implements OnInit {

  pages?: Page[] = [];
  @Input() set data(pages: Page[]) {
    this.pages = pages;
    this.dataSource = new MatTableDataSource<Page>(pages);
    this.dataSource!.paginator = this.paginator!;
    this.cdr.detectChanges();
  }


  @Output() viewPage = new EventEmitter<any>();

  dataSource?: MatTableDataSource<Page>;

  displayedColumns2: string[] = [
    'name',
    'id',
    'status',
    'url',
    'action',
  ];

  ngOnChanges() {
    this.data = this.pages!;
    this.cdr.detectChanges();
  }

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewInit() {}

}

