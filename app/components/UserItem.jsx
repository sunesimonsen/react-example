import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './UserItem.less';
import CSSModules from 'react-css-modules';

export default class UserItem extends Component {
    render () {
        const { user } = this.props;
        return (
            <li styleName="user-item" key={user.get('id')}>
                <Link to={`/users/${user.get('id')}`}>{user.get('name')}</Link>
            </li>
        );
    }
}

export default CSSModules(UserItem, styles);
