import { Component } from 'react';
import { connect } from 'react-redux';
import { loadingUsers, loadUsers } from '../actions/users';

export default class UserList extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(loadingUsers());
        dispatch(loadUsers());
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
