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
    console.log(sound);
  }, [this.kick], "8n");
  
  constructor() { }

  ngOnInit() {
  }

  playSeq() {
    this.seq.start(0);
      console.log('cicafasza');
    Tone.Transport.start();
  }

}
