import { Component} from '@angular/core';
import {Book} from "../models/book-model";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent{

  book: Book = {id: " ", name: " ", author: " ", available:" "};

  constructor() { }



}
