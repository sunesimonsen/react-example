import { Component } from 'react';
import { connect } from 'react-redux';
import UserItem from './UserItem.jsx';

export default class UserList extends Component {
    render() {
        const { users } = this.props;
        return (
            <div>
                <p>
                {users.status !== 'loaded' ? 'Loading...' : null }
                </p>
                <ul>
                    {users.list.map(user =>
                        <li key={user.id}><UserItem user={user}/></li>
                     )}
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
