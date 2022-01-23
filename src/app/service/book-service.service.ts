import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private url = 'http://localhost:8080/api/book/';
  constructor(private http: HttpClient) { }
  getPosts() {
  	return this.http.get(this.url);
  }

}

