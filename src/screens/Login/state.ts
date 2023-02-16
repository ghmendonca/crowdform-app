import { useNavigation } from "@react-navigation/native";
import { useForm } from "rc-field-form";
import { authenticate } from "../../redux/auth/authSlice";
import { useAppDispatch } from "../../redux/hooks";
import { AuthStackProp } from "../../routes/constants";
import { FormFields } from "./types";

export const useComponentState = () => {
  const [form] = useForm<FormFields>();
  const { navigate } = useNavigation<AuthStackProp>();
  const dispatch = useAppDispatch();

  const navigateToSignUp = () => {
    navigate("SignUp");
  };

  const submit = ({ email, password }: FormFields) => {
    dispatch(authenticate({ email, password }));
  };

  return {
    form,
    navigateToSignUp,
    submit,
  };
};
