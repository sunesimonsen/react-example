import { createAction } from 'redux-actions';

export function loadUsers() {
    return createAction('LOAD_USERS')();
}

export function recievedUsers() {
    const request = fetch('http://jsonplaceholder.typicode.com/users').then(response => {
        return response.json();
    });
    return createAction('RECIEVED_USERS')(request);
}
