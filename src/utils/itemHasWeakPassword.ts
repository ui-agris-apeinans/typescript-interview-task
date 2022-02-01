import { IItem } from "~/services/userItems";

const itemHasWeakPassword = (item: IItem) => {
  const { password } = item;

  const strength = [
    password.match(/[a-z]/) != null,
    password.match(/[A-Z]/) != null,
    password.match(/[!@#$%^&*]/) != null,
    password.match(/[0-9]/) != null,
  ].filter(Boolean).length;

  return strength < 3;
};

export default itemHasWeakPassword;
