import { createAction } from 'redux-actions';

export function loadingUsers() {
    return createAction('LOADING_USERS')();
}

export function loadUsers() {
    const request = fetch('http://jsonplaceholder.typicode.com/users').then(response => {
        return response.json();
    });
    return createAction('LOAD_USERS')(request);
}
