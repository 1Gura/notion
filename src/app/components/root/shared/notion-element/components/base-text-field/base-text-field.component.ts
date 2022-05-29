import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { ContentBaseModel } from '../../../model/content-base.model';
import { TextFieldFormGroup } from '../../../form-group/text-field.form-group';

@Component({
  selector: 'app-base-text-field',
  templateUrl: './base-text-field.component.html',
  styleUrls: ['./base-text-field.component.scss']
})
export class BaseTextFieldComponent implements AfterViewInit {
  @ViewChild('textArea') public textArea: ElementRef | undefined;
  @Input() public placeholder: string = '';
  @Input() public content: ContentBaseModel = new ContentBaseModel();
  @Output() public getKey: EventEmitter<any> = new EventEmitter<any>();
  public textFieldFormGroup: TextFieldFormGroup = new TextFieldFormGroup();

  constructor() {
  }

  public ngAfterViewInit(): void {
    this.setFocus();
    this.textFieldFormGroup.setValue(this.content);
    debugger
  }

  public setFocus(): void {
    this.textArea?.nativeElement.focus();
  }
}
