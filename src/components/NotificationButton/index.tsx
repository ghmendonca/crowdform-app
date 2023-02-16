import { Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const NotificationButton = () => {
  return (
    <Pressable>
      <Ionicons name="md-notifications-outline" size={32} />
    </Pressable>
  );
};

export default NotificationButton;
