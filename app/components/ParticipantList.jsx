import { Component, PropTypes } from 'react';
import ParticipantTextInput from './ParticipantTextInput';

export default class ParticipantList extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            text: ''
        };
    }

    render() {
        const { participants } = this.props;
        return (
            <div>
                <ul>
                    {participants.map(participant => (<li key={participant.id}>{participant.name}</li>))}
                </ul>
                <ParticipantTextInput onSave={this.props.addParticipant}
                                      placeholder="Participant name"
                                      newParticipant={true} />
            </div>
        );
    }
}


ParticipantList.propTypes = {
    addParticipant: PropTypes.func.isRequired
};
