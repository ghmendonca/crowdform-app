import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { checkFromCache } from "./authSlice";
import { isAuthenticated, loading } from "./selectors";

export const useCachedAuth = () => {
  const dispatch = useAppDispatch();
  const loading = useIsLoading();
  const authenticated = useIsAuthenticated();

  useEffect(() => {
    dispatch(checkFromCache());
  }, []);

  return { loading, authenticated };
};

export const useIsAuthenticated = () => useAppSelector(isAuthenticated);

export const useIsLoading = () => useAppSelector(loading);
