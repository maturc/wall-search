import { Component, OnInit } from '@angular/core';
import { ApiBridgeService } from '../api-bridge.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  isLoading: boolean = true;
  images: Array<object> = [];
  pages: IPages = {
    current_page: 1,
    last_page: 1000
  };
  constructor(private api: ApiBridgeService) {}
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(pageNum: number = 1) {
    this.isLoading = true;
    this.api.getLatest(pageNum).subscribe( (data: IData) => {
      this.setState(data);
      this.isLoading = false;
      console.table(this.images, ["path"]);
      console.log(data);
    });
  }
  setState(data: IData) {
    this.images = data.data;

    this.pages.current_page = data.meta.current_page;
    this.pages.last_page    = data.meta.last_page;
  }
}

interface IData {
  data: Array<object>;
  meta: IPages
}
export interface IPages {
  current_page: number;
  last_page: number;
}