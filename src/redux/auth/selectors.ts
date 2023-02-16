import { User } from "../../types/user";
import { RootState } from "../store";

export const isAuthenticated: (state: RootState) => boolean = ({ auth }) =>
  auth.isAuthenticated;

export const user: (state: RootState) => User | null = ({ auth }) => auth.user;

export const loading: (state: RootState) => boolean = ({ auth }) =>
  auth.loading;
