import {RouterModule, Routes} from "@angular/router";
import {UserWebComponent} from "./user-web/user-web.component";
import {NgModule} from "@angular/core";
import {BookWebComponent} from "./book-web/book-web.component";

const routes: Routes =[
  {
    path: "user",
    component: UserWebComponent
  },
  {
    path: "book",
    component: BookWebComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{
}
