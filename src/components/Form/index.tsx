import { FunctionComponent } from "react";
import RcForm, { FormProps } from "rc-field-form";
import { View } from "react-native";

const Form = <T = any,>({ children, ...props }: FormProps<T>) => {
  return (
    <RcForm component={View} {...props}>
      {children}
    </RcForm>
  );
};

export default Form;
