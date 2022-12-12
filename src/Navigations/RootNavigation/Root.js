import useAuth from '../../hooks/Auth/useAuth/index';
import AuthNavigation from '../Navigate/AuthNavigation';
import AppNavigation from '../Navigate/AppNavigation';

const RootNavigation = () => {
  const userAuth = useAuth();
    return (
      userAuth.user === undefined ? <AuthNavigation /> : <AppNavigation email = {userAuth.user.email}/>
    )
}

export default RootNavigation;
