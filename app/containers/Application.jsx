import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ParticipantList from '../components/ParticipantList';
import { ADD_PARTICIPANT } from '../constants/ActionTypes';
import * as ParticipantsActions from '../actions/participants';

class WhoOwesYou extends Component {
    addParticipant(name) {
    }

    render() {
        const { participants, dispatch } = this.props;
        const actions = bindActionCreators(ParticipantsActions, dispatch);
        return (
            <ParticipantList addParticipant={actions.addParticipant}
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
