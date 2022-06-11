import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { RootStateService } from '../../../root-state/root-state.service';
import { TextFieldFormGroup } from '../../../form-group/text-field.form-group';

@Component({
  selector: 'app-base-text-field',
  templateUrl: './base-text-field.component.html',
  styleUrls: ['./base-text-field.component.scss']
})
export class BaseTextFieldComponent implements OnInit {
  @ViewChild('textArea') public textArea: ElementRef | undefined;
  @Input() public placeholder: string = '';
  @Input() public content: TextFieldFormGroup = new TextFieldFormGroup();
  @Output() public getKey: EventEmitter<any> = new EventEmitter<any>();

  constructor(public rootState: RootStateService, private cd: ChangeDetectorRef) {
  }

  public ngOnInit(): void {
    Promise.resolve().then(() => this.setFocus());
  }

  public setFocus(): void {
    this.textArea?.nativeElement.focus();
  }
}
