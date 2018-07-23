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
    var loop = new Tone.Loop(function(time){
      //triggered every eighth note. 
      console.log(time);
    }, "1n").start(0);
    Tone.Transport.start();
    console.log('cica');
  }

}
