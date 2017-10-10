import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'chrome', loadChildren: 'app/chrome/chrome.module#ChromeModule' },
  { path: 'firefox', loadChildren: 'app/firefox/firefox.module#FirefoxModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);