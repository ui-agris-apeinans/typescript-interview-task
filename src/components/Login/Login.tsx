import { SyntheticEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Routes } from '~/constants';
import login from '~/services/login';
import ErrorBlock from '../ErrorBlock';
import LoadingScreen from '../LoadingScreen';

import './login-style.scss';

const Login = () => {
  const { push } = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(null);
    setIsLoading(true)
    const result = await login(username, password);
    setIsLoading(false)

    if (result.errorMessage) {
      setErrorMessage(result.errorMessage);
    } else {
      push(Routes.PasswordHealth);
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        {isLoading ? <LoadingScreen /> : <>
          <h1 className="text-center">
            Password Health
          </h1>
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Username"
            type="text"
            className="input mt-52px"
          />
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            type="password"
            className="input mt-24px"
          />
          <ErrorBlock error={errorMessage} />
          <button type="submit" className="button mt-24px">
            Login
          </button>
        </>}
      </form>
    </div>
  )
};

export default Login;
