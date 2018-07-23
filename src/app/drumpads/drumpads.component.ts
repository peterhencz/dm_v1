import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';
import { PadComponent } from '../pad/pad.component';
import { SoundService } from '../sound.service';

@Component({
  selector: 'app-drumpads',
  templateUrl: './drumpads.component.html',
  styleUrls: ['./drumpads.component.css']
})
export class DrumpadsComponent implements OnInit {

  constructor(
    public soundService: SoundService
  ) { }

  ngOnInit() {
  }

  playSeq() {
    const seq = new Tone.Sequence(function(time, sound){
      this.soundService.selectedSound.start();
    }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "8n").start(0);
        console.log('cicafasza');
    Tone.Transport.start();
  }

}
