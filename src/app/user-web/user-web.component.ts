import { Component} from '@angular/core';
import {Router} from '@angular/router';
import {User} from "../models/user-model";

@Component({
  selector: 'app-user-web',
  templateUrl: './user-web.component.html',
  styleUrls: ['./user-web.component.css']
})
export class UserWebComponent{

  osoby: User[] = [];

  osobaNaUpravu?: User;

  constructor(private router: Router) { }

  chodSpat(): void {
    this.router.navigate(['']);
  }

  pridaj(osoba: User): void {
    this.osoby.push(osoba);
  }

  uprav(osoba: User): void {
    const index = this.osoby.findIndex(osobaArray => osobaArray.id === osoba.id);
    if (index !== -1) {
      this.osoby[index] = osoba;
    }
  }

  upravZoZoznamu(osoba: User): void {
    this.osobaNaUpravu = osoba;
  }

  zmazZoZoznamu(osoba: User): void {
    const index = this.osoby.findIndex(osobaArray => osobaArray.id === osoba.id);
    if (index !== -1) {
      this.osoby.splice(index, 1);
    }
  }

}
