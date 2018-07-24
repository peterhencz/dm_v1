import { Component, OnInit } from '@angular/core';
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
  
  constructor(
    public soundService: SoundService,
    public padService: PadService,
    public Pad: Pad
) { }

  ngOnInit() {
  }

  playSound() {
    this.soundService.selectedSound.start();
    console.log(this.padService.getPad(pad));
  }

  toggle() {
    if (this.Pad.status) {
      this.Pad.status = false
    }
    else {
      this.Pad.status = true
    }
    console.log(this.Pad.status);
  }

}
