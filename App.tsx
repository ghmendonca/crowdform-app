import { Provider } from "react-redux";
import AppRoot from "./src/components/AppRoot";
import store from "./src/redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <AppRoot />
    </Provider>
  );
};

export default App;
