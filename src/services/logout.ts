import { API } from '~/constants';
import { callAPI } from "./API";

const logout = async () => {
    await callAPI(API.Logout, true);
    localStorage.removeItem('token');
};

export default logout;