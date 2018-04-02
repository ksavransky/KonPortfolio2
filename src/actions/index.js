import axios from 'axios';

export const SEND_EMAIL_START = "SEND_EMAIL_START";
export const sendEmailStart = (emailBody) => {
    return { type: SEND_EMAIL_START, emailBody }
}

export const SEND_EMAIL_RESULTS = "SEND_EMAIL_RESULTS";
export const sendEmailResults = (data) => {
    return { type: SEND_EMAIL_RESULTS, data }
}

export const SEND_EMAIL_ERROR = "SEND_EMAIL_ERROR";
export const sendEmailError = (data) => {
    return { type: SEND_EMAIL_ERROR, data }
}

export const SEND_EMAIL = "SEND_EMAIL";
export const sendEmail = (emailBody) => {
    return dispatch => {
        dispatch(sendEmailStart(emailBody));
        axios.get(`/api/send-email?emailBody=${emailBody}`)
            .then(res => dispatch(sendEmailResults(JSON.stringify(res.data))))
            .catch(err => dispatch(sendEmailError(err)))

    }
}
