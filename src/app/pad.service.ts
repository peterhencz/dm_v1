import { Injectable } from '@angular/core';

import { Pad, PADS } from './pads';

import { Observable } from 'rxjs/Observable';

import { of } from 'rxjs/observable/of';

@Injectable()
export class PadService {

  constructor() { }

  getPads(): Observable<Pad[]> {
    return of(PADS);
  }

  getPad(padId: number): Observable<Pad> {
    return of(PADS.find(pad => pad.padId === padId));
  }

  selectedPad() {
    return of(PADS.Pad);
    console.log(this.selectedPad());
  }
}
