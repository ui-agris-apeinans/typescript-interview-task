import { API } from '~/constants';
import { callAPI } from './API';

const login = async (username: string, password: string) => {
  const data = await callAPI(API.Login, false, {
    method: "POST",
    body: JSON.stringify({
      username,
      password
    }),
    headers: {
      'Content-Type': 'application/json',
    }
  })
  const { token } = data;

  if (token) {
    localStorage.setItem('token', token);
  }

  return data
};

export default login;
