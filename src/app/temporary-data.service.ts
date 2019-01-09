import { Injectable } from '@angular/core';
import { ITrain } from './train';
import { IAppState } from './store';
@Injectable({
  providedIn: 'root'
})
export class TemporaryDataService {


  public static getInitialState(): IAppState {

    return {
      trains:
        [
        {id: 1, length: 10, name: 'DeutscheBahn', locoAddress: 4},
        {id: 2, length: 33, name: 'Arriva', locoAddress: 9},
        {id: 3, length: 28, name: 'DSB', locoAddress: 21}
        ]
      };
  }

  constructor() { }

}
