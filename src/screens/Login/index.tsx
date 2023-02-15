import { Box } from "react-native-design-utility";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Button";
import Screen from "../../components/Screen";
import Text from "../../components/Text";
import TextInput from "../../components/TextInput";
import { AuthStackProp } from "../../routes/constants";
import styles from "./styles";

const Login = () => {
  const { navigate } = useNavigation<AuthStackProp>();

  const navigateToSignUp = () => {
    navigate("SignUp");
  };

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
    </Screen>
  );
};

export default Login;
