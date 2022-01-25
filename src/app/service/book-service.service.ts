import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import{Livre} from '../bibliotheque/livre'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private url = 'http://localhost:8080/api/book/';
  constructor(private http: HttpClient){ }
  getPosts():Observable<any> {
  	return this.http.get<any>(this.url);
  }
  getPostsIsbn(isbn : string):Observable<any> {
  	return this.http.get<any>(this.url+isbn);
  }
}

