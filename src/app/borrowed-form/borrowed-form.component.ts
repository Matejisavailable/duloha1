import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Borrowed} from "../models/borrowed-model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-borrowed-form',
  templateUrl: './borrowed-form.component.html',
  styleUrls: ['./borrowed-form.component.css']
})

export class BorrowedFormComponent{
  /*@Input()
  set borrowing(data: Borrowed){
    if(data){
      this.naplnForm(data);
    }
  }
  @Output()
  pridajBorrowing = new EventEmitter<Borrowed>();
  @Output()
  upravBorrowing = new EventEmitter<Borrowed>();

  // @ts-ignore
  form: FormGroup;

  constructor() {
    this.vytvorForm();
  }


  private vytvorForm():void {
    this.form = new FormGroup({
      id:new FormControl(null),
      book: new FormControl(null),
      user: new FormControl(null)
    });
  }
  private naplnForm(borrowing:Borrowed):void{

  }
  public pridaj(): void {
    this.pridajBorrowing.emit({ id: Math.random().toString(), book: this.form.value.book, user: this.form.value.user});
    this.form.reset();
  }

  public uprav(): void {
    this.upravBorrowing.emit(this.form.value);
    this.form.reset();
  }

  public zrus(): void {
    this.borrowing = undefined;
    this.form.reset();
  }
*/
}
