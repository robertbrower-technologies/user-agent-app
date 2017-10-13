import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ChromeService } from '../chrome.service';
import { ChromeActionsService } from '../chrome-actions.service';
import { ChromeState } from '../chrome-state';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'chrome',
  templateUrl: './chrome.component.html',
  styleUrls: ['./chrome.component.css']
})
export class ChromeComponent {

  public currentValue$: Observable<string>;

  constructor(
    private chrome: ChromeService,
    private chromeActions: ChromeActionsService,
    private sharedService: SharedService
  ) {
    this.currentValue$ = this.chrome.getCurrentValue();
    if (this.sharedService.state && this.sharedService.state.chrome) {
      this.chromeActions.setCurrentValue(this.sharedService.state.chrome.chrome.currentValue);
    }
  }

  onChanged(state: ChromeState) {
    this.chromeActions.setCurrentValue(state.currentValue);
  }

}
