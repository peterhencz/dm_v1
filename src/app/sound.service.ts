import { Injectable } from '@angular/core';
import * as Tone from 'tone';

@Injectable()
export class SoundService {

  selectedSound = new Tone.Player({
    "url" : "./assets/drum_sounds/dm_kick.mp3",
  }).toMaster();;

  constructor() {
  }

  pushSound(sound) {
    console.log(sound);
    this.selectedSound = sound;

  }

}
