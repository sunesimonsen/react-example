import { createAction } from 'redux-actions';

export function loadUsersAction() {
    const request = fetch('http://jsonplaceholder.typicode.com/users').then(response => {
        return response.json();
    });
    return createAction('LOAD_USERS')(request);
}

export function deleteUserAction(user) {
    return createAction('DELETE_USER')(user.get('id'));
}
