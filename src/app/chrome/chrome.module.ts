import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { ChromeService } from './chrome.service';
import { ChromeActionsService } from './chrome-actions.service';
import { chromeReducer } from './chrome.reducer';
import { routing } from './chrome.routing';
import { ChromeComponent } from './chrome/chrome.component';
import { ChromeViewComponent } from './chrome/chrome-view/chrome-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('chrome', {chrome: chromeReducer}),
    routing,
  ],
  declarations: [ChromeComponent, ChromeViewComponent],
  providers: [
    ChromeService,
    ChromeActionsService
  ]
})
export class ChromeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ChromeModule,
      providers: [ChromeService, ChromeActionsService]
    };
  }
}
