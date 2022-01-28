import { IItem } from "~/services/getUserItems";

const thirtyDays = 30 * 24 * 60 * 60 * 1000;

const itemHasOldPassword = (item: IItem) => {
    const currentTime = new Date().getTime();
    const itemTime = new Date(item.createdAt).getTime();
    const timeDiff = currentTime - itemTime;

    return timeDiff > thirtyDays;
};

export default itemHasOldPassword;
