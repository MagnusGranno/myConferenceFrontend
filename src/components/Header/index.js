import React from 'react';

// Routing
import { NavLink, useNavigate } from 'react-router-dom';

// Facade
import { facade } from '../../apiFacade';

// Styles
import { Wrapper, Content, Menu, StyledLogout } from './Header.styles';

function Header({ loggedIn, setLoggedIn, setLoginCredentials }) {
  const navigate = useNavigate();
  const logout = () => {
    facade.logout();
    setLoggedIn(false);
    setLoginCredentials({ username: '', password: '' });
    navigate('/');
  };

  return (
    <Wrapper>
      <Content>
        <h1>Harbour</h1>
        <Menu>
          <NavLink to="/">
            <h5>Home</h5>
          </NavLink>
          {loggedIn && (
            <NavLink to="/information">
              <h5>Information</h5>
            </NavLink>
          )}
          {!loggedIn ? (
            <NavLink to="/login">
              <h5>Login</h5>
            </NavLink>
          ) : (
            <StyledLogout onClick={logout}>
              <h5>Logout</h5>
            </StyledLogout>
          )}
        </Menu>
      </Content>
    </Wrapper>
  );
}

export default Header;
