import { useState, useEffect } from 'react';

// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
import AdminPanel from './components/AdminPanel';

function App() {
  const initialState = {
    username: '',
    password: '',
  };

  const [loggedIn, setLoggedIn] = useState(facade.loggedIn);
  const [loginCredentials, setLoginCredentials] = useState(initialState);
  const [signupCredentials, setSignupCredentials] = useState(initialState);
  const [conferences, setConferences] = useState([]);
  const [talks, setTalks] = useState([]);
  const [speakers, setSpeakers] = useState([]);

  // LOADING IF FETCH TAKES TOO LONG
  // Fetch taking too long?
  const [confLoading, setConfLoading] = useState(true);
  const [speakerloading, setSpeakerLoading] = useState(true);
  const [singleSpeakerloading, setSingleSpeakerLoading] = useState(true);
  const [talkLoading, setTalkLoading] = useState(true);
  const [allTalksLoading, setAllTalksLoading] = useState(true);
  useEffect(() => {
    if (sessionStorage.getItem('username') && facade.loggedIn) {
      setLoggedIn(true);
    }
    // if (facade.isExpired) {
    //   facade.logout();
    //   setLoggedIn(false);
    // }
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
          element={
            <Information
              loggedIn={loggedIn}
              conferences={conferences}
              setConferences={setConferences}
              confLoading={confLoading}
              setConfLoading={setConfLoading}
              speakerloading={speakerloading}
              setSpeakerLoading={setSpeakerLoading}
              singleSpeakerloading={singleSpeakerloading}
              setSingleSpeakerLoading={setSingleSpeakerLoading}
              talkLoading={talkLoading}
              setTalkLoading={setTalkLoading}
              speakers={speakers}
              setSpeakers={setSpeakers}
            />
          }
        />
        <Route
          path="/adminpanel"
          element={
            <AdminPanel
              conferences={conferences}
              setConferences={setConferences}
              talks={talks}
              setTalks={setTalks}
              speakers={speakers}
              setSpeakers={setSpeakers}
              confLoading={confLoading}
              setConfLoading={setConfLoading}
              speakerloading={speakerloading}
              setSpeakerLoading={setSpeakerLoading}
              singleSpeakerloading={singleSpeakerloading}
              setSingleSpeakerLoading={setSingleSpeakerLoading}
              talkLoading={talkLoading}
              setTalkLoading={setTalkLoading}
              allTalksLoading={allTalksLoading}
              setAllTalksLoading={setAllTalksLoading}
              loggedIn={loggedIn}
            />
          }
        />
      </Routes>

      <GlobalStyle />
    </Router>
  );
}

export default App;
