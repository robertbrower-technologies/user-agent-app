import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { AppActionsService } from './app-actions.service';
import { DefaultAppState } from  './app-state';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private form: FormGroup;

  private formValueChanges: any;

  private formValue: any;

  public chrome: string;

  public firefox: string;

  private store$: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<any>,
    private appActions: AppActionsService,
    private sharedService: SharedService) {
      this.form = formBuilder.group({chrome: this.chrome, firefox: this.firefox});
      this.form.valueChanges.subscribe(changes => {
        this.formValueChanges = changes;
      })
    }

  ngOnInit() {

    this.store.select(appState => appState)
      .subscribe(appState => {
        debugger;
        console.log(appState);
      });

    // let userAgent = navigator.userAgent.toLowerCase();
    // let browser = userAgent.search('chrome') != -1 ? 'chrome' : 'firefox';
    // this.router.navigate([browser]);
  }

  onSubmit() {
    debugger;
    this.formValue = this.form.value;

    this.sharedService.state = {
      chrome: {
        chrome: {
          currentValue: this.formValue.chrome
        }
      }
      ,
      firefox: {
        firefox: {
          currentValue: this.formValue.firefox
        }
      }
    };

    this.appActions.setState(this.sharedService.state);
  }

}
