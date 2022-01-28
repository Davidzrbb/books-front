import { Component, OnInit } from '@angular/core';
import {BookServiceService} from '../service/book-service.service'
import{Livre} from '../bibliotheque/livre'
import { Observable } from 'rxjs';
import { HttpClient } from  '@angular/common/http';
@Component({
  selector: 'app-bibliotheque',
  templateUrl: './bibliotheque.component.html',
  styleUrls: ['./bibliotheque.component.css']
})

export class BibliothequeComponent implements OnInit {
public posts : any;
public search:any;
public popup = false;
public valSearch="";
public modify = false;


constructor(private bookServiceService: BookServiceService,private http: HttpClient) { }

 ngOnInit() {
 this.popup = false;
 this.modify = false;
 	this.bookServiceService.getPosts().subscribe(
 	(data) => { this.posts = data; },
 	(error) => { console.log(error); });
 }
 headElements = ['ID', 'First', 'Last', 'Handle'];

//GET SEARCH ISBN
 searchIsbn(){
  const inputValue = this.valSearch;
  this.bookServiceService.getPostsIsbn(inputValue).subscribe(
    (data) => { this.search = data;
    if(this.search.isbn != null){
    if(!this.modify){
            this.popup= true;
    }
    }else{
    alert("Isbn don't exist")
    }
    },
    (error) => { console.log(error);alert("Isbn don't exist")
    });
  }
    onKey(event: any) {
      this.valSearch = event.target.value;
    }

    deleteBook(isbn:string){
     	this.bookServiceService.deleteBook(isbn).subscribe(
     	(data) => { 	this.ngOnInit();},
     	(error) => { console.log(error); });
     }

     modifyBook(isbn:string){
     this.valSearch = isbn;
     this.modify = true;
     this.popup = false;
     this.searchIsbn();
     }

    patchBook(isbn:string,title:string,author:string,overview:string,read_count_s:string){

    if(isbn ==""){
      isbn = null
    }
    if(title ==""){
       title = null
    }
    if(author ==""){
      author = null
    }
    if(read_count_s ==""){
       read_count_s = null
    }
    var readCount: number = +read_count_s;
    type Book = {
      isbn: string;
      title: string;
      author: string;
      overview: string;
      readCount: number;
    };
    let scores: { [name: string]: Book } = {};
    scores.bill = {
      isbn: isbn,
      title: title,
      author: author,
      overview: overview,
      readCount: readCount
    };
console.log(scores.bill)
        this.http.patch('http://localhost:8080/api/update/'+isbn,scores.bill).subscribe(
              res => {
                console.log('received ok response from patch request');
                this.ngOnInit();
              },
              error => {
                console.error('There was an error during the request');
                alert("Error with patch");
              });

            console.log('request sent. Waiting for response...');

    }
}
