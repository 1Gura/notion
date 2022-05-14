import {AuthorizeComponent} from "./authorize.component";
import {NgModule} from "@angular/core";
import {AuthorizationRoutingModule} from "./authorization-routing.module";
import {FlexModule} from "@angular/flex-layout";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AuthorizeComponent
  ],
  imports: [AuthorizationRoutingModule, FlexModule, MatFormFieldModule, MatIconModule, MatInputModule, CommonModule, MatButtonModule],
  exports: [
    AuthorizeComponent
  ]
})
export class AuthorizeModule {
}
