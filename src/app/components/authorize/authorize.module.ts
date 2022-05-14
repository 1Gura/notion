import { AuthorizeComponent } from './authorize.component';
import { NgModule } from '@angular/core';
import { AuthorizeRoutingModule } from './authorize-routing.module';
import { FlexModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthorizeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [AuthorizeRoutingModule, FlexModule, MatFormFieldModule, MatIconModule, MatInputModule, CommonModule, MatButtonModule, ReactiveFormsModule],
  exports: [
    AuthorizeComponent
  ]
})
export class AuthorizeModule {
}
