import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import * as Tone from 'tone';
import { SoundService } from './sound.service';

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
  providers: [SoundService,DrumpadsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
