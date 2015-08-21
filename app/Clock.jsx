var React = require('react');
var styles = require('./Clock.less');

module.exports = React.createClass({
    displayName: 'Clock',
    getInitialState: function () {
        return { ticks: 0 };
    },
    componentDidMount: function(){
        this.timer = setInterval(this.tick, 1000);
    },
    componentWillUnmount: function(){
        clearInterval(this.timer);
    },
    tick: function(){
        this.setState({ ticks: this.state.ticks + 1 });
    },
    render: function(){
        return <h2 className={styles.alert}>{this.state.ticks}</h2>;
    }
});
