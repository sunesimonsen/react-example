import uuid from 'node-uuid';
import { ADD_PARTICIPANT } from '../constants/ActionTypes';

var initialState = [];

export default function participants(state = initialState, action) {
    switch (action.type) {
    case ADD_PARTICIPANT:
        return [...state, { name: action.name, id: uuid() }];
    default:
        return state;
    }
}
