import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';

@Component({
  selector: 'app-pad',
  templateUrl: './pad.component.html',
  styleUrls: ['./pad.component.css']
})
export class PadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  const sampler = new Tone.Sampler({
    "C3" : "/assets/drum_sounds/dm_closed_hh.mp3",
    "D#3" : "path/to/Dsharp3.mp3",
    "F#3" : "path/to/Fsharp3.mp3",
    "A3" : "path/to/A3.mp3",
   }, function(){
    sampler.triggerAttack("D3")
}

