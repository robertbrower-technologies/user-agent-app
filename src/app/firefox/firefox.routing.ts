import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirefoxComponent } from './firefox/firefox.component';

const routes: Routes = [
  { path: '', component: FirefoxComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);