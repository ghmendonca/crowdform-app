import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeHeader from "../../components/HomeHeader";
import AssetDetails from "../../screens/AssetDetails";
import Home from "../../screens/Home";
import { HomeStack } from "../types";

const Stack = createNativeStackNavigator<HomeStack>();

const HomeRouter = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: (props) => <HomeHeader {...props} />,
        }}
      />
      <Stack.Screen name="AssetDetails" component={AssetDetails} />
    </Stack.Navigator>
  );
};

export default HomeRouter;
