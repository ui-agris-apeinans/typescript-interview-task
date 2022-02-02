import { API } from '../constants';

const getUrl = (endpoint: API) => `${process.env.API_URL}/${endpoint}`;

export default getUrl;
