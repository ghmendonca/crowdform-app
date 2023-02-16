import { User } from "../../types/user";

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
}

export enum AuthAction {
  CheckFromCache = "auth/checkFromCache",
  Authenticate = "auth/authenticate",
  Logout = "auth/logout",
}
