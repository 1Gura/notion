import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { RootStateService } from '../../../root-state/root-state.service';
import { debounceTime, Subject, takeUntil } from 'rxjs';
import { TextFieldFormGroup } from '../../../form-group/text-field.form-group';

@Component({
  selector: 'app-base-text-field',
  templateUrl: './base-text-field.component.html',
  styleUrls: ['./base-text-field.component.scss']
})
export class BaseTextFieldComponent implements OnInit, OnDestroy {
  @ViewChild('textArea') public textArea: ElementRef | undefined;
  @Input() public placeholder: string = '';
  @Input() public content: TextFieldFormGroup = new TextFieldFormGroup();
  @Output() public getKey: EventEmitter<any> = new EventEmitter<any>();
  private unsubscribe: Subject<void> = new Subject();

  constructor(public rootState: RootStateService) {
  }

  public ngOnInit(): void {
    Promise.resolve().then(() => this.setFocus());
    this.content?.valueChanges
      .pipe(takeUntil(this.unsubscribe), debounceTime(500))
      .subscribe((data) => {
        debugger
      });
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public setFocus(): void {
    this.textArea?.nativeElement.focus();
  }
}
