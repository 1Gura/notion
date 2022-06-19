import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root.component';
import { RootRoutingModule } from './root-routing.module';
import { RootStateService } from './shared/root-state/root-state.service';
import { PageNoteService } from './shared/service/page-note.service';
import { AngularEmojisModule } from 'angular-emojis';
import { FlexModule } from '@angular/flex-layout';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatInputModule } from '@angular/material/input';
import { BaseNotionComponentModule } from './shared/notion-element/components/base-notion-component.module';
import { PageContentComponent } from './page-content/page-content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NewPageFormComponent } from '../shared/common/new-page-form/new-page-form.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ObservedItemComponent } from './sidebar/observed-item/observed-item.component';
import { SidebarItemComponent } from './sidebar/sidebar-item/sidebar-item.component';
import { TextTruncationPipe } from '../../shared/pipes/text-truncation.pipe';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    RootComponent,
    PageContentComponent,
    SidebarComponent,
    NewPageFormComponent,
    ObservedItemComponent,
    SidebarItemComponent,
    TextTruncationPipe
  ],
  imports: [
    CommonModule,
    RootRoutingModule,
    AngularEmojisModule,
    FlexModule,
    PickerModule,
    MatFormFieldModule,
    TextFieldModule,
    MatInputModule,
    BaseNotionComponentModule,
    MatIconModule,
    MatDialogModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    RootComponent,
  ],
  providers: [RootStateService, PageNoteService]
})
export class RootModule {
}
