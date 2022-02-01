import { FC, useState } from 'react';
import Modal from 'react-modal';

import { IItem } from "~/services/userItems";
import ItemIcon from './components/ItemIcon';
import './list-style.scss';

interface IList {
  items: Array<IItem>;
  updateItems: (IItem) => void;
}

interface IUpdateModal {
  item: IItem;
  updateItems: (IItem) => void;
}

Modal.setAppElement('body');

const UpdateModal: FC<IUpdateModal> = ({ item, updateItems }) => {
  const [showModal, setShowModal] = useState(false);
  const [newPass, setNewPass] = useState('');

  return (
    <>
      <button className="update" onClick={() => setShowModal(true)}>
        Update Password
      </button>
      <Modal
        className="modal"
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Example Modal"
      >
        <h1>Update Password</h1>
        <input
          placeholder="new password"
          className="input"
          value={newPass}
          onChange={(event) => setNewPass(event.target.value)}
        />
        <div className="pt-12px text-center">
          <button className="button" onClick={() => {
            updateItems({
              ...item,
              password: newPass,
            })
            setShowModal(false)
          }}>Change</button>
          <button className="button ml-12px" onClick={() => {
            setNewPass('');
            setShowModal(false)
          }}>
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
}

const List: FC<IList> = ({ items, updateItems }) => (
  <ul className="list">
    {
      items.map((item) => (
        <li key={item.id} className="item">
          <ItemIcon title={item.title} />
          <div>
            <div className="title">
              {item.title}
            </div>
            <div className="description">
              {item.description}
            </div>
          </div>
          <UpdateModal item={item} updateItems={updateItems} />
        </li>
      ))
    }
  </ul>
)

export default List;
