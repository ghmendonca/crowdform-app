import { Rule } from "rc-field-form/es/interface";

export interface FormFields {
  email: string;
  password: string;
}

export const rules: Record<keyof FormFields, Rule[]> = {
  email: [
    {
      required: true,
      type: "email",
    },
  ],
  password: [
    {
      required: true,
      min: 8,
    },
  ],
};
