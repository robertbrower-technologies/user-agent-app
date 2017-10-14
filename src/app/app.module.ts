import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './app.reducer';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { AppActionsService } from './app-actions.service';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ appState: appReducer }),
    routing
  ],
  providers: [AppActionsService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
