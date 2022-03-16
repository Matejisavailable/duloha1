import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Borrowed} from "../models/borrowed-model";

@Component({
  selector: 'app-borrowed-list',
  templateUrl: './borrowed-list.component.html',
  styleUrls: ['./borrowed-list.component.css']
})
export class BorrowedListComponent{
  /*@Input()
  borrows: Borrowed [] = [];
  @Output()
  upravBorrowing: EventEmitter<Borrowed> = new  EventEmitter<Borrowed>();
  @Output()
  zmazBorrowing: EventEmitter<Borrowed> = new EventEmitter<Borrowed>();
  uprav(borrowing: Borrowed){
    this.upravBorrowing.emit(borrowing);
  }
  zmaz(borrowing:Borrowed){
    this.zmazBorrowing.emit(borrowing);
  }*/
}
