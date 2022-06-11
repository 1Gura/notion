import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { RootStateService } from '../../../root-state/root-state.service';
import { TextFieldFormGroup } from '../../../form-group/text-field.form-group';
import { TypeContentEnum } from '../../../enum/type-content.enum';

@Component({
  selector: ' app-page',
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
    this.rootState.titlePage.get('type')?.setValue(TypeContentEnum.title);
    this.rootState.titlePage.get('content')?.setValue('hello');
  }


  public newTextField(event: KeyboardEvent, indexTextElement: number = -1): void {
    if (event.key.toLowerCase() === 'enter' && event.shiftKey) {
      return;
    }
    if (event.key.toLowerCase() === 'enter') {
      event.preventDefault();
      const arr: TextFieldFormGroup[] = this.rootState.contentList;
      arr.splice(indexTextElement + 1, 0, new TextFieldFormGroup());
      this.rootState.contentList = arr;
      debugger
    }
  }

}
