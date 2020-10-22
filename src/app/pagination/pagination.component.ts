import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPages } from '../home/home.component';
import { ApiBridgeService } from '../api-bridge.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass']
})
export class PaginationComponent implements OnInit {
  @Input() pages: IPages;
  @Output() fetchDataEvent = new EventEmitter();
  paginationArray: Array<number> = [];
  numberOfPageItems: number = 9; //has to be odd
  current_page: number;

  ngOnInit(): void {
    this.current_page = this.pages.current_page;
    this.handlePagination();
  }
  handlePagination() {
    let middlePageItem: number = 1;
    const halfOfPageItems: number = Math.floor(this.numberOfPageItems / 2);
    if (this.current_page === 1) {
      middlePageItem = this.current_page + halfOfPageItems;
    } else if (this.current_page <= this.numberOfPageItems/2) {
      middlePageItem = 1 + halfOfPageItems;
    } else if (this.current_page === this.pages.last_page) {
      middlePageItem = this.current_page - halfOfPageItems;
    } else if (this.current_page >= this.pages.last_page-this.numberOfPageItems/2) {
      middlePageItem = this.pages.last_page - halfOfPageItems;
    } else {
      middlePageItem = this.current_page;
    }
    this.fillPaginationArray(middlePageItem);
  }
  fillPaginationArray(n: number) {
    let m = Math.floor(this.numberOfPageItems / 2);
    for( let i = 0; i < this.numberOfPageItems; i++ ) {
      this.paginationArray[i] = n - m;
      m--;
    }
  }
  handleClick(n: number) {
    if(n >= 1 && n <= this.pages.last_page) {
      this.fetchDataEvent.emit(n);
      this.current_page = n;
      this.handlePagination();
    }
  }
}
