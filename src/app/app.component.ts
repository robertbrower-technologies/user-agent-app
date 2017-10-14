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

  private appState: any;

  constructor(
    private router: Router,
    private store: Store<any>,
    private appActions: AppActionsService,
    private sharedService: SharedService) {}

  ngOnInit() {

    this.sharedService.getAppState('appState')
      .subscribe(appState => this.appState = appState)

    this.sharedService.getAppState()
      .distinctUntilChanged()
      .debounceTime(1000)
      .subscribe(rootState => {
        if (Object.keys(rootState).length > 1) {
          console.log(rootState);
          let filteredState = {};
          Object.keys(rootState).filter(key => key !=='appState').forEach(key => filteredState[key] = rootState[key]);
          localStorage.setItem("user-agent-app", JSON.stringify(
            Object.assign({}, this.appState ? this.appState : {}, filteredState)));
        }
      });

    this.onGet();

    // let userAgent = navigator.userAgent.toLowerCase();
    // let browser = userAgent.search('chrome') != -1 ? 'chrome' : 'firefox';
    // this.router.navigate([browser]);
  }

  onGet() {
    debugger;
    let state = localStorage.getItem("user-agent-app");
    this.appActions.setState(state ? JSON.parse(state) : {});
  }

  onClear() {
    debugger;
    localStorage.removeItem("user-agent-app");
  }

}
