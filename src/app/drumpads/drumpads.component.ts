import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';
import { PadComponent } from '../pad/pad.component';


@Component({
  selector: 'app-drumpads',
  templateUrl: './drumpads.component.html',
  styleUrls: ['./drumpads.component.css']
})
export class DrumpadsComponent implements OnInit {

  kick = new Tone.Player({
    "url" : "./assets/drum_sounds/dm_kick.mp3",
  }).toMaster();

  seq = new Tone.Sequence(function(time, sound){
    this.sound.start();
    console.log(time, sound);
  }, [this.kick, this.kick, 2, 3, this.kick, 5, 6, 7, 8, this.kick, 10, 11, 12, 13, 14, 15], "8n");
  
  constructor() { }

  ngOnInit() {
  }

  playSeq() {
    this.seq.start(0);
    Tone.Transport.start();
  }

}
