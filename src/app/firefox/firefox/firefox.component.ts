import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FirefoxService } from '../firefox.service';
import { FirefoxActionsService } from '../firefox-actions.service';
import { FirefoxState } from '../firefox-state';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'firefox',
  templateUrl: './firefox.component.html',
  styleUrls: ['./firefox.component.css']
})
export class FirefoxComponent {

  public currentValue$: Observable<string>;

  constructor(
    private firefox: FirefoxService,
    private firefoxActions: FirefoxActionsService,
    private sharedService: SharedService
  ) {
    this.currentValue$ = this.firefox.getCurrentValue();
    if (this.sharedService.state && this.sharedService.state.firefox) {
      this.firefoxActions.setCurrentValue(this.sharedService.state.firefox.firefox.currentValue);
    }
  }

  onChanged(state: FirefoxState) {
    this.firefoxActions.setCurrentValue(state.currentValue);
  }

}
