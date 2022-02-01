import { passwords } from '../data';

let items = [];

export const updateItem = (newItem) => {
  const updatedItem = items.find(({ id }) => id === newItem.id)

  updatedItem ? items = [...items.map(item => newItem.id === item.id ? { ...item, ...newItem } : item)] : items.push(newItem)
};

export const getItems = () => {
  return passwords.map((passwordItem) => {
    const updatedItem = items.find(({ id }) => id === passwordItem.id);

    return {
      ...(updatedItem || passwordItem),
    };
  })
};
