import { handleActions } from 'redux-actions';
import { fromJS, mergeDeep, List } from 'immutable';

export default handleActions({
    LOAD_USERS: {
        next(state, action) {
            if (action.meta.status === 'init') {
                return state.mergeDeep({ status: 'loading' });
            } else {
                return state.mergeDeep({ status: 'loaded', list: fromJS(action.payload) });
            }
        },
        throw(state, action) {
            return state.mergeDeep({ status: 'failed' });
        }
    },
    DELETE_USER: function (state, action) {
        var id = action.payload;
        return state.update('list', users => users.filter(user => user.get('id') !== id));
    }
}, fromJS({ status: 'not-loaded', list: List() }));
