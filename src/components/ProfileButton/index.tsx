import { Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/auth/authSlice";

const ProfileButton = () => {
  const dispatch = useAppDispatch();

  return (
    <Pressable onPress={() => dispatch(logout())}>
      <Ionicons name="md-person-circle-outline" size={32} />
    </Pressable>
  );
};

export default ProfileButton;
