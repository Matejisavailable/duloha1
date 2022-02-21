import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'duloha1';
  desiatkove = 0;
  dvojkove = "";
  i = 0;
  pom = 1;

public prevodDo2() {
  this.dvojkove = ((this.desiatkove >>> 0).toString(2));//1010101
  let index = this.dvojkove.length;
  var pole:number[] = new Array(index);
  var pole_pom:number[] = new Array(index);
  let pom = 1;
  for (let i = 0; i < this.dvojkove.length; i++){
    var str = this.dvojkove;
    var sliced = str.slice(index-1,index);
    pole[i] = Number(sliced);
    pole_pom[index-1] = pole[i];
    let select = document.getElementById(String(pom));
    if( pole_pom[index]==1){
      // select.ariaChecked = "true";
    }
    pom++;
    index--;
  }
  alert(pole_pom);
}


}
