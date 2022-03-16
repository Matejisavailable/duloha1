import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Borrowed} from "../models/borrowed-model";

@Component({
  selector: 'app-borrowed-web',
  templateUrl: './borrowed-web.component.html',
  styleUrls: ['./borrowed-web.component.css']
})
export class BorrowedWebComponent{
/*
  borrows: Borrowed[] = [];
  borrowingToChange?: Borrowed;

  constructor(private router: Router) { }

  back():void{
    this.router.navigate(['']);
  }
  pridaj(borrowing: Borrowed){
    this.borrows.push(borrowing);
  }
  uprav(borrowing:Borrowed){
    const index= this.borrows.findIndex(borrowingArray => borrowingArray.id = borrowing.id);
    if(index!== -1){
      this.borrows[index] = borrowing;
    }
  }
  changeFromList(borrowing: Borrowed){
    this.borrowingToChange = borrowing;
  }
  deleteFromList(borrowing: Borrowed){
    const index = this.borrows.findIndex(borrowingArray => borrowingArray.id = borrowing.id);
    if(index!== -1){
      this.borrows.splice(index,1);
    }
  }
*/
}
