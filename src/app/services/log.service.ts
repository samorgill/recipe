import {Injectable} from '@angular/core';

@Injectable()
export class LogService {

  constructor() {
  }

  log(message: any) {
    return console.log('Logger: ', message);
  }
}
