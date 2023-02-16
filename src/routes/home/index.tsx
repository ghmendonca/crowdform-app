import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NotificationButton from "../../components/NotificationButton";
import ProfileButton from "../../components/ProfileButton";
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
          // Here I could get the user data from redux
          // and put some value from the user object
          title: "Account: $1,457.93",
          headerLeft: () => <ProfileButton />,
          headerRight: () => <NotificationButton />,
        }}
      />
      <Stack.Screen name="AssetDetails" component={AssetDetails} />
    </Stack.Navigator>
  );
};

export default HomeRouter;
