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
      .subscribe(appState => {
        let item = JSON.stringify(appState);
        console.log(item);
        localStorage.setItem("user-agent-app", item);
      });

    let userAgent = navigator.userAgent.toLowerCase();
    let browser = userAgent.search('chrome') != -1 ? 'chrome' : 'firefox';
    this.router.navigate([browser]);
  }

  onGet() {
    let item = localStorage.getItem("user-agent-app");
    this.appActions.setState(item ? JSON.parse(item) : {});
  }

  onClear() {
    localStorage.removeItem("user-agent-app");
  }

}
