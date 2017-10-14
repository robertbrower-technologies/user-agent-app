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

  public currentValue$: Observable<string>;

  constructor(
    private chrome: ChromeService,
    private chromeActions: ChromeActionsService
  ) {
    this.currentValue$ = this.chrome.getCurrentValue();
  }

  onChanged(state: ChromeState) {
    this.chromeActions.setCurrentValue(state.value);
  }

}
