const deepFreeze = require('deep-freeze');
import { rootReducer} from './store';
import {ADD_TRAIN, REMOVE_ALL_TRAINS, REMOVE_TRAIN} from './actions';
import { TemporaryDataService } from './temporary-data.service';

fdescribe('train reducers', () => {

    it('should return the initial state', () => {
        expect(rootReducer(undefined, {})).toEqual(TemporaryDataService.getInitialState());
    });

    it('should add a new train to the train state', () => {

        const startState = TemporaryDataService.getInitialState();

        const endState = TemporaryDataService.getInitialState();
        endState.trains =
            [
                {id: 1, length: 10, name: 'DeutscheBahn', locoAddress: 4},
                {id: 2, length: 33, name: 'Arriva', locoAddress: 9},
                {id: 3, length: 28, name: 'DSB', locoAddress: 21},
                {id: 4, length: 99, name: 'NewTrain', locoAddress: 44}
            ];

        deepFreeze(startState);

        expect( rootReducer(startState, {
            type: ADD_TRAIN,
            payload: {length: 99, name: 'NewTrain', locoAddress: 44}
        })).toEqual(endState);

    });

    it('should delete a train based on an id', () => {

        const startState = TemporaryDataService.getInitialState();

        const endState = TemporaryDataService.getInitialState();
        endState.trains =
            [
                {id: 2, length: 33, name: 'Arriva', locoAddress: 9},
                {id: 3, length: 28, name: 'DSB', locoAddress: 21},
            ];

        deepFreeze(startState);

        expect( rootReducer(startState, {
            type: REMOVE_TRAIN,
            payload: 1
        })).toEqual(endState);
    });

    it('should fail to delete a train given an invalid id', () => {

        const startState = TemporaryDataService.getInitialState();

        const endState = TemporaryDataService.getInitialState();

        deepFreeze(startState);

        expect( rootReducer(startState, {
            type: REMOVE_TRAIN,
            payload: 99
        })).toEqual(endState);
    });

    it('should remove all trains from the state', () => {

        const startState = TemporaryDataService.getInitialState();

        const endState = TemporaryDataService.getInitialState();
        endState.trains = [];

        deepFreeze(startState);

        expect( rootReducer(startState, {
            type: REMOVE_ALL_TRAINS
        })).toEqual(endState);
    });
});
