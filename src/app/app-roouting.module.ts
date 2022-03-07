import {RouterModule, Routes} from "@angular/router";
import {UserWebComponent} from "./user-web/user-web.component";
import {NgModule} from "@angular/core";
import {BorrowedWebComponent} from "./borrowed-web/borrowed-web.component";

const routes: Routes =[
  {
    path: "user",
    component: UserWebComponent
  },
  {
    path: "borrowed",
    component:BorrowedWebComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{
}
