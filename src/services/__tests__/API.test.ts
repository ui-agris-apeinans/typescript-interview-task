import { API } from '../../constants';
import { callAPI } from '../API';

// beforeEach(() => {
//     fetchMock.resetMocks();
// });

const mockUrl = 'api';

// mocks "fetch" so our call function runs mockedFetch
//  
describe('callAPI', () => {
    test('should call passed url and return posts array', async () => {
        // fetchMock.mockResponseOnce(JSON.stringify(mockPosts));
        const response = await callAPI(API.Login);

        // expect(fetchMock).toHaveBeenCalledWith(mockUrl);
        // expect(fetchMock).toHaveBeenCalledTimes(1);
        // expect(response).toEqual(mockPosts);
    });

    test('should return defaultError on api failure', async () => {
        // fetchMock.mockReject();
        // const response = await callAPI(mockUrl);

        // expect(response).toEqual(defaultError);
    });
})