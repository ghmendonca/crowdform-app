import { NavigationContainer } from "@react-navigation/native";
import { useIsAuthenticated } from "../redux/auth/hooks";
import AuthRouter from "./auth";
import MainRouter from "./main";

const Router = () => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainRouter /> : <AuthRouter />}
    </NavigationContainer>
  );
};

export default Router;
