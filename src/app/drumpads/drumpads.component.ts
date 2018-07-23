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
    var loop = new Tone.Sequence(function(time, note){
      
      console.log(note);

    }, '0', '1', '2', 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15).start(0);

    Tone.Transport.start();

    console.log('cica');
  }

}
