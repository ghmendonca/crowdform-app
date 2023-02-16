import { useNavigation } from "@react-navigation/native";
import { useForm } from "rc-field-form";
import Toast from "react-native-toast-message";
import { AuthStackProp } from "../../routes/constants";
import { FormFields } from "./types";

export const useComponentState = () => {
  const [form] = useForm<FormFields>();
  const { goBack, navigate } = useNavigation<AuthStackProp>();

  const navigateToLogin = () => goBack();

  const submit = ({}: FormFields) => {
    Toast.show({
      type: "success",
      text1: "Account created successfully",
    });
    navigate("Login");
  };

  return {
    form,
    navigateToLogin,
    submit,
  };
};
