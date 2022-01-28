import { Component, OnInit } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  saveBook(val1:string,val2:string,val3:string,val4:string,val5:string,val6:string,){
    if(val1 == "" || val2  == ""|| val3 == "" ){
      alert("champ obligatoire non remplie");
    }else{
    if(val4 ==""){
    val4 = null;
    }
        if(val5 ==""){
        val6 = null;
        }
            if(val6 ==""){
            val6 = null;
            }
    var readCount: number = +val5;
        type Book = {
          isbn: string;
          title: string;
          author: string;
          overview: string;
          readCount: number;
        };
    let scores: { [name: string]: Book } = {};
    scores.bill = {
      isbn: val1,
      title: val2,
      author: val3,
      overview: val4,
      readCount: readCount
    };
console.log(scores.bill)
        this.http.post('http://localhost:8080/api/book/',scores.bill).subscribe(
              res => {
                console.log('received ok response from patch request');
                alert("OK")
              },
              error => {
                console.error('There was an error during the request');
                alert("Error with patch");
              });

            console.log('request sent. Waiting for response...');

    }


    }


}
