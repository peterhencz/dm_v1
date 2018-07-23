import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';
import { SoundService } from '../sound.service';

@Component({
  selector: 'app-pad',
  templateUrl: './pad.component.html',
  styleUrls: ['./pad.component.css']
})
export class PadComponent implements OnInit {

  kick = new Tone.Player({
    "url" : "./assets/drum_sounds/dm_kick.mp3",
  }).toMaster();

  constructor(
    public selectedSound: SoundService) { }

  ngOnInit() {
  }

  playSound(sound) {
    console.log(this.sound);
    this.kick.start();
  }

}
