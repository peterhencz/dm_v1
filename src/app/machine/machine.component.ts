import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})
export class MachineComponent implements OnInit {

  seq = new Tone.Sequence(function(time, note){
    console.log(note);
  }, ["C4", "E4", "G4", "A4"], "4n");

  constructor() { }

  ngOnInit() {
  }

  startSeq() {
    this.seq.start();
  }

}
