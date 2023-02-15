import { NavigationContainer } from "@react-navigation/native";
import AuthRouter from "./auth";

const Router = () => {
  return (
    <NavigationContainer>
      <AuthRouter />
    </NavigationContainer>
  );
};

export default Router;
