import { Component} from '@angular/core';
import {User} from "../models/user-model";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent{

  user: User = {id: " ", contact: " ", name: " "};

  constructor() { }



}
