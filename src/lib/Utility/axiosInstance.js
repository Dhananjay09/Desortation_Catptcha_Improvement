import axios from 'axios';
import * as config from '../config';

const baseURL = config.backendURL;

const axiosInstance = () => {

    return {
        get: (urlSegment, options = {}) => axios.get(baseURL + urlSegment, { ...options }),
        post: (urlSegment, data, options = {}) => axios.post(baseURL + urlSegment, data, { ...options }),
        patch: (urlSegment, data, options = {}) => axios.patch(baseURL + urlSegment, data, { ...options }),
        delete: (urlSegment, options = {}) => axios.delete(baseURL + urlSegment, { ...options }),
    };
};
export default axiosInstance;
