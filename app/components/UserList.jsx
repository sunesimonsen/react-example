import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserItem from './UserItem.jsx'
import { loadUsersAction } from '../actions/users'
import CSSModules from 'react-css-modules'
import styles from './UserList.less'

export default class UserList extends Component {
  render () {
    const { users, dispatch } = this.props
    const refresh = () => {
      dispatch(loadUsersAction())
    }
    var userList = (
      <ul styleName='list'>
        {users.get('list').map(user => <UserItem user={user}/>)}
      </ul>
    )

    return (
      <div>
        {users.get('status') === 'loaded' ? userList : <p>Loading...</p> }
        <button onClick={refresh}>Refresh</button>
      </div>
    )
  }
}

export default connect((state) => ({ users: state.users }))(CSSModules(UserList, styles))

