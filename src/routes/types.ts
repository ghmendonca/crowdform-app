import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { Fund } from "../types/fund";

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
  AssetDetails: {
    id: number;
    fund?: Fund;
  };
};

export type AuthStackProp = NativeStackNavigationProp<AuthStack>;
export type HomeStackProp = NativeStackNavigationProp<HomeStack>;
export type MainTabsProp = BottomTabNavigationProp<MainTabs>;
