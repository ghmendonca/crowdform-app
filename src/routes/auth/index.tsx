import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screens/Login";
import SignUp from "../../screens/SignUp";
import { AuthStack } from "../constants";

const Stack = createNativeStackNavigator<AuthStack>();

const AuthRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerTitle: "" }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthRouter;
