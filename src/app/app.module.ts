import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserFormComponent } from './user-form/user-form.component';
import { UserWebComponent } from './user-web/user-web.component';
import { UserListComponent } from './user-list/user-list.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-roouting.module";
import { BookFormComponent } from './book-form/book-form.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookWebComponent } from './book-web/book-web.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserWebComponent,
    UserListComponent,
    BookFormComponent,
    BookListComponent,
    BookWebComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
