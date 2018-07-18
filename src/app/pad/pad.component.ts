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
    "C3" : "/assets/drum_sounds/dm_kick.mp3",
    "D3" : "/assets/drum_sounds/dm_snare.mp3",
    "F3" : "/assets/drum_sounds/dm_closed_hh.mp3",
   }, function(){
    sampler.triggerAttack("D3")
}

