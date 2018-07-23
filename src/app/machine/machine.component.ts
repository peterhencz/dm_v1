import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';
import { PadComponent } from '../pad/pad.component';
import { DrumpadsComponent } from '../drumpads/drumpads.component';
import { SoundService } from '../sound.service';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})

export class MachineComponent implements OnInit {

  constructor(public selectedSound: SoundService) { }

  ngOnInit() {
  }

  pushSound(sound) {
    this.selectedSound.selectSound(sound);
  }
}
