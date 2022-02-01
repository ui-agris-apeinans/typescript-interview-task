import { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { IItem } from "~/services/userItems";
import itemHasWeakPassword from "~/utils/itemHasWeakPassword";
import itemHasReusedPassword from "~/utils/itemHasReusedPassword";
import itemHasOldPassword from "~/utils/itemHasOldPassword";
import logout from '../../../../services/logout';

import './header-style.scss';

interface IHeader {
  items: Array<IItem>;
  username: string;
}

const Header: FC<IHeader> = ({ items, username }) => {
  const { push } = useHistory()
  const vulnerableItemCount = items.filter(item => itemHasOldPassword(item) || itemHasReusedPassword(item, items) || itemHasWeakPassword(item)).length

  return (
    <div className="header">
      <div className="user-section">
        <button onClick={() => logout(push)}>{`Logout ${username}`}</button>
      </div>
      <h1>{`${vulnerableItemCount} Items are vulnerable`}</h1>
      <span>Create new complex passwords to protect your accounts</span>
    </div>
  )
};

export default Header;
