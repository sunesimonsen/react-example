var React = require('react');

module.exports = React.createClass({
    displayName: 'Hello',
    propTypes: {
        name: React.PropTypes.string.isRequired
    },
    render: function(){
        return <h1>Hello {this.props.name}!</h1>;
    }
});
