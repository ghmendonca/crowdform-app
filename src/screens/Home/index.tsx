import { View, Text } from "react-native";
import Button from "../../components/Button";
import { logout } from "../../redux/auth/authSlice";
import { useAppDispatch } from "../../redux/hooks";

const Home = () => {
  const dispatch = useAppDispatch();

  return (
    <View>
      <Text>Home</Text>
      <Button title="logout" onPress={() => dispatch(logout())} />
    </View>
  );
};

export default Home;
