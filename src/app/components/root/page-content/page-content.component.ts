import { Component, OnInit } from '@angular/core';
import { RootStateService } from '../shared/root-state/root-state.service';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss']
})
export class PageContentComponent implements OnInit {

  constructor(public rootState: RootStateService) {
  }

  ngOnInit(): void {
  }

}
