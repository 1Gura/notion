import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { FlexModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AngularEmojisModule } from 'angular-emojis';


@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    MatIconModule,
    FlexModule,
    MatFormFieldModule,
    AngularEmojisModule
  ],
  exports: [SidebarComponent]
})
export class SidebarModule {
}
