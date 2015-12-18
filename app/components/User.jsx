import React from 'react'
import { connect } from 'react-redux'
import { Map } from 'immutable'
import { createSelector } from 'reselect'
import { deleteUserAction } from '../actions/users'
import { History } from 'react-router'

const User = React.createClass({
  mixins: [ History ],

  render () {
    const { params, status, usersById, dispatch, history } = this.props

    let content
    if (status === 'loaded') {
      const user = usersById.get(parseInt(params.id, 10))
      if (user) {
        const deleteUser = () => {
          dispatch(deleteUserAction(user))
          history.pushState(null, '/')
        }

        content = (
          <div>
            <h1>{user.name}</h1>
            <table>
              <tr>
                <td>Email:</td>
                <td>{user.email}</td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>{user.phone}</td>
              </tr>
              <tr>
                <td>Website:</td>
                <td>{user.website}</td>
              </tr>
            </table>
            <button onClick={deleteUser}>Delete</button>
            <button onClick={history.goBack}>Back</button>
          </div>
        )
      } else {
        content = <span>Not found</span>
      }
    } else {
      content = <span>Loading...</span>
    }

    return content
  }
})

const usersSelector = state => state.users
const select = createSelector(
  [usersSelector],
  (users) => {
    return {
      status: users.get('status'),
      usersById: users.get('list').reduce((result, user) => {
        return result.set(user.id, user)
      }, Map())
    }
  }
)

export default connect(select)(User)
