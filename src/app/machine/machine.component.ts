import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';
import { PadComponent } from '../pad/pad.component';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})

export class MachineComponent implements OnInit {

  seq = new Tone.Sequence(function(time, note){
    console.log(note);
  }, [kick);

  constructor() { }

  ngOnInit() {
  }

  startSeq() {
    this.seq.start();
  }

}
