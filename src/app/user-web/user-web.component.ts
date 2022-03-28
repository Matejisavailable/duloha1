import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from "../models/user-model";
import {OsobaServiceService} from "../osoba-service.service";

@Component({
  selector: 'app-user-web',
  templateUrl: './user-web.component.html',
  styleUrls: ['./user-web.component.css']
})
export class UserWebComponent implements OnInit{

  osoby: User[] = [];

  osobaNaUpravu?: User;

  constructor(private router: Router, private osobaService: OsobaServiceService) { }

  ngOnInit(): void {
    this.refreshOsob();
  }

  refreshOsob(): void {
    this.osobaService.getOsoby().subscribe(data => {
      console.log('prislo:', data);
      this.osoby = [];
      for (const d of data) {
        this.osoby.push({ id: d.id, meno: d.meno, priezvisko: d.priezvisko});
      }
    });
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }

  pridaj(osoba: User): void {
    // this.osoby.push(osoba);
    this.osobaService.createOsoba(osoba).subscribe(data => {
      console.log('prislo:', data);
      this.refreshOsob();
    });
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
