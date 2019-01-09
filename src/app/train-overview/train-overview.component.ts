import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState} from '../store';
import { REMOVE_ALL_TRAINS } from '../actions';

@Component({
  selector: 'app-train-overview',
  templateUrl: './train-overview.component.html',
  styleUrls: ['./train-overview.component.scss']
})
export class TrainOverviewComponent implements OnInit {

  @select() trains;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  removeTrains() {
    this.ngRedux.dispatch({type: REMOVE_ALL_TRAINS});
  }

}
