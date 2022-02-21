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
  public prevodDo2(){
    this.dvojkove = ((this.desiatkove >>> 0).toString(2));
  }
}
