import { Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const ProfileButton = () => {
  return (
    <Pressable>
      <Ionicons name="md-person-circle-outline" size={32} />
    </Pressable>
  );
};

export default ProfileButton;
