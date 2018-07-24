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

  getPad(): Observable<Pad> {
    return of(PADS.find(pad => pad === pad));
  }

}
