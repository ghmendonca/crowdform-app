import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export type AuthStack = {
  Login: undefined;
  SignUp: undefined;
};

export type MainTabs = {
  HomeStack: undefined;
  Trade: undefined;
  Portfolio: undefined;
};

export type HomeStack = {
  Home: undefined;
  AssetDetails: undefined;
};

export type AuthStackProp = NativeStackNavigationProp<AuthStack>;
export type HomeStackProp = NativeStackNavigationProp<HomeStack>;
export type MainTabsProp = BottomTabNavigationProp<MainTabs>;
