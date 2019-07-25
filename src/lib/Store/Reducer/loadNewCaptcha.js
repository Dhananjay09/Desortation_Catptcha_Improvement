import * as actionCodes from '../Action/actionTypeCodes';
import { updatedObject } from '../../Utility/Utility';


const initialState = {
    captchaData: null,
    loading: false,
    error: null
};

export const loadNewCaptcha = (state = initialState, action) => {
    switch (action.type) {
        case actionCodes.LOAD_NEW_CAPTCHA_START: return updatedObject(state, { loading: true });
        case actionCodes.LOAD_NEW_CAPTCHA_SUCCESS: return updatedObject(state, { loading: false, captchaData: action.captchaData })
        case actionCodes.LOAD_NEW_CAPTCHA_FAIL: return updatedObject(state, { loading: false, error: action.errorMsg });
        case actionCodes.RESET_LOAD_NEW_CAPTCHA: return updatedObject(state, { loading: false, captchaData: null, error: null })
        default: return state;
    }
}