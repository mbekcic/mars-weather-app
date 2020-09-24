import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentComponent } from './components/current/current.component';
import { PreviousComponent } from './components/previous/previous.component';

@NgModule({
  declarations: [AppComponent, CurrentComponent, PreviousComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
