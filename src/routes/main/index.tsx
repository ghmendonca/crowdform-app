import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabIcon from "../../components/TabIcon";
import Portfolio from "../../screens/Portfolio";
import Trade from "../../screens/Trade";
import Home from "../home";
import { MainTabs } from "../types";

const Tabs = createBottomTabNavigator<MainTabs>();

const MainRouter = () => {
  return (
    <Tabs.Navigator
      initialRouteName="HomeStack"
      screenOptions={({ route }) => ({
        tabBarIcon: (props) => <TabIcon route={route} {...props} />,
      })}
    >
      <Tabs.Screen
        name="HomeStack"
        component={Home}
        options={{ header: () => null }}
      />
      <Tabs.Screen name="Trade" component={Trade} />
      <Tabs.Screen name="Portfolio" component={Portfolio} />
    </Tabs.Navigator>
  );
};

export default MainRouter;
