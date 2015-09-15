import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import UserList from './components/UserList';
import reduxPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);
const store = createStoreWithMiddleware(rootReducer);

class RootRoute extends Component {
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
