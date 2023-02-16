import { Pressable } from "react-native";
import { Box, Text } from "react-native-design-utility";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import Form from "../../components/Form";
import Screen from "../../components/Screen";
import TextInput from "../../components/TextInput";
import { useComponentState } from "./state";
import styles from "./styles";
import { FormFields, rules } from "./types";

const SignUp = () => {
  const { form, navigateToLogin, submit } = useComponentState();

  return (
    <Screen>
      <Form<FormFields> form={form} onFinish={submit}>
        <Box paddingHorizontal="md" mt="xl">
          <Box flexDirection="row" justifyContent="center" width="100%" mb="xl">
            <Text bold size="md">
              Create your account
            </Text>
          </Box>
          <Box>
            <TextInput
              name="firstName"
              label="First Name"
              autoCorrect
              autoCapitalize="words"
              field={{
                rules: rules.firstName,
              }}
            />
          </Box>
          <Box mt="md">
            <TextInput
              name="lastName"
              label="Last Name"
              autoCorrect
              autoCapitalize="words"
              field={{
                rules: rules.lastName,
              }}
            />
          </Box>
          <Box mt="md">
            <TextInput
              name="email"
              label="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              field={{
                rules: rules.email,
              }}
            />
          </Box>
          <Box mt="md">
            <TextInput
              name="password"
              label="Password"
              placeholder="Minimum 8 characters"
              password
              field={{
                rules: rules.password,
              }}
            />
          </Box>
          <Box mt="md">
            <Checkbox name="terms">
              <Text style={styles.terms}>
                I am over 18 years of age and I have read and agree to the{" "}
                <Text style={[styles.terms, styles.termsLink]}>
                  Terms of Service
                </Text>{" "}
                and{" "}
                <Text style={[styles.terms, styles.termsLink]}>
                  Privacy policy
                </Text>
                .
              </Text>
            </Checkbox>
          </Box>
          <Box mt="xl">
            <Button title="Create account" onPress={() => form.submit()} />
          </Box>
          <Box
            alignItems="center"
            mt="sm"
            justifyContent="center"
            flexDirection="row"
          >
            <Text color="gray" size={12}>
              Already have an account?
            </Text>
            <Pressable onPress={navigateToLogin}>
              <Text textDecoration="underline" size={12}>
                Log in here
              </Text>
            </Pressable>
          </Box>
        </Box>
      </Form>
    </Screen>
  );
};

export default SignUp;
