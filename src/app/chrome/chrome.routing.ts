import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChromeComponent } from './chrome/chrome.component';

const routes: Routes = [
  { path: '', component: ChromeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);