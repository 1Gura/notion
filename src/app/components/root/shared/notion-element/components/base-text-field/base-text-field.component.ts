import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { BaseTextFieldModel } from '../../models/base-text-field.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-text-field',
  templateUrl: './base-text-field.component.html',
  styleUrls: ['./base-text-field.component.scss']
})
export class BaseTextFieldComponent implements AfterViewInit {
  @ViewChild('textArea') public textArea: ElementRef | undefined;
  @Input() public placeholder: string = '';
  @Input() public modelView: BaseTextFieldModel = new BaseTextFieldModel();
  @Output() public getKey: EventEmitter<any> = new EventEmitter<any>();
  public dataForm: FormGroup = new FormGroup({textField: new FormControl('')});

  constructor() {
    this.dataForm.setValue(this.modelView);
  }

  public ngAfterViewInit(): void {
    this.setFocus();
  }

  public setFocus(): void {
    this.textArea?.nativeElement.focus();
  }
}
