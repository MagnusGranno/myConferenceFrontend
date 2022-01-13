import { useState } from 'react';

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
  StyledSuccess,
  StyledLink,
  LinkButton,
  ShowPW,
} from './Signup.styles';

// images
import signupIMG from '../../images/signup.png';

const initialState = {
  username: '',
  password: '',
};

const Signup = ({ setLoginPage, signupCredentials, setSignupCredentials }) => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPw, setShowPw] = useState(false);

  const perfomSignup = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    for (let key in signupCredentials) {
      if (signupCredentials[key] === '') {
        setError(`${key} can't be empty`);
        return;
      }
      if (signupCredentials[key].length < 8) {
        setError(`${key} must be 8 characters or longer`);
        return;
      }
    }
    signup(signupCredentials.username, signupCredentials.password);
  };

  const onChange = (e) => {
    setSignupCredentials({
      ...signupCredentials,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const linkToLogin = () => {
    setSignupCredentials(initialState);
    setLoginPage(true);
  };

  const showPassword = (e) => {
    e.preventDefault();
    setShowPw(!showPw);
  };
  const signup = async (username, password) => {
    const response = await facade.signup(username, password);
    if (response.error === true) {
      setSuccess('');
      setError(response.message);
    }
    if (response.error === false) {
      setError('');
      setSuccess(response.message);
    }
    setSignupCredentials(initialState);
  };

  return (
    <Wrapper>
      <StyledFormWrapper>
        <StyledForm>
          <div className="headline">
            <h1>Signup</h1> <img src={signupIMG} alt="signup" />
          </div>

          <StyledInput
            placeholder="Username"
            id="username"
            onChange={onChange}
            value={signupCredentials.username}
          />
          <StyledInput
            placeholder="Password"
            type={showPw ? 'text' : 'password'}
            id="password"
            value={signupCredentials.password}
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
          {success && (
            <StyledSuccess>
              <p>{success}</p>
            </StyledSuccess>
          )}
          <StyledButton onClick={perfomSignup}>Signup</StyledButton>
          <StyledLink>
            Already have an account?{' '}
            <LinkButton onClick={linkToLogin}>Log in</LinkButton>
          </StyledLink>
        </StyledForm>
      </StyledFormWrapper>
    </Wrapper>
  );
};

export default Signup;
