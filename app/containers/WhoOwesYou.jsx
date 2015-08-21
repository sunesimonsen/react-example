import { Component } from 'react';
import { connect } from 'react-redux';
import ParticipantList from '../components/ParticipantList';

class WhoOwesYou extends Component {
    addParticipant(name) {
        const { dispatch } = this.props;
        dispatch({ type: 'addParticipant', name: name });
    }

    render() {
        const { participants } = this.props;
        return (
            <ParticipantList addParticipant={this.addParticipant.bind(this)}
                             participants={participants} />
        );
    }
}

function select(state) {
  return {
    participants: state.participants
  };
}

export default connect(select)(WhoOwesYou);
