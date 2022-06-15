import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthorizeModule } from './components/authorize/authorize.module';
import { RootModule } from './components/root/root.module';
import { SnackBarModule } from './components/snack-bar/snack-bar.module';
import { MaterialModule } from '../material.module';
import { AuthService } from './shared/services/auth/auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { FormsModule } from '@angular/forms';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
};

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
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, INTERCEPTOR_PROVIDER],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
