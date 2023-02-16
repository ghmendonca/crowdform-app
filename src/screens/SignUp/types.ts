import { Rule } from "rc-field-form/es/interface";

export interface FormFields {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  terms: boolean;
}

export const rules: Record<keyof FormFields, Rule[]> = {
  email: [
    {
      required: true,
      type: "email",
    },
  ],
  firstName: [
    {
      required: true,
    },
  ],
  lastName: [
    {
      required: true,
    },
  ],
  password: [
    {
      required: true,
      min: 8,
    },
  ],
  terms: [
    {
      required: true,
    },
  ],
};
