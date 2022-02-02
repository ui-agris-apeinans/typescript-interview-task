import { API } from "~/constants";
import { callAPI } from "./API";

export interface IUser {
    username: string,
    email: string,
    id: string,
}

interface Response extends IUser {
    error?: string
}

export const getUser = async (userId?: string): Promise<Response> => {
    const data = await callAPI(API.User, true, {
        userId,
    });

    return data;
};
