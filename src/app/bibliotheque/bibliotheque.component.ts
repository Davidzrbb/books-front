 import { Component, OnInit } from '@angular/core';
  import {BookServiceService} from '../service/book-service.service'



@Component({
  selector: 'app-bibliotheque',
  templateUrl: './bibliotheque.component.html',
  styleUrls: ['./bibliotheque.component.css']
})
export class BibliothequeComponent implements OnInit {
posts : any;
constructor(private bookServiceService: BookServiceService) { }

 ngOnInit() {
 	this.bookServiceService.getPosts().subscribe(
 	(response) => { this.posts = response; },
 	(error) => { console.log(error); });
 }

}
