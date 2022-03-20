import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../models/user-model";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent{

  @Input()
  osoby: User[] = [];

  @Output()
  upravOsobu: EventEmitter<User> = new EventEmitter<User>();

  @Output()
  zmazOsobu: EventEmitter<User> = new EventEmitter<User>();

  uprav(osoba: User): void {
    this.upravOsobu.emit(osoba);
  }

  zmaz(osoba: User): void {
    this.zmazOsobu.emit(osoba);
  }



}
