import {Component, OnInit} from '@angular/core';
import {Book} from "../models/book-model";
import {Router} from "@angular/router";
import {BookService} from "../../book.service";

@Component({
  selector: 'app-book-web',
  templateUrl: './book-web.component.html',
  styleUrls: ['./book-web.component.css']
})
export class BookWebComponent implements OnInit{

  knihy: Book[] = [];

  knihaNaUpravu?: Book;

  constructor(private route:Router, private bookService: BookService) {}

  ngOnInit() {
    this.refreshBook();
  }

  refreshBook(): void{
    this.bookService.getBooks().subscribe(data =>{
      this.knihy = [];
      for(const d of data){
        this.knihy.push({id:d.id, name:d.name, author: d.author, available:d.available})
      }
    });

  }

  pridaj(b: Book): void{
    this.bookService.createBook(b).subscribe(data =>{
      console.log('prislo:', data);
      this.refreshBook();
    });
  }

  uprav(b: Book): void{
    console.log('BOOK:', b)
    const index = this.knihy.findIndex(bArray => bArray.id === b.id);
    if (index !== -1){
      this.knihy[index] = b;
    }
  }

  upravZoZoznamu(b: Book): void{
    this.knihaNaUpravu = b;
  }

  zmaz(b: Book): void{
    const index = this.knihy.findIndex(bArray => bArray.id === b.id);
    if (index !== -1){
      this.knihy.splice(index, 1);
    }
  }


}
