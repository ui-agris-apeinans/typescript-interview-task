import { useEffect, useState } from 'react';

import { updateItem, getUserItems, IItem } from '../../services/userItems';

const userItemsProvider = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<String>();
  const [items, setItems] = useState<Array<IItem>>([])

  const fetchItems = async () => {
    setIsLoading(true);

    try {
      const userItems = await getUserItems();
      setItems(userItems);
    } catch (error) {
      setErrorMessage(error.message);
    }

    setIsLoading(false);
  }

  const updateItems = async (item: IItem) => {
    setIsLoading(true);

    try {
      const userItems = await updateItem(item);

      setItems(userItems);
    } catch (error) {
      setErrorMessage(error.message);
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
