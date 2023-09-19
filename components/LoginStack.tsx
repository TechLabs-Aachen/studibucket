import LoginScreen from "../pages/LoginScreen";
import Tabs from "./Tabs";
import { useAuthStore } from "../stores/auth";
import { shallow } from "zustand/shallow";

export default function LoginStack() {
  const user = useAuthStore((state) => state.user, shallow);

  return <>{user != null ? <Tabs /> : <LoginScreen />}</>;
  //  return <Tabs />
}
