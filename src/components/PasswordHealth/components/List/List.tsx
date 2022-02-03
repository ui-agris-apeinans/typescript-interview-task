import { FC, SyntheticEvent, useState } from 'react';
import Modal from 'react-modal';

import { IItem } from "~/services/userItems";
import ItemIcon from './components/ItemIcon';
import ErrorBlock from "~/components/ErrorBlock";
import './list-style.scss';

interface IList {
  items: Array<IItem>;
  updateItems: (item: IItem) => void;
}

interface IUpdateModal {
  item: IItem;
  updateItems: (item: IItem) => void;
}

Modal.setAppElement('body');

const UpdateModal: FC<IUpdateModal> = ({ item, updateItems }) => {
  const [showModal, setShowModal] = useState(false);
  const [newPass, setNewPass] = useState('');
  const [error, setError] = useState('');

  const onSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!newPass.length) {
      setError('Password must be at least 1 character')
    } else {
      updateItems({
        ...item,
        password: newPass,
      })
      setShowModal(false)
    }
  }

  const onCloseModal = () => {
    setNewPass('');
    setError('');
    setShowModal(false)
  }

  return (
    <>
      <button className="update" onClick={() => setShowModal(true)}>
        Update Password
      </button>
      <Modal
        className="modal"
        isOpen={showModal}
        onRequestClose={onCloseModal}
        contentLabel="Example Modal"
      >
        <form onSubmit={onSubmit}>
          <h1>Update Password</h1>
          <input
            placeholder="new password"
            className="input"
            type="password"
            minLength={1}
            value={newPass}
            onChange={(event) => setNewPass(event.target.value)}
          />

          <ErrorBlock error={error} />

          <div className="pt-12px text-center">
            <button className="button" type="submit">Change</button>
            <button className="button ml-12px" onClick={onCloseModal}>
              Cancel
            </button>
          </div>
        </form>
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
