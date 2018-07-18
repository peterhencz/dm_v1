import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import * as Tone from 'tone';


import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { MachineComponent } from './machine/machine.component';
import { DrumpadsComponent } from './drumpads/drumpads.component';
import { PadComponent } from './pad/pad.component';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    MachineComponent,
    DrumpadsComponent,
    PadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
