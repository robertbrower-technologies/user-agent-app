import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { FirefoxState } from '../../firefox-state';

@Component({
  selector: 'firefox-view',
  templateUrl: './firefox-view.component.html',
  styleUrls: ['./firefox-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirefoxViewComponent implements OnInit {

  private form: FormGroup;
  
  private formValueChanges: FirefoxState;
  
  private formValue: FirefoxState;

  @Input() public value: string;

  @Output() public changed: EventEmitter<FirefoxState> = new EventEmitter<FirefoxState>();

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({value: this.value});
    this.form.valueChanges.subscribe(changes => {
      this.formValueChanges = changes;
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    this.formValue = this.form.value;
    this.changed.emit(this.formValue);
  }

}
