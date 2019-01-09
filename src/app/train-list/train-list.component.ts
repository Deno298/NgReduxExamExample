import { Component, OnInit } from '@angular/core';
import { NgRedux, select} from '@angular-redux/store';
import { ADD_TRAIN, REMOVE_TRAIN} from '../actions';
import { IAppState } from '../store';
import { ITrain } from '../train';

@Component({
  selector: 'app-train-list',
  templateUrl: './train-list.component.html',
  styleUrls: ['./train-list.component.scss']
})
export class TrainListComponent implements OnInit {

  @select() trains;

  model: ITrain = {
    id: 0,
    length: null,
    name: '',
    locoAddress: null
  };


  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  onSubmit() {
    this.ngRedux.dispatch({type: ADD_TRAIN, payload: this.model});
  }

  removeTrain(train) {
    this.ngRedux.dispatch({type: REMOVE_TRAIN, payload: train.id});
  }

}
