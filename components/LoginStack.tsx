import LoginScreen from './LoginScreen';
import Tabs from './Tabs';
import { useAuthStore } from '../stores/auth';


export default function LoginStack() {

  const user = useAuthStore((state) => state.user);
    
  return (
    <>
        {
            user !=null ?
            <Tabs />
            :
            <LoginScreen />
        }
    </>
  );
}
