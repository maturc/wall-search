import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiBridgeService {
  //api docs
  //https://wallhaven.cc/help/api
  url: string = "/api/v1/search?apikey=V2rSnX71qCvSyWFtXuABi4WU7bimA6SP&categories=100";
  constructor( private http: HttpClient ) {}
  getLatest( pageNumber: number = 1 ) {
    return this.http.get(this.url + `&page=${pageNumber}`);
  }
}