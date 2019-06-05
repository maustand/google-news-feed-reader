import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';


import { CoreModule } from './core/core.module';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NewsfeedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    HttpClientJsonpModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
