import { Component, OnInit } from '@angular/core';
import { SnackBarService } from '../../shared/services/snack-bar-service/snack-bar.service';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent {

  constructor(public snackBarService: SnackBarService) {
  }


}
