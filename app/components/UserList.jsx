import { Component } from 'react';
import { connect } from 'react-redux';
import { loadUsers, recievedUsers } from '../actions/users';

export default class UserList extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(loadUsers());
        dispatch(recievedUsers());
    }

    render() {
        const { users } = this.props;
        return (
            <div>
                <p>
                {users.loading ? 'Loading...' : null }
                </p>
                <ul>
                    {users.list.map(user => (<li key={user.id}>{user.name}</li>))}
                </ul>
            </div>
        );
    }
}

function select(state) {
  return {
    users: state.users
  };
}

export default connect(select)(UserList);
