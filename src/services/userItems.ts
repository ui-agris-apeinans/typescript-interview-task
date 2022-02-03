import { API } from "~/constants";
import { callAPI } from "./API";

export interface IItem {
    id: string,
    title: string,
    description: string,
    password: string,
    createdAt: string,
}

interface Response {
    items: IItem[],
    error?: string
}

export const getUserItems = async (userId?: string): Promise<Response> => {
    const data = await callAPI(API.Items, true, {
        userId,
    });

    return data;
};

export const updateItem = async (item: IItem): Promise<Response> => {
    const data = await callAPI(API.Items, true, {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
            'Content-Type': 'application/json',
        }
    })

    return data;
}
