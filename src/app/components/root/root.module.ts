import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root.component';
import { RootRoutingModule } from './root-routing.module';
import { RootStateService } from './shared/root-state/root-state.service';
import { SidebarModule } from '../sidebar/sidebar.module';
import { PageNoteService } from './shared/service/page-note.service';


@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    CommonModule,
    RootRoutingModule,
    SidebarModule
  ],
  exports: [
    RootComponent
  ],
  providers: [RootStateService, PageNoteService]
})
export class RootModule {
}
