import { Component } from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import { createSelector } from 'reselect';

class UserDetails extends Component {
    render () {
        const { user } = this.props;
        return (
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
            </div>
        );
    }
}

class User extends Component {
    render () {
        const { params, usersById } = this.props;
        const user = usersById.get(parseInt(params.id, 10));
        let content = user ? <UserDetails user={user}/> : <span>Loading...</span>;
        return content;
    }
}

const usersSelector = state => state.users;
const select = createSelector(
  [usersSelector],
  (users) => {
      return {
          usersById: users.get('list').reduce((result, user) => {
              return result.set(user.get('id'), user)
          }, Map())
      };
  }
);

export default connect(select)(User);
