import LoginScreen from '../pages/LoginScreen';
import Tabs from './Tabs';
import { useAuthStore } from '../stores/auth';
import PlanningScreen from '../pages/PlanningScreen';


export default function LoginStack() {
  const user = useAuthStore((state) => state.user);

  return (
    <>
      {
        // user !=null ?
        // <Tabs />
        // :
        // <LoginScreen />
        <Tabs />
      }
    </>
  );
}
