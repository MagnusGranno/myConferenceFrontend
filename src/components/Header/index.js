import React from 'react';

// Routing
import { NavLink, useNavigate } from 'react-router-dom';

// Facade
import { facade } from '../../apiFacade';

// image
import globeIMG from '../../images/globe-white.png';
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
        <div className="headerDiv">
          <img src={globeIMG} alt="globe" />
          <h1>MyConference</h1>
        </div>
        <Menu>
          <NavLink to="/">
            <h5>Home</h5>
          </NavLink>
          {loggedIn && (
            <NavLink to="/information">
              <h5>Information</h5>
            </NavLink>
          )}

          <NavLink to="/adminpanel">
            <h5>adminpanel</h5>
          </NavLink>

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
