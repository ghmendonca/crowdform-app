import { Box } from "react-native-design-utility";
import Button from "../../components/Button";
import Screen from "../../components/Screen";
import Text from "../../components/Text";
import TextInput from "../../components/TextInput";

const Login = () => {
  return (
    <Screen>
      <Box paddingHorizontal="md" mt="xl">
        <Box flexDirection="row" justifyContent="center" width="100%" mb="xl">
          <Text bold size="md">
            Login
          </Text>
        </Box>
        <Box>
          <TextInput label="E-mail" keyboardType="email-address" autoCorrect />
        </Box>
        <Box mt="md" mb="xl">
          <TextInput
            label="Password"
            placeholder="Minimum 8 characters"
            password
          />
        </Box>
        <Button title="Login" />
      </Box>
    </Screen>
  );
};

export default Login;
