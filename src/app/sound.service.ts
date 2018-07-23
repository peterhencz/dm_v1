import { Injectable } from '@angular/core';
import * as Tone from 'tone';

@Injectable()
export class SoundService {

  selectedSound;

  constructor() {
  }

  pushSound(sound) {
    console.log(sound);
    this.selectedSound = sound;

  }

}
