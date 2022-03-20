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
  upravBook: EventEmitter<Book> = new EventEmitter<Book>();

    uprav(book: Book): void{
      this.upravBook.emit(book);
    }

}
