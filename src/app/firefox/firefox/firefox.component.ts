import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FirefoxService } from '../firefox.service';
import { FirefoxActionsService } from '../firefox-actions.service';
import { FirefoxState, DefaultFirefoxState } from '../firefox-state';

@Component({
  selector: 'firefox',
  templateUrl: './firefox.component.html',
  styleUrls: ['./firefox.component.css']
})
export class FirefoxComponent {

  public currentValue$: Observable<string>;

  constructor(
    private firefox: FirefoxService,
    private firefoxActions: FirefoxActionsService
  ) {
    this.currentValue$ = this.firefox.getCurrentValue();
  }

  onChanged(state: FirefoxState) {
    this.firefoxActions.set(state.currentValue);
  }

}
