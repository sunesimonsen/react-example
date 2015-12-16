import React, { Component } from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { compose, createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import UserList from './components/UserList'
import User from './components/User'
import asyncMiddleware from './redux-async'
import { loadUsersAction } from './actions/users'

import { devTools, persistState } from 'redux-devtools'
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react'

const finalCreateStore = compose(
  applyMiddleware(asyncMiddleware),
  devTools(),
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore)

const store = finalCreateStore(rootReducer)

if (module.hot) {
  module.hot.accept('./reducers', () => store.replaceReducer(require('./reducers')))
}

class RootRoute extends Component {
  componentDidMount () {
    store.dispatch(loadUsersAction())
  }

  render () {
    return (
      <div>{this.props.children}</div>
    )
  }
}

class Routes extends Component {
  render () {
    return (
      <Router>
        <Route path='/' component={RootRoute}>
          <Route path='users/:id' component={User}/>
          <IndexRoute component={UserList}/>
        </Route>
      </Router>
    )
  }
}

React.render((
  <div>
    <Provider store={store}>
      {() => <Routes/>}
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
    </div>
  ), document.getElementById('root'))
