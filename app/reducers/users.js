import { handleActions } from 'redux-actions';

export default handleActions({
    LOADING_USERS: (state, action) => {
        return { loading: true, list: state.list };
    },
    LOAD_USERS: {
        next(state, action) {
            return { loading: false, list: action.payload };
        },
        throw(state, action) {
            return state;
        }
    }
}, { loading: true, list: [] });
