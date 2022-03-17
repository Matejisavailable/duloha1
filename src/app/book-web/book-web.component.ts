import { Component} from '@angular/core';
import {Book} from "../models/book-model";

@Component({
  selector: 'app-book-web',
  templateUrl: './book-web.component.html',
  styleUrls: ['./book-web.component.css']
})
export class BookWebComponent{

  knihy: Book[] = [];

  knihaNaUpravu?: Book;

  pridaj(b: Book){
    this.knihy.push(b)
  }

  uprav(b: Book): void{
    const index = this.knihy.findIndex(knihyArray => knihyArray.id === b.id);
    if (index !== -1){
      this.knihy[index] = b;
    }
  }

  upravZoZoznamu(knihy: Book): void{
    this.knihaNaUpravu = knihy;
  }

  zmaz(knihaId: string){
    const index = this.knihy.findIndex(knihyArray => knihyArray.id === knihaId);
    if (index !== -1){
      this.knihy.splice(index, 1);
    }
  }

  constructor() { }

}
