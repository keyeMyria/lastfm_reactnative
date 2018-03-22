import { StackNavigator, SwitchNavigator } from "react-navigation";
import Main from "./Main";
import LoginForm from "./auth/LoginForm";

export default SwitchNavigator(
  {
    App: Main,
    Auth: LoginForm
  },
  {
    initialRouteName: "Auth"
  }
);
