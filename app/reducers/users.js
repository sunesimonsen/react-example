import { handleActions } from 'redux-actions'
import { fromJS, List, Record } from 'immutable'

const UserRecord = Record({
  id: null,
  name: '',
  email: '',
  website: '',
  phone: ''
})

export default handleActions({
  LOAD_USERS: {
    next (state, action) {
      if (action.meta.status === 'init') {
        return state.mergeDeep({ status: 'loading' })
      } else {
        return state.mergeDeep({
          status: 'loaded',
          list: List(action.payload.map(user => new UserRecord(user))) })
      }
    },
    throw (state, action) {
      return state.mergeDeep({ status: 'failed' })
    }
  },
  DELETE_USER (state, action) {
    var id = action.payload
    return state.update('list', users => users.filter(user => user.id !== id))
  }
}, fromJS({ status: 'not-loaded', list: List() }))
