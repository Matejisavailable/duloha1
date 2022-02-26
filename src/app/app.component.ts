import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
enum MENU {OSOBY,KNIHY,VYPOZICKY}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  osoba = {id: '1',meno:'ADAM HUDEC', kontakt:'094242424'};
  kniha = {id: '1',meno: 'Silmarilion', autor: 'J.R.R Tolkien', dostupna:"Ano"};
  pozicana = {id:'1', kniha:'Silmarilion',zakaznik:'ADAM HUDEC'};
  zakaz = false;
  osoby:any = [];
  knihy:any = [];
  pozicane:any = [];
  menu = MENU;
  aktMenu: MENU = MENU.OSOBY;
  otvorMenu(m:MENU){
    this.aktMenu = m;
  }

  pridajP(){
    this.pozicane.push({id:this.pozicana.id, kniha:this.pozicana.kniha, zakakznik:this.pozicana.zakaznik});
  }
}
