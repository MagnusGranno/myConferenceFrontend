import { useState, useEffect } from 'react';

// Routing
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';

// Components
import Header from './components/Header';
import Home from './components/Home';
import LoginSignup from './components/LoginSignup';

// Styles
import { GlobalStyle } from './GlobalStyle';

// Facade
import { facade } from './apiFacade';
import Information from './components/Information';
import Nomatch from './components/Nomatch';

function App() {
  const initialState = {
    username: '',
    password: '',
  };

  const [loggedIn, setLoggedIn] = useState(facade.loggedIn);
  const [loginCredentials, setLoginCredentials] = useState(initialState);
  const [signupCredentials, setSignupCredentials] = useState(initialState);
  useEffect(() => {
    if (sessionStorage.getItem('username') && facade.loggedIn) {
      setLoggedIn(true);
    }
    if (facade.isExpired) {
      facade.logout();
      setLoggedIn(false);
    }
  }, []);
  return (
    <Router>
      <Header
        loggedIn={loggedIn}
        loginCredentials={loginCredentials}
        setLoginCredentials={setLoginCredentials}
        setLoggedIn={setLoggedIn}
      />
      <Routes>
        <Route path="*" element={<Nomatch />} />
        <Route exact path="/" element={<Home loggedIn={loggedIn} />} />
        <Route
          path="/login"
          element={
            <LoginSignup
              loginCredentials={loginCredentials}
              setLoginCredentials={setLoginCredentials}
              setLoggedIn={setLoggedIn}
              signupCredentials={signupCredentials}
              setSignupCredentials={setSignupCredentials}
            />
          }
        />
        <Route
          path="/information"
          element={<Information loggedIn={loggedIn} />}
        />
      </Routes>

      <GlobalStyle />
    </Router>
  );
}

export default App;
