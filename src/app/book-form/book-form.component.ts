import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from "../models/book-model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent{

  @Input()
  set book(data:Book | undefined){
    if(data){
      this.naplnForm(data);
    }
  }
  @Output()
  pridajBook = new EventEmitter<Book>();
  @Output()
  upravBook = new EventEmitter<Book>();

  form!: FormGroup;
  constructor() {
    this.vytvorForm();
  }
  private vytvorForm():void{
    this.form = new FormGroup({
      id: new FormControl(null),
      nazov: new FormControl(null),
      autor: new FormControl(null),
      dostupna: new  FormControl(null),
    });
  }
  private naplnForm(book: Book){
    this.form.controls['id'].setValue(book.id);
    this.form.controls['nazov'].setValue(book.name);
    this.form.controls['autor'].setValue(book.author);
    this.form.controls['dostupna'].setValue(book.available);

  }
  public pridaj():void{
    this.pridajBook.emit({id:Math.random().toString(),name:this.form.value.nazov,author:this.form.value.autor,available:this.form.value.dostupna});
    this.form.reset();
  }

  public uprav(): void {
    this.upravBook.emit(this.form.value);
    this.form.reset();
  }

  public zrus(): void{
    this.form.reset();
  }
}
