import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';
import { SoundService } from '../sound.service';

@Component({
  selector: 'app-pad',
  templateUrl: './pad.component.html',
  styleUrls: ['./pad.component.css']
})
export class PadComponent implements OnInit {

  status = false;

  constructor(
    public soundService: SoundService) { }

  ngOnInit() {
  }

  playSound() {
    this.soundService.selectedSound.start();
    console.log(this.soundService.selectedSound);
  }

  toggle() {
    if (this.status == false) {
      this.status = true
    }
    else {
      this.status = false
    }
  }

}
