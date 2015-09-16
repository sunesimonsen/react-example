import { Component } from 'react';
import { connect } from 'react-redux';

class UserDetails extends Component {
    render () {
        const { user } = this.props;
        return (
            <div>
                <h1>{user.name}</h1>
                <table>
                    <tr>
                        <td>Email:</td>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td>{user.phone}</td>
                    </tr>
                    <tr>
                        <td>Website:</td>
                        <td>{user.website}</td>
                    </tr>
                </table>
            </div>
        );
    }
}

class User extends Component {
    render () {
        const { params, usersById } = this.props;
        const user = usersById[params.id];
        let content = user ? <UserDetails user={user}/> : <span>Loading...</span>;
        return content;
    }
}

function select(state) {
    return {
        usersById: state.users.list.reduce(function (result, user) {
            result[user.id] = user;
            return result;
        }, {})
    };
}

export default connect(select)(User);
