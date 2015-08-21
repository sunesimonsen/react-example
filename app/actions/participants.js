import * as types from '../constants/ActionTypes';

export function addParticipant(name) {
    return { type: types.ADD_PARTICIPANT, name };
}
