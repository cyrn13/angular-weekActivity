import { BoarderService } from './boarder.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardersComponent } from './boarders/boarders.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    BoarderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
