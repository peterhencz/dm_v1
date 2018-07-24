import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';
import { PadComponent } from '../pad/pad.component';
import { Pad, PADS } from '../pads';

@Component({
  selector: 'app-drumpads',
  templateUrl: './drumpads.component.html',
  styleUrls: ['./drumpads.component.css']
})
export class DrumpadsComponent implements OnInit {

  PADS: Pad[];


  kick = new Tone.Player({
    "url" : "./assets/drum_sounds/dm_kick.mp3",
  }).toMaster();

  seq = new Tone.Sequence(function(time, sound){
    console.log(time, sound);
  }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "16n");
  
  constructor() { }

  ngOnInit() {
    this.getPads();
  }

  getPads(): void {
    for (let i = 0; i < 16; i++) {
      console.log(PADS[i].padId);
      console.log(this.Pad);
    }
  }

  // playSeq() {
  //   this.seq.start(0);
  //   Tone.Transport.start();
  // }

}
