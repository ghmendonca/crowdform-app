import { CheckboxProps as NativeCheckboxProps } from "expo-checkbox";
import { FieldProps } from "rc-field-form/es/Field";
import { ReactNode } from "react";

export interface CheckboxProps extends NativeCheckboxProps {
  name: string;
  children: ReactNode;
  field?: FieldProps;
}
