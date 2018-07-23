import { Injectable } from '@angular/core';
import * as Tone from 'tone';

@Injectable()
export class SoundService {

  selectedSound;

  kick = new Tone.Player({
    "url" : "./assets/drum_sounds/dm_kick.mp3",
  }).toMaster();

  hh = new Tone.Player({
    "url" : "./assets/drum_sounds/dm_closed_hh.mp3",
  }).toMaster();

  snare = new Tone.Player({
    "url" : "./assets/drum_sounds/dm_snare_clap.mp3",
  }).toMaster();


  constructor()) {
  }

  selectSound(sound) {
    console.log(sound);
    this.selectedSound = sound;

  }

}
