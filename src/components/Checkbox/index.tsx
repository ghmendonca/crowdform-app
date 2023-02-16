import { FunctionComponent } from "react";
import CheckBox from "expo-checkbox";
import { Field } from "rc-field-form";
import { Box } from "react-native-design-utility";
import { CheckboxProps } from "./types";

const Checkbox: FunctionComponent<CheckboxProps> = ({
  name,
  field,
  children,
  ...props
}) => {
  return (
    <Field
      name={name}
      trigger="onValueChange"
      getValueFromEvent={(value) => value}
      {...field}
    >
      {(control) => {
        return (
          <Box flexDirection="row" width="100%">
            <Box mr="xs">
              <CheckBox
                {...props}
                {...control}
                color={control.value ? "#A0A0A0" : "#E6E6E6"}
              />
            </Box>
            {children}
          </Box>
        );
      }}
    </Field>
  );
};

export default Checkbox;
