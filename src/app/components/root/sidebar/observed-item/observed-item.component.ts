import { Component, Input, OnInit } from '@angular/core';
import { RootStateService } from '../../shared/root-state/root-state.service';

@Component({
  selector: 'app-observed-item',
  templateUrl: './observed-item.component.html',
  styleUrls: ['./observed-item.component.scss']
})
export class ObservedItemComponent implements OnInit {
  @Input() public startValue: string = '';

  constructor(public rootState: RootStateService) {
  }

  ngOnInit(): void {
    console.log(this.startValue);
  }

}
