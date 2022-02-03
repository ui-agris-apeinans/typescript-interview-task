import getUrl from '../getUrl';
import { API } from '../../constants';

process.env.API_URL = 'http://localhost:9003';

describe('should add route to api url', () => {
  test.each([
    [
      'http://localhost:9003/api/login',
      API.Login,
    ],
    [
      'http://localhost:9003/api/login',
      API.Login,
    ],
    [
      'http://localhost:9003/api/logout',
      API.Logout,
    ],
  ])('should return %s', (expectedResult, api) => {
    expect(getUrl(api)).toBe(expectedResult);
  });
})
