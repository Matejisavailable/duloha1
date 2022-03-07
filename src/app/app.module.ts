import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserFormComponent } from './user-form/user-form.component';
import { UserWebComponent } from './user-web/user-web.component';
import { UserListComponent } from './user-list/user-list.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-roouting.module";
import { BorrowedFormComponent } from './borrowed-form/borrowed-form.component';
import { BorrowedListComponent } from './borrowed-list/borrowed-list.component';
import { BorrowedWebComponent } from './borrowed-web/borrowed-web.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserWebComponent,
    UserListComponent,
    BorrowedFormComponent,
    BorrowedListComponent,
    BorrowedWebComponent
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
