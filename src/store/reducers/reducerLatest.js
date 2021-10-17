import { FETCH_LATEST } from '../actions/index';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_LATEST:
            const data = action.payload.data.results;
            return { ...state, data };
        default:
            return state;
    }
}
