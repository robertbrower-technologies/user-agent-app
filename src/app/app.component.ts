import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { AppActionsService } from './app-actions.service';
import { DefaultAppState } from  './app-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private store$: Subscription;

  constructor(
    private router: Router,
    private store: Store<any>,
    private appActions: AppActionsService) {}

  ngOnInit() {

    this.store.select(appState => appState)
      .subscribe(appState => {
        console.log(appState);
      });

    let userAgent = navigator.userAgent.toLowerCase();
    let browser = userAgent.search('chrome') != -1 ? 'chrome' : 'firefox';
    this.router.navigate([browser]);
  }

  setDefaultState() {
    this.appActions.setRootState({
      chrome: {
        chrome: {
          currentValue: 'Chrome'
        }
      }
      ,
      firefox: {
        firefox: {
          currentValue: 'Firefox'
        }
      }
    });
  }

}
