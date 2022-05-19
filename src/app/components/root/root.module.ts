import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root.component';
import { RootRoutingModule } from './root-routing.module';
import { RootStateService } from './shared/root-state/root-state.service';
import { SidebarModule } from '../sidebar/sidebar.module';
import { PageNoteService } from './shared/service/page-note.service';
import { AngularEmojisModule } from 'angular-emojis';
import { FlexModule } from '@angular/flex-layout';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatInputModule } from '@angular/material/input';
import {
  BaseNotionComponentModule
} from './shared/notion-element/components/base-notion-component.module';


@NgModule({
  declarations: [
    RootComponent,
  ],
  imports: [
    CommonModule,
    RootRoutingModule,
    SidebarModule,
    AngularEmojisModule,
    FlexModule,
    PickerModule,
    MatFormFieldModule,
    TextFieldModule,
    MatInputModule,
    BaseNotionComponentModule
  ],
  exports: [
    RootComponent,
  ],
  providers: [RootStateService, PageNoteService]
})
export class RootModule {
}
