import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthorizeModule } from './components/authorize/authorize.module';
import { RootModule } from './components/root/root.module';
import { SnackBarModule } from './components/snack-bar/snack-bar.module';
import { MaterialModule } from '../material.module';
import { AuthService } from './shared/services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthorizeModule,
    RootModule,
    SnackBarModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
