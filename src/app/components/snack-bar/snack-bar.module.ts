import { NgModule } from '@angular/core';
import { SnackBarService } from '../../shared/services/snack-bar-service/snack-bar.service';
import { SnackBarComponent } from './snack-bar.component';

@NgModule({
  declarations: [SnackBarComponent],
  exports: [SnackBarComponent],
  providers: [SnackBarService]
})
export class SnackBarModule {
}
