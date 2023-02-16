import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";
import { MainTabs } from "../constants";

const Tabs = createBottomTabNavigator<MainTabs>();

const Main = () => {
  return (
    <Tabs.Navigator initialRouteName="Home">
      <Tabs.Screen name="Home" component={Home} />
    </Tabs.Navigator>
  );
};

export default Main;
