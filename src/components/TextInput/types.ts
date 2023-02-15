import { TextInputProps as NativeInputProps } from "react-native";
import { FieldProps } from "rc-field-form/es/Field";

export interface TextInputProps extends NativeInputProps {
  field?: FieldProps;
  label: string;
  password?: boolean;
  error?: boolean;
  name: string;
}
