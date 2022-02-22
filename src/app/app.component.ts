import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'duloha1';
  desiatkove = 0;
  i = 0;
  pom = 1;

  bity: boolean[] = [false, false, false, false, false, false, false, false];

  public prevodDo2() {
    let dvojkove = ((this.desiatkove >>> 0).toString(2)).padStart(8, '0');
    for (let i = 0; i < dvojkove.length; i++){
      if (i < dvojkove.length && dvojkove[i] == '1') {
        this.bity[7-i] = true;
      }else{
        this.bity[7-i] = false;
      }
    }

/*
  let index = this.dvojkove.length;
  var pole:number[] = new Array(index);
  var pole_pom:number[] = new Array(index);
  let pom = 1;
  for (let i = 0; i < this.dvojkove.length; i++){
    var str = this.dvojkove;
    var sliced = str.slice(index-1,index);
    pole[i] = Number(sliced);
    pole_pom[index-1] = pole[i];


    pom++;
    index--;
  }
  for (let i = 0; i < this.dvojkove.length; i++){
    console.log('nastavujem ' + index);
    if( pole_pom[i]==1){
      this.bity[i] = true;
    }else{
      this.bity[i] = false;
    }

  }
  */
  //alert(pole_pom);
}


}
