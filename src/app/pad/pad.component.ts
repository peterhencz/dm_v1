import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';
import { SoundService } from '../sound.service';
import { DrumpadsComponent } from '../drumpads/drumpads.component';

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
    if (this.status) {
      this.status = false
    }
    else {
      this.status = true
    }
    console.log(this.status);
  }

}
