import { SIGN_IN } from '../actions/index';
const INITIAL_STATE = {
    currentUser: null,
    hidden: true
}
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SIGN_IN:
            const data = action.payload;
            console.log(data);
            return { ...data };
        default:
            return state;
    }
}
