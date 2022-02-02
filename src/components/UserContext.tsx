import { createContext, useContext, useEffect, useState } from 'react';
import { API } from '~/constants';
import getUrl from '~/utils/getUrl';
import { IUser, getUser } from '~/services/user';

interface IUserContext extends IUser {
  updateUser: () => void;
  deleteData: () => void;
  errorMessage: string;
  isLoading: boolean;
}

const UserContext = createContext<IUserContext>({
  updateUser: () => { },
  deleteData: () => { },
  errorMessage: null,
  isLoading: true,
  username: null,
  email: null,
  id: null,
});

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState<string>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState<string>(null);
  const [email, setEmail] = useState<string>(null);
  const [id, setId] = useState<string>(null);

  const updateUser = async () => {
    setErrorMessage(null);
    setIsLoading(true);

    const data = await getUser();

    if (!data.error) {
      setUsername(data.username);
      setEmail(data.email);
      setId(data.id);
    } else {
      setErrorMessage(data.error);
    }

    setIsLoading(false);
  }

  const deleteData = () => {
    setErrorMessage(null);
    setIsLoading(false);
    setUsername(null);
    setEmail(null);
    setId(null);
  };

  useEffect(() => {
    updateUser();
  }, []);

  const value = {
    updateUser,
    deleteData,
    errorMessage,
    isLoading,
    username,
    email,
    id,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext;