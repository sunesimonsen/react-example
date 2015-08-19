var React = require('react');
var styles = require('./Clock.css');

module.exports = React.createClass({
    displayName: 'Clock',
    getInitialState: function () {
        return { date: new Date() };
    },
    componentDidMount: function(){
        this.timer = setInterval(this.tick, 1000);
    },
    componentWillUnmount: function(){
        clearInterval(this.timer);
    },
    tick: function(){
        this.setState({ date: new Date() });
    },
    render: function(){
        return <h2 className={styles.alert}>{this.state.date.toString()}</h2>;
    }
});
