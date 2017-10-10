import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private store$: Subscription;

  constructor(
    private router: Router,
    private store: Store<any>) {}

  ngOnInit() {

    this.store.select(appState => appState)
      .subscribe(appState => {
        console.log(appState);
      });

    let userAgent = navigator.userAgent.toLowerCase();
    let browser = userAgent.search('chrome') != -1 ? 'chrome' : 'firefox';
    this.router.navigate([browser]);
  }

  getCurrentValue(): Observable<string> {
    return this.store.select(appState => {
      debugger;
        console.log(appState);
        return appState;
    })
    .filter(Boolean);
  }

}
