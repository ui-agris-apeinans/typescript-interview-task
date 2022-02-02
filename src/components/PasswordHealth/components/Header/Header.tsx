import { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { IItem } from "~/services/userItems";
import logout from "~/services/logout";
import itemHasWeakPassword from "~/utils/itemHasWeakPassword";
import itemHasReusedPassword from "~/utils/itemHasReusedPassword";
import itemHasOldPassword from "~/utils/itemHasOldPassword";
import { Routes } from "~/constants";

import './header-style.scss';

interface IHeader {
  items: Array<IItem>;
  username: string;
}

const Header: FC<IHeader> = ({ items, username }) => {
  const { push } = useHistory()
  const vulnerableItemCount = items.filter(item => itemHasOldPassword(item) || itemHasReusedPassword(item, items) || itemHasWeakPassword(item)).length

  const onLogout = async () => {
    await logout();
    push(Routes.Login)
  }

  return (
    <div className="header">
      <div className="user-section">
        <button onClick={onLogout}>{`Logout ${username}`}</button>
      </div>
      <h1>{`${vulnerableItemCount} Items are vulnerable`}</h1>
      <span>Create new complex passwords to protect your accounts</span>
    </div>
  )
};

export default Header;
