import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BaseTextFieldComponent } from '../base-text-field/base-text-field.component';
import { RootStateService } from '../../../root-state/root-state.service';
import { TextFieldFormGroup } from '../../../form-group/text-field.form-group';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  public titleFormGroup: TextFieldFormGroup = new TextFieldFormGroup();
  public contentFormGroup: TextFieldFormGroup[] = [];
  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(public rootState: RootStateService) {
  }

  public ngOnInit(): void {
    this.rootState.titlePage.next(new BaseTextFieldComponent());
  }


  public newTextField(event: KeyboardEvent, indexTextElement: number = -1): void {
    if (event.key.toLowerCase() === 'enter' && event.shiftKey) {
      return;
    }
    if (event.key.toLowerCase() === 'enter') {
      event.preventDefault();
      const arr: BaseTextFieldComponent[] = this.rootState.observerViewChild.value;
      arr.splice(indexTextElement + 1, 0, new BaseTextFieldComponent());
      this.rootState.observerViewChild.next(arr);
    }
  }

}
