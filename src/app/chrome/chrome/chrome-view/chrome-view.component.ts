import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ChromeState } from '../../chrome-state';

@Component({
  selector: 'chrome-view',
  templateUrl: './chrome-view.component.html',
  styleUrls: ['./chrome-view.component.css']
})
export class ChromeViewComponent implements OnInit {

  private form: FormGroup;
  
  private formValueChanges: ChromeState;
  
  private formValue: ChromeState;

  @Input() public currentValue: string;

  @Output() public changed: EventEmitter<ChromeState> = new EventEmitter<ChromeState>();

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({currentValue: this.currentValue});
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
