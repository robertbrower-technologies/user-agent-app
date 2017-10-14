import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ChromeService } from '../chrome.service';
import { ChromeActionsService } from '../chrome-actions.service';
import { ChromeState } from '../chrome-state';

@Component({
  selector: 'chrome',
  templateUrl: './chrome.component.html',
  styleUrls: ['./chrome.component.css']
})
export class ChromeComponent {

  private value: string;
  
  public currentValue$: Observable<string>;

  constructor(
    private chrome: ChromeService,
    private chromeActions: ChromeActionsService
  ) {
    this.chrome.getValue().subscribe(value => this.value = value);
    this.currentValue$ = this.chrome.getCurrentValue();
    if (this.value) {
      this.chromeActions.setCurrentValue(this.value);
    }
  }

  onChanged(state: ChromeState) {
    this.chromeActions.setCurrentValue(state.currentValue);
  }

}
