import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import UserList from './components/UserList';
import User from './components/User';
import reduxPromise from 'redux-promise';
import asyncMiddleware from './redux-async';
import { loadUsers } from './actions/users';

const createStoreWithMiddleware = applyMiddleware(asyncMiddleware)(createStore);
const store = createStoreWithMiddleware(rootReducer);


class RootRoute extends Component {
    componentDidMount() {
        store.dispatch(loadUsers());
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

class Routes extends Component {
    render() {
        return (
            <Router>
                <Route path="/" component={RootRoute}>
                    <Route path="users/:id" component={User}/>
                    <IndexRoute component={UserList}/>
                </Route>
            </Router>
        );
    }
}

React.render((
    <Provider store={store}>
        {() => <Routes/>}
    </Provider>
), document.getElementById('root'));
