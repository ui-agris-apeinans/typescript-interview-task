import { API } from '~/constants';
import getUrl from '~/utils/getUrl';

export const errorObj = { error: 'Unexpected error occurred' }
export const callAPI = async (route: API, setAuthHeader?: boolean, params?: Record<string, any>) => {
    try {
        const response = await fetch(getUrl(route), {
            ...(params || {}),
            ...(setAuthHeader ? {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    ...(params?.headers || {}),
                }
            } : {})
        });
        const isJson = response.headers.get('content-type')?.includes('application/json');
        const data = isJson ? await response.json() : {};

        return data;
    } catch (e) {
        return errorObj;
    }
}
