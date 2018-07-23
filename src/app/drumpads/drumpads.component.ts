import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';
import { PadComponent } from '../pad/pad.component';


@Component({
  selector: 'app-drumpads',
  templateUrl: './drumpads.component.html',
  styleUrls: ['./drumpads.component.css']
})
export class DrumpadsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  playSeq() {
  var seq = new Tone.Sequence(function(time, note){
  console.log(note);
//straight quater notes
}, ["C4", "E4", "G4", "A4"], "4n").start(0);

    Tone.Transport.start();

    console.log('cica');
  }

}
