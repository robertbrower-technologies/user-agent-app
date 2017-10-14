import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FirefoxService } from '../firefox.service';
import { FirefoxActionsService } from '../firefox-actions.service';
import { FirefoxState } from '../firefox-state';

@Component({
  selector: 'firefox',
  templateUrl: './firefox.component.html',
  styleUrls: ['./firefox.component.css']
})
export class FirefoxComponent {

  private value: string;

  public currentValue$: Observable<string>;

  constructor(
    private firefox: FirefoxService,
    private firefoxActions: FirefoxActionsService
  ) {
    this.firefox.getValue().subscribe(value => this.value = value);
    this.currentValue$ = this.firefox.getCurrentValue();
    if (this.value) {
      this.firefoxActions.setCurrentValue(this.value);
    }
  }

  onChanged(state: FirefoxState) {
    this.firefoxActions.setCurrentValue(state.currentValue);
  }

}
