import React, { useState } from 'react';

// Facade
import { facade } from '../../apiFacade';

// Styles
import {
  Wrapper,
  StyledFormWrapper,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledError,
  StyledLink,
  LinkButton,
  ShowPW,
} from './Login.styles';

// images
import signinIMG from '../../images/signin.png';

// Router
import { useNavigate } from 'react-router-dom';

const initialState = {
  username: '',
  password: '',
};

const Login = ({
  setLoggedIn,
  loginCredentials,
  setLoginCredentials,
  setLoginPage,
}) => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [showPw, setShowPw] = useState(false);

  const perfomLogin = (e) => {
    e.preventDefault();
    setError('');
    for (let key in loginCredentials) {
      if (loginCredentials[key] === '') {
        setError(`${key} skal være udfyldt`);
        return;
      }
    }

    login(loginCredentials.username, loginCredentials.password);
  };

  const onChange = (e) => {
    setLoginCredentials({
      ...loginCredentials,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const linkToSignup = () => {
    setLoginCredentials(initialState);
    setShowPw(false);
    setLoginPage(false);
  };

  const showPassword = (e) => {
    e.preventDefault();
    setShowPw(!showPw);
  };

  const login = async (user, pass) => {
    await facade.login(user, pass).then((res) => {
      setLoggedIn(facade.loggedIn());
      if (facade.loggedIn()) {
        navigate('/');
      } else {
        setError('Invalid username or password');
        setLoginCredentials(initialState);
      }
    });
  };

  return (
    <Wrapper>
      <StyledFormWrapper>
        <StyledForm>
          <div className="headline">
            <h1>Login</h1> <img src={signinIMG} alt="signin" />
          </div>
          <StyledInput
            placeholder="Username"
            id="username"
            onChange={onChange}
            value={loginCredentials.username}
          />
          <StyledInput
            placeholder="Password"
            type={showPw ? 'text' : 'password'}
            id="password"
            value={loginCredentials.password}
            onChange={onChange}
          />
          <ShowPW onClick={showPassword} type="button">
            {showPw ? 'Hide' : 'Show '} password
          </ShowPW>
          {error && (
            <StyledError>
              <p>{error}</p>
            </StyledError>
          )}
          <StyledButton onClick={perfomLogin}>Login</StyledButton>
          <StyledLink>
            Don't have an account?{' '}
            <LinkButton onClick={linkToSignup}>Sign up</LinkButton>
          </StyledLink>
        </StyledForm>
      </StyledFormWrapper>
    </Wrapper>
  );
};

export default Login;
