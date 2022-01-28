import { API } from '~/constants';
import getUrl from '../utils/getUrl';

const login = async (username: string, password: string) => {
  const url = getUrl(API.Login, {
    username,
    password,
  });

  const response = await fetch(url);
  const data = await response.json();
  const { token } = data;

  if (token) {
    localStorage.setItem('token', token);
  }
  return data
};

export default login;
