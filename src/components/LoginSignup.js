import { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

const LoginSignup = ({
  loginCredentials,
  setLoginCredentials,
  setLoggedIn,
  signupCredentials,
  setSignupCredentials,
}) => {
  const [loginPage, setLoginPage] = useState(true);

  return (
    <>
      {loginPage ? (
        <Login
          setLoginPage={setLoginPage}
          loginCredentials={loginCredentials}
          setLoginCredentials={setLoginCredentials}
          setLoggedIn={setLoggedIn}
        />
      ) : (
        <Signup
          setLoginPage={setLoginPage}
          signupCredentials={signupCredentials}
          setSignupCredentials={setSignupCredentials}
        />
      )}
    </>
  );
};

export default LoginSignup;
