import { Component, OnInit, Input } from '@angular/core';
import * as Tone from 'tone';
import { SoundService } from '../sound.service';
import { DrumpadsComponent } from '../drumpads/drumpads.component';
import { Pad, PADS } from '../pads';
import { PadService } from '../pad.service';

@Component({
  selector: 'app-pad',
  templateUrl: './pad.component.html',
  styleUrls: ['./pad.component.css']
})
export class PadComponent implements OnInit {
  
  pad;

  constructor(
    public soundService: SoundService,
    public padService: PadService,
) { }

  ngOnInit() {
  }

  playSound() {
    this.soundService.selectedSound.start();
    console.log(this.pad);
  }

  toggle() {
    if (this.pad.status) {
      this.pad.status = false
    }
    else {
      this.pad.status = true
    }
    console.log(this.pad.status);
  }

}
