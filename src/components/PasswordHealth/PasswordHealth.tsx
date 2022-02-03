import { Route, Switch } from "react-router-dom";

import List from './components/List/List';
import userItemsProvider from './userItemsProvider';
import ErrorBlock from '../ErrorBlock';
import Filter from './components/Filter/Filter';
import LoadingScreen from '../LoadingScreen';
import Header from './components/Header/Header';
import { Routes } from '~/constants';
import itemHasWeakPassword from "~/utils/itemHasWeakPassword";
import itemHasReusedPassword from "~/utils/itemHasReusedPassword";
import itemHasOldPassword from "~/utils/itemHasOldPassword";
import { useUserContext } from '../UserContext';

const PasswordHealth: React.FC = () => {
  const {
    errorMessage: userProviderErrorMessage,
    isLoading: userDataIsLoading,
    username,
  } = useUserContext();

  const {
    items,
    isLoading,
    errorMessage,
    updateItems
  } = userItemsProvider();

  if (isLoading || userDataIsLoading) {
    return <LoadingScreen />
  }

  if (userProviderErrorMessage || errorMessage) {
    return <ErrorBlock error={userProviderErrorMessage || errorMessage} />
  }

  return (
    <div data-testid="passwordHealth" className="container">
      <Header items={items} username={username} />
      <Filter items={items} />
      <Switch>
        <Route exact path={[Routes.PasswordHealth, Routes.Root]}>
          <List items={items} updateItems={updateItems} />
        </Route>
        <Route path={Routes.Weak}>
          <List items={items.filter(itemHasWeakPassword)} updateItems={updateItems} />
        </Route>
        <Route path={Routes.Reused}>
          <List items={items.filter((item) => itemHasReusedPassword(item, items))} updateItems={updateItems} />
        </Route>
        <Route path={Routes.Old}>
          <List items={items.filter(itemHasOldPassword)} updateItems={updateItems} />
        </Route>
      </Switch>
    </div>
  );
};

export default PasswordHealth;
