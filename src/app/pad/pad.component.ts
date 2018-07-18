import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';

@Component({
  selector: 'app-pad',
  templateUrl: './pad.component.html',
  styleUrls: ['./pad.component.css']
})
export class PadComponent implements OnInit {

  constructor() { 
  const zongi = new Tone.Sampler({
  "C3" : "./src/static/piano_c3.mp3",
  "D#3" : "./src/static/Piano_d3.wav",
  "F#3" : "./src/static/Piano_f3.wav",
  "A3" : "./src/static/Piano_a3.wav"
}, function() {
  let time = '2n';
  zongi.triggerAttack("E4", time)
  zongi.triggerAttack("C0", time);
  zongi.triggerAttack("B#2")
  zongi.triggerAttack(time + 0.6);
}).toMaster();
}

  ngOnInit() {
  }

}
