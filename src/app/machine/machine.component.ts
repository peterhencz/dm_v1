import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';
import { PadComponent } from '../pad/pad.component';
import { DrumpadsComponent } from '../drumpads/drumpads.component';
import { SoundService } from '../sound.service';
import { Pad, PADS } from '../pads';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})

export class MachineComponent implements OnInit {

  kick = new Tone.Player({
    "url" : "./assets/drum_sounds/dm_kick.mp3",
  }).toMaster();

  hh = new Tone.Player({
    "url" : "./assets/drum_sounds/dm_closed_hh.mp3",
  }).toMaster();

  snare = new Tone.Player({
    "url" : "./assets/drum_sounds/dm_snare_clap.mp3",
  }).toMaster();

  constructor(
    public soundService: SoundService,
    public seq: DrumpadsComponent
    ) { }

  ngOnInit() {
  }

  selectSound(sound) {
    this.soundService.pushSound(sound);
  }

  toogleSeq(sequence) {
    if (this.seq.activeSeq == false)
    { this.seq.activeSeq = true
      this.seq.playSeq(); }
    else {
      this.seq.stopSeq;
    }
  }

}
