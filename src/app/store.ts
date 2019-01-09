import { ITrain } from './train';
import { ADD_TRAIN, REMOVE_ALL_TRAINS, REMOVE_TRAIN } from './actions';
import { tassign } from 'tassign';
import { TemporaryDataService } from './temporary-data.service';

export interface IAppState {
    trains: ITrain[];
}

export const INITIAL_STATE: IAppState = TemporaryDataService.getInitialState();

export function rootReducer(state: IAppState = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_TRAIN:
            action.payload.id = state.trains.length + 1;
            return Object.assign({}, state, {
                trains: state.trains.concat(Object.assign({}, action.payload))});

        case REMOVE_TRAIN:
            return tassign(state, { trains: state.trains.filter(trains => trains.id !== action.payload)});

        case REMOVE_ALL_TRAINS:
            return tassign(state, { trains: []});

        default:
            return state;
    }
}
