var React = require('react');
var Hello = require('./Hello');
var Clock = require('./Clock');

React.render((
    <div>
        <Hello name="Sune" />
        <Clock />
    </div>
), document.getElementById('application'));
