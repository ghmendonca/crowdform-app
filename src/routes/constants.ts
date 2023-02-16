import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export type AuthStack = {
  Login: undefined;
  SignUp: undefined;
};

export type MainTabs = {
  Home: undefined;
};

export type AuthStackProp = NativeStackNavigationProp<AuthStack>;
export type MainTabsProp = BottomTabNavigationProp<MainTabs>;
