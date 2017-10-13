import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './app.reducer';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { AppActionsService } from './app-actions.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ app: appReducer }),
    SharedModule.forRoot(),
    routing
  ],
  providers: [AppActionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
