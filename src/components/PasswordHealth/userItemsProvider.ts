import { useEffect, useState } from 'react';

import { updateItem, getUserItems, IItem } from '../../services/userItems';

const userItemsProvider = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<String>();
  const [items, setItems] = useState<Array<IItem>>([])

  const fetchItems = async () => {
    setIsLoading(true);

    const data = await getUserItems();

    if (data.items) {
      setItems(data.items);
    } else {
      setErrorMessage(data.error);
    }

    setIsLoading(false);
  }

  const updateItems = async (item: IItem) => {
    setIsLoading(true);

    const data = await updateItem(item);

    if (data.items) {
      setItems(data.items);
    } else {
      setErrorMessage(data.error);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    fetchItems()
  }, []);

  return {
    isLoading,
    errorMessage,
    items,
    updateItems,
  }
};

export default userItemsProvider;
