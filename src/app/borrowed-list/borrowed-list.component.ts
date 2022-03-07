import { Component, OnInit } from '@angular/core';
import {Borrowed} from "../models/borrowed-model";

@Component({
  selector: 'app-borrowed-list',
  templateUrl: './borrowed-list.component.html',
  styleUrls: ['./borrowed-list.component.css']
})
export class BorrowedListComponent{

  borrows: Borrowed [] = [];
  constructor() { }

}
