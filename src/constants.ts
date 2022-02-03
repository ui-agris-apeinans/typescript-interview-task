export enum Routes {
  Root = '/',
  Login = '/login',
  PasswordHealth = '/items',
  Weak = '/items/weak',
  Reused = '/items/reused',
  Old = '/items/old',
}

export enum API {
  Login = 'api/login',
  Logout = 'api/logout',
  Items = 'api/items',
  User = 'api/user',
}

export const thirtyDays = 30 * 24 * 60 * 60 * 1000;
