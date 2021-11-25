import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MasterPageModule } from './master-page';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MasterPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
