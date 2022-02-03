import { API } from '../../constants';
import { callAPI, errorObj } from '../API';

beforeEach(() => {
    fetchMock.resetMocks();
});

const mockUrl = 'mockUrl';
const mockParams = {
    param: 'param',
    headers: {
        Authorization: 'Bearer 12345',
        'Content-Type': 'application/json',
    }
}
const mockResponse = { data: 123 };

describe('callAPI', () => {
    test('should call fetch with passed params and returns data', async () => {
        localStorage.setItem('token', '12345');
        fetchMock.mockResponseOnce(JSON.stringify(mockResponse), { headers: { 'Content-Type': 'application/json' } });
        const response = await callAPI(mockUrl as API, true, mockParams);

        expect(fetchMock.mock.calls[0][1]).toEqual(mockParams);
        expect(response).toEqual(mockResponse);
    });

    test('should return errorObj on api failure', async () => {
        fetchMock.mockReject();
        const response = await callAPI(mockUrl);

        expect(response).toEqual(errorObj);
    });
})