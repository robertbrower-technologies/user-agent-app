import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ChromeState } from '../../chrome-state';

@Component({
  selector: 'chrome-view',
  templateUrl: './chrome-view.component.html',
  styleUrls: ['./chrome-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChromeViewComponent {

  public form: FormGroup;
  
  public formValueChanges: ChromeState;
  
  public formValue: ChromeState;

  @Input() public value: string;

  @Output() public changed: EventEmitter<ChromeState> = new EventEmitter<ChromeState>();

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({value: this.value});
    this.form.valueChanges.subscribe(changes => {
      this.formValueChanges = changes;
    })
  }

  onSubmit() {
    this.formValue = this.form.value;
    this.changed.emit(this.formValue);
  }

}
