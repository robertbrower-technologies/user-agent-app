import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppActionsService } from './app-actions.service';
import { AppService } from './app.service';
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
    private appService: AppService) {}

  ngOnInit() {

    let state = localStorage.getItem("user-agent-app");
    this.appActions.setState(state ? JSON.parse(state) : {});
        
    this.appService.getAppState()
      .debounceTime(1000)
      .subscribe(rootState => {
        if (Object.keys(rootState).length > 1) {
          console.log(JSON.stringify(rootState));
          let filteredState = {};
          Object.keys(rootState).filter(key => key !=='appState').forEach(key => filteredState[key] = rootState[key]);
          localStorage.setItem("user-agent-app", JSON.stringify(filteredState));
        }
      });

    let userAgent = navigator.userAgent.toLowerCase();
    let browser = userAgent.search('chrome') != -1 ? 'chrome' : 'firefox';
    this.router.navigate([browser]);
  }

  onGet() {
    let state = localStorage.getItem("user-agent-app");
    this.appActions.setState(state ? JSON.parse(state) : {});
  }

  onClear() {
    localStorage.removeItem("user-agent-app");
  }

}
