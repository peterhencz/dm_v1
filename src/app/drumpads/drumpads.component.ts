import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';
import { PadComponent } from '../pad/pad.component';
import { Pad, PADS } from '../pads';
import { PadService } from '../pad.service';

@Component({
  selector: 'app-drumpads',
  templateUrl: './drumpads.component.html',
  styleUrls: ['./drumpads.component.css']
})
export class DrumpadsComponent implements OnInit {

  pads: Pad[];

  kick = new Tone.Player({
    "url" : "./assets/drum_sounds/dm_kick.mp3",
  }).toMaster();

  seq = new Tone.Sequence(function(time, sound){
    // console.log(time, sound);
  }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "16n");
  
  constructor(public padService: PadService) { }

  ngOnInit() {
    this.getPads();
    console.log(this.pads[0].padId)
  }

  getPads(): void {
    this.padService.getPads()
      .subscribe(pads => this.pads = PADS);
  }

  playSeq() {
    this.seq.start(0);
    Tone.Transport.start();
    console.log(this.seq)
  }
}
