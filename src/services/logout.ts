import { History } from "history";

import { Routes } from "~/constants";

const logout = (push: History['push']) => {
    localStorage.removeItem('token');
    push(Routes.Login);
};

export default logout;