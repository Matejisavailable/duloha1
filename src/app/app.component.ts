import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
enum MENU {OSOBY,KNIHY,VYPOZICKY}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  pozicana = {id:'1', kniha:'Silmarilion',zakaznik:'ADAM HUDEC'};
  zakaz = false;

  pozicane:any = [];
  menu = MENU;
  aktMenu: MENU = MENU.OSOBY;

  constructor(private router: Router) {
  }

  otvorMenu(m:MENU){
    if (m == MENU.OSOBY){
      this.router.navigate(["/user"])
    }
    if (m == MENU.KNIHY){
      this.router.navigate(["/book"])
    }
    if (m == MENU.VYPOZICKY){
      this.router.navigate(["/borrowed"])
    }
  }

  pridajP(){
    this.pozicane.push({id:this.pozicana.id, kniha:this.pozicana.kniha, zakakznik:this.pozicana.zakaznik});
  }
  /**pridajK(){
    this.knihy.push({id:this.kniha.id, meno:this.kniha.meno, autor:this.kniha.autor});
  }*/


  /**pridajO(){
    this.osoby.push({id:this.osoba.id, meno:this.osoba.meno, kontakt:this.osoba.kontakt});
  }*/
}
