import { FETCH_POPULAR } from '../actions/index';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POPULAR:
            const data = action.payload.data.results;
            return { ...state, data };
        default:
            return state;
    }
}
