import { TextInputProps as NativeInputProps } from "react-native";

export interface TextInputProps extends NativeInputProps {
  label: string;
  password?: boolean;
}
