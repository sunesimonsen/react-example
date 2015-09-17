import { Component } from 'react';
import { Link } from 'react-router';

export default class UserItem extends Component {
    render () {
        const { user } = this.props;
        return (
            <Link to={`/users/${user.get('id')}`}>{user.get('name')}</Link>
        );
    }
}
