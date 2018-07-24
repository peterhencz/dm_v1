export class Pad {
  padId: number;
  status: boolean;
  flash: boolean

  constructor() {
  }
}

export const PADS: Pad[] = [
   { padId: 0, status: false, flash: false },
   { padId: 1, status: false, flash: false },
   { padId: 2, status: false, flash: false },  
   { padId: 3, status: false, flash: false },  
   { padId: 4, status: false, flash: false },  
   { padId: 5, status: false, flash: false }
] 
