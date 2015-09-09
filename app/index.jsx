import React, { Component } from 'react';
import Application from './containers/Application';
import Router, { DefaultRoute, Route, Link, RouteHandler } from 'react-router';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

class RootRoute  extends Component {
    render() {
        return (
            <div>
                <Link to="app">app</Link> | <Link to="foo">foo</Link>
                <Provider store={store}>
                    {() => <RouteHandler/> }
                </Provider>
            </div>
        );
    }
}

class FooRoute  extends Component {
    render() {
        return (
            <h1>Foo</h1>
        );
    }
}

var routes = (
    <Route name="app" path="/" handler={RootRoute}>
        <Route name="foo" handler={FooRoute}/>
        <DefaultRoute handler={Application}/>
    </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.getElementById('root'));
});
