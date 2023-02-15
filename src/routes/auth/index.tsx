import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screens/Login";
import SignUp from "../../screens/SignUp";
import { Screen } from "../constants";

const Stack = createNativeStackNavigator();

const AuthRouter = () => {
  return (
    <Stack.Navigator initialRouteName={Screen.Login}>
      <Stack.Screen name={Screen.Login} component={Login} />
      <Stack.Screen name={Screen.SignUp} component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthRouter;
