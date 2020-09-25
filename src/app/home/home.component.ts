import { Component, Input, OnInit } from '@angular/core';
import { ApiBridgeService } from '../api-bridge.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  images: Array<object> = [];
  constructor(private api: ApiBridgeService) {}
  ngOnInit(): void {
    this.api.getLatest().subscribe( (data: IData) => {
      //data.meta has page number
      this.images = data.data;
      console.table(this.images, ["path"]);
    });    
  }
}

interface IData {
  data: Array<object>;
  meta: Object;
}