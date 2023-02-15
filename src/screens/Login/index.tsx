import { Box, Text } from "react-native-design-utility";
import Button from "../../components/Button";
import Screen from "../../components/Screen";
import TextInput from "../../components/TextInput";

const Login = () => {
  return (
    <Screen>
      <Box paddingHorizontal="md" mt={100}>
        <Box>
          <TextInput label="E-mail" />
        </Box>
        <Box marginVertical="md">
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
