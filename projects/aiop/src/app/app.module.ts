import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxHowellModule } from 'ngx-howell';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxHowellModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
