import { isFSA } from 'flux-standard-action'

function isPromise (val) {
  return val && typeof val.then === 'function'
}

export default function asyncMiddleware (options) {
  var dispatch = options.dispatch

  return next => action => {
    if (!isFSA(action)) {
      return isPromise(action) ? action.then(dispatch) : next(action)
    }

    if (!isPromise(action.payload)) {
      return next(action)
    }

    if (action.meta && action.meta.status === 'init') {
      return next(action)
    }

    const meta = { ...action.meta, status: 'init' }
    dispatch({ ...action, meta: meta })
    return action.payload.then(function (result) {
      const meta = { ...action.meta, status: 'success' }
      return dispatch({ ...action, payload: result, meta: meta })
    }, function (error) {
      const meta = { ...action.meta, status: 'error' }
      return dispatch({ ...action, payload: error, error: true, meta: meta })
    })
  }
}
