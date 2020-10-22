import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiBridgeService {
  //api docs
  //https://wallhaven.cc/help/api
  url: string = "/api/v1/search?categories=100";
  constructor( private http: HttpClient ) {}
  getLatest( pageNumber: number = 1 ) {
    return this.http.get(this.url + `&page=${pageNumber}`);
  }
}