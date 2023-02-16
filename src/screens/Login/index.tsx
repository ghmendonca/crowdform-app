import { Box } from "react-native-design-utility";
import { Pressable } from "react-native";
import Button from "../../components/Button";
import Screen from "../../components/Screen";
import Text from "../../components/Text";
import TextInput from "../../components/TextInput";
import styles from "./styles";
import Form from "../../components/Form";
import { FormFields, rules } from "./types";
import { useComponentState } from "./state";

const Login = () => {
  const { form, navigateToSignUp, submit } = useComponentState();

  return (
    <Screen>
      <Form<FormFields>
        form={form}
        initialValues={{ email: "", password: "" }}
        onFinish={submit}
      >
        <Box paddingHorizontal="md" mt="xl">
          <Box flexDirection="row" justifyContent="center" width="100%" mb="xl">
            <Text bold size="md">
              Login
            </Text>
          </Box>
          <Box>
            <TextInput
              name="email"
              label="E-mail"
              keyboardType="email-address"
              autoCorrect
              autoCapitalize="none"
              field={{
                rules: rules.email,
              }}
            />
          </Box>
          <Box mt="md" mb="xl">
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
          <Button title="Login" onPress={() => form.submit()} />
          <Box
            alignItems="center"
            mt="sm"
            justifyContent="center"
            flexDirection="row"
          >
            <Text color="gray" size={12}>
              Don't have an account?{" "}
            </Text>
            <Pressable style={styles.link} onPress={navigateToSignUp}>
              <Text textDecoration="underline" color="gray" size={12}>
                Sign up
              </Text>
            </Pressable>
            <Text color="gray" size={12}>
              {" "}
              here
            </Text>
          </Box>
        </Box>
      </Form>
    </Screen>
  );
};

export default Login;
