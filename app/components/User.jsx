import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import { createSelector } from 'reselect';
import { deleteUserAction } from '../actions/users';
import { Router, History } from 'react-router';

const User = React.createClass({
    mixins: [ History ],

    render() {
        const { params, status, usersById, dispatch, history } = this.props;

        let content;
        if (status === 'loaded') {
            const user = usersById.get(parseInt(params.id, 10));
            if (user) {
                function deleteUser() {
                    dispatch(deleteUserAction(user));
                    history.pushState(null, '/')
                }

                content = (
                    <div>
                        <h1>{user.get('name')}</h1>
                        <table>
                            <tr>
                                <td>Email:</td>
                                <td>{user.get('email')}</td>
                            </tr>
                            <tr>
                                <td>Phone:</td>
                                <td>{user.get('phone')}</td>
                            </tr>
                            <tr>
                                <td>Website:</td>
                                <td>{user.get('website')}</td>
                            </tr>
                        </table>
                        <button onClick={deleteUser}>Delete</button>
                    </div>
                );
            } else {
                content = <span>Not found</span>;
            }
        } else {
            content = <span>Loading...</span>;
        }

        return content;
    }
});

const usersSelector = state => state.users;
const select = createSelector(
    [usersSelector],
    (users) => {
        return {
            status: users.get('status'),
            usersById: users.get('list').reduce((result, user) => {
                return result.set(user.get('id'), user)
            }, Map())
        };
    }
);

export default connect(select)(User);
