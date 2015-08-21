import uuid from 'node-uuid';

var initialState = [];

export default function participants(state = initialState, action) {
    switch (action.type) {
    case 'addParticipant':
        return [...state, { name: action.name, id: uuid() }];
    default:
        return state;
    }
}
