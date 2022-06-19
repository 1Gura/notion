import { Component, inject, Input } from '@angular/core';
import { PageStateService } from '../../shared/root-state/page-state.service';

@Component({
  selector: 'app-observed-item',
  templateUrl: './observed-item.component.html',
  styleUrls: ['./observed-item.component.scss']
})
export class ObservedItemComponent {
  @Input() public startValue: string = '';
  pageState = inject(PageStateService);

  constructor() {
  }
}
