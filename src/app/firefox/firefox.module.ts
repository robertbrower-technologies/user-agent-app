import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { FirefoxService } from './firefox.service';
import { FirefoxActionsService } from './firefox-actions.service';
import { firefoxReducer } from './firefox.reducer';
import { routing } from './firefox.routing';
import { FirefoxComponent } from './firefox/firefox.component';
import { FirefoxViewComponent } from './firefox/firefox-view/firefox-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('appFeature', {firefox: firefoxReducer}),
    routing
  ],
  declarations: [FirefoxComponent, FirefoxViewComponent],
  providers: [
    FirefoxService,
    FirefoxActionsService
  ]
})
export class FirefoxModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FirefoxModule,
      providers: [FirefoxService, FirefoxActionsService]
    };
  }
}
