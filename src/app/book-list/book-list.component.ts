import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from "../models/book-model";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent{
  @Input()
  knihy: Book[] = [];

  @Output()
  zmazKnihu: EventEmitter<Book> = new EventEmitter<Book>();

  constructor() { }

  zmaz(book: Book): void{
    this.zmazKnihu.emit(book);
  }
}
