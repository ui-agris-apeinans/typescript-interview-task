import { FC } from 'react';

import { Routes } from "~/constants";
import { IItem } from "~/services/getUserItems";
import FilterTab from "./components/FilterTab"

import './filter-style.scss';
import itemHasWeakPassword from "~/utils/itemHasWeakPassword";
import itemHasReusedPassword from "~/utils/itemHasReusedPassword";
import itemHasOldPassword from "~/utils/itemHasOldPassword";

interface IFilter {
  items: Array<IItem>;
}

const Filter: FC<IFilter> = ({ items }) => {
  const { weakItemsCount, reusedItemsCount, oldItemsCount } = items.reduce(({ weakItemsCount, reusedItemsCount, oldItemsCount }, item) => (
    {
      weakItemsCount: itemHasWeakPassword(item) ? (weakItemsCount + 1) : weakItemsCount,
      reusedItemsCount: itemHasReusedPassword(item, items) ? (reusedItemsCount + 1) : reusedItemsCount,
      oldItemsCount: itemHasOldPassword(item) ? (oldItemsCount + 1) : oldItemsCount
    }
  ), {
    weakItemsCount: 0,
    reusedItemsCount: 0,
    oldItemsCount: 0,
  })

  return (
    <div className="filter">
      <FilterTab title="Weak" count={weakItemsCount} path={Routes.Weak} />
      <FilterTab title="Reused" count={reusedItemsCount} path={Routes.Reused} />
      <FilterTab title="Old" count={oldItemsCount} path={Routes.Old} />
    </div>
  );
};

export default Filter;
