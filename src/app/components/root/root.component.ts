import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth/auth.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  public ngOnInit(): void {
    console.log('info');
  }

}
