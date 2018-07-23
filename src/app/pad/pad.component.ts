import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';
import { SoundService } from '../sound.service';

@Component({
  selector: 'app-pad',
  templateUrl: './pad.component.html',
  styleUrls: ['./pad.component.css']
})
export class PadComponent implements OnInit {

  sound;

  constructor(public selectedSound: SoundService) { }

  ngOnInit() {
  }

  pushSound(sound) {
    console.log(sound);
    // this.sound.start();
  }

}
