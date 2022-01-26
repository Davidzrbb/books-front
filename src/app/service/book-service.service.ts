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
  private urlPatch = 'http://localhost:8080/api/update/';
  constructor(private http: HttpClient){ }
  getPosts():Observable<any> {
  	return this.http.get<any>(this.url);
  }
  getPostsIsbn(isbn : string):Observable<any> {
  	return this.http.get<any>(this.url+isbn);
  }

  deleteBook(isbn : string):Observable<any> {
     return this.http.delete<any>(this.url+isbn);
  }

    patchBookService(patchList):Observable<any> {
       return this.http.patch<any>(this.urlPatch+patchList[0],patchList[1]);
    }
}

