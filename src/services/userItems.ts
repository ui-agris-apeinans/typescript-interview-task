import { API } from "~/constants";
import getUrl from "~/utils/getUrl";

export interface IItem {
    id: string,
    title: string,
    description: string,
    password: string,
    createdAt: string,
}

export const getUserItems = async (userId?: string): Promise<Array<IItem>> => {
    const url = getUrl(API.Items, {
        userId,
    });

    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });

    const data = await response.json();

    return data.items;
};

export const updateItem = async (item: IItem): Promise<Array<IItem>> => {
    const response = await fetch(getUrl(API.Items), {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })

    const data = await response.json();

    return data.items;
}
