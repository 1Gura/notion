import { NgModule } from '@angular/core';
import { EmojiComponent } from './emoji.component';
import { CommonModule } from '@angular/common';
import { PickerModule } from '@ctrl/ngx-emoji-mart';

@NgModule({
  declarations: [EmojiComponent],
  imports: [
    CommonModule,
    PickerModule
  ],
  exports: [EmojiComponent]
})
export class EmojiModule {

}
