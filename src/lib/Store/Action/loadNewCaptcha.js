import * as actionCodes from './actionTypeCodes';
import axiosInstance from '../../Utility/axiosInstance';

const loadNewCaptchaStart = () => {
    return {
        type: actionCodes.LOAD_NEW_CAPTCHA_START
    }
}

const loadNewCaptchaSuccess = (data) => {
    return {
        type: actionCodes.LOAD_NEW_CAPTCHA_SUCCESS,
        captchaData: data
    }
}

const loadNewCaptchaFailed = (errorMsg) => {
    return {
        type: actionCodes.LOAD_NEW_CAPTCHA_FAIL,
        errorMsg
    }
}

export const loadNewCaptcha = () => {
    return dispatch => {
        dispatch(loadNewCaptchaStart());
        axiosInstance().get('loadnew/')
            .then((response) => {
                if (!response.data.error) {
                    dispatch(loadNewCaptchaSuccess(response.data.payload));
                    console.log('response payload--> ', response.data.payload)
                } else {
                    dispatch(loadNewCaptchaFailed(response.data.message));
                }
            }).catch((error) => {
                console.log('****ERROR*****', error)
                if (error.response && error.response.data && error.response.data.error) {
                    dispatch(loadNewCaptchaFailed(error.response.data.message))
                } else {
                    dispatch(loadNewCaptchaFailed(error.message));
                }
            })
    }
};

export const resetLoadNewCaptcha = () => {
    return {
        type: actionCodes.RESET_LOAD_NEW_CAPTCHA
    }
}
