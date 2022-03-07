import { Component, OnInit } from '@angular/core';
import {Borrowed} from "../models/borrowed-model";

@Component({
  selector: 'app-borrowed-form',
  templateUrl: './borrowed-form.component.html',
  styleUrls: ['./borrowed-form.component.css']
})
export class BorrowedFormComponent{

  borrowed: Borrowed = {id: " ", book: " ", user: " "};
  constructor() { }

}
