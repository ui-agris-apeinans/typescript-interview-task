import { IItem } from "~/services/userItems";
import { thirtyDays } from "../constants";

const itemHasOldPassword = (item: IItem) => {
    const currentTime = new Date().getTime();
    const itemTime = new Date(item.createdAt).getTime();
    const timeDiff = currentTime - itemTime;

    return timeDiff > thirtyDays;
};

export default itemHasOldPassword;
