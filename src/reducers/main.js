import { SEND_EMAIL_RESULTS,  SEND_EMAIL_ERROR } from '../actions';

const initialState = {
    sendEmailResults: ''
}

const main = (state = initialState, action) => {
    switch (action.type) {
        case SEND_EMAIL_RESULTS:
            return { ...state, sendEmailResults: action.data }
        case SEND_EMAIL_ERROR:
            return { ...state, sendEmailResults: "Something went wrong. Please try contacting me again later." }
        default:
            return state
    }
}

export default main;
