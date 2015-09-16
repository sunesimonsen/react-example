import { handleActions } from 'redux-actions';

export default handleActions({
    LOAD_USERS: {
        next(state, action) {
            if (action.meta.status === 'init') {
                return { ...state, status: 'loading' };
            } else {
                return { ...state, status: 'loaded', list: action.payload };
            }
        },
        throw(state, action) {
            return { ...state, status: 'failed' };
        }
    }
}, { status: 'not-loaded', list: [] });
