import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppActionsService } from './app-actions.service';
import { SharedService } from './shared/shared.service';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private router: Router,
    private store: Store<any>,
    private appActions: AppActionsService,
    private sharedService: SharedService) {}

  ngOnInit() {
    this.store.select(appState => appState)
      .distinctUntilChanged()
      .debounceTime(500)
      .subscribe(appState => {
        if (Object.keys(appState).length > 1) {
          console.log(appState);
          let sharedState = this.sharedService.state ? this.sharedService.state : {};
          localStorage.setItem("user-agent-app", JSON.stringify(
            Object.assign({}, sharedState, appState)));
        }
      });

    // let userAgent = navigator.userAgent.toLowerCase();
    // let browser = userAgent.search('chrome') != -1 ? 'chrome' : 'firefox';
    // this.router.navigate([browser]);
  }

  onSubmit() {
    this.sharedService.state = JSON.parse(localStorage.getItem("user-agent-app"));
    this.appActions.setState(this.sharedService.state);
  }

}
