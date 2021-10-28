/** @format */

import { AuthorizedRoutes } from "./AuthorizedRoutes";
import { UnauthorizedRoutes } from "./UnauthorizedRoutes";

export const Authorized = () => {
  return <AuthorizedRoutes />;
};
export const Unauthorized = () => <UnauthorizedRoutes />;

export const ROUTE_KEYS = {
  SIGN_IN: "SignIn",
  HOME: "Home",
};
