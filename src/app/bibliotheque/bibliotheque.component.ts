import { Component, OnInit } from '@angular/core';
import {BookServiceService} from '../service/book-service.service'
import{Livre} from '../bibliotheque/livre'
import { Observable } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
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


constructor(private bookServiceService: BookServiceService,public dialog: MatDialog) { }

 ngOnInit() {
 this.popup = false;
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
        this.popup= true;
    }else{
    alert("Isbn don't exist")
    }
    },
    (error) => { console.log(error);
    console.log("ohoh");
    });

  }
    onKey(event: any) {
      this.valSearch = event.target.value;
    }

}
