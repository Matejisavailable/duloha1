import {RouterModule, Routes} from "@angular/router";
import {UserWebComponent} from "./user-web/user-web.component";
import {NgModule} from "@angular/core";

const routes: Routes =[
  {
    path: "user",
    component: UserWebComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{
}
