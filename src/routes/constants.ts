import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AuthStack = {
  Login: undefined;
  SignUp: undefined;
};

export type AuthStackProp = NativeStackNavigationProp<AuthStack>;
