import { useNavigation } from "@react-navigation/native";
import { useForm } from "rc-field-form";
import { AuthStackProp } from "../../routes/constants";
import { FormFields } from "./types";

export const useComponentState = () => {
  const [form] = useForm<FormFields>();
  const { navigate } = useNavigation<AuthStackProp>();

  const navigateToSignUp = () => {
    navigate("SignUp");
  };

  const submit = ({ email, password }: FormFields) => {};

  return {
    form,
    navigateToSignUp,
    submit,
  };
};
