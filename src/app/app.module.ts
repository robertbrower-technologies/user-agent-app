import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './app.reducer';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { AppActionsService } from './app-actions.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({appFeature: appReducer}),
    routing
  ],
  providers: [AppActionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
