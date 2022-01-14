import { decodeToken } from './Helpers';
import { myUrl } from './settings';

const URL = myUrl;
function handleHtttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }

  return res.json();
}
function apiFacade() {
  const login = (user, password) => {
    const options = makeOptions('POST', true, {
      username: user,
      password: password,
    });

    return fetch(URL + '/api/login', options)
      .then(handleHtttpErrors)
      .then((res) => {
        setToken(res.token);
        sessionStorage.setItem('username', user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signup = async (username, password) => {
    const options = makeOptions('POST', true, {
      username: username,
      password: password,
    });
    try {
      const response = await fetch(URL + '/api/login/signup', options);
      return await response.json();
    } catch (e) {
      console.log(e);
    }
  };

  const fetchConferences = async () => {
    const options = makeOptions('GET', true);
    try {
      const response = await fetch(
        URL + '/api/conference/conferences',
        options
      );
      return response.json();
    } catch (e) {
      console.error(e);
    }
  };

  const fetchTalkById = async (id) => {
    const options = makeOptions('GET', true);
    try {
      const response = await fetch(URL + '/api/conference/talk/' + id, options);
      return response.json();
    } catch (e) {
      console.error(e);
    }
  };

  const fetchTalkBySpeaker = async (id) => {
    const options = makeOptions('GET', true);
    try {
      const response = await fetch(
        URL + '/api/conference/talk/speaker/' + id,
        options
      );
      return response.json();
    } catch (e) {
      console.error(e);
    }
  };
  const fetchAllSpeakers = async () => {
    const options = makeOptions('GET', true);
    try {
      const response = await fetch(URL + '/api/conference/speakers/', options);
      return response.json();
    } catch (e) {
      console.error(e);
    }
  };

  const fetchAllTalks = async () => {
    const options = makeOptions('GET', true);
    try {
      const response = await fetch(URL + '/api/conference/talks/', options);
      return response.json();
    } catch (e) {
      console.error(e);
    }
  };

  const createConference = async (conf) => {
    const options = makeOptions('POST', true, conf);
    try {
      const response = await fetch(
        URL + '/api/conference/create/conference/',
        options
      );
      return response.json();
    } catch (e) {
      console.error(e);
    }
  };

  const createTalk = async (talk) => {
    const options = makeOptions('POST', true, talk);
    try {
      const response = await fetch(
        URL + '/api/conference/create/talk/',
        options
      );
      return response.json();
    } catch (e) {
      console.error(e);
    }
  };

  const createSpeaker = async (speaker) => {
    const options = makeOptions('POST', true, speaker);
    try {
      const response = await fetch(
        URL + '/api/conference/create/speaker/',
        options
      );
      return response.json();
    } catch (e) {
      console.error(e);
    }
  };
  const fetchData = () => {
    const options = makeOptions('GET', true);
    return fetch(URL + `/api/info/user`, options).then(handleHtttpErrors);
  };
  const fetchAny = (someUrl) => {
    const options = makeOptions('GET', true);
    return fetch(URL + someUrl, options).then(handleHtttpErrors);
  };
  const setToken = (token) => {
    sessionStorage.setItem('jwtToken', token);
    const roles = decodeToken(token).roles;
    sessionStorage.setItem('roles', JSON.stringify(roles));
  };

  const isExpired = () => {
    if (sessionStorage.getItem('jwtToken')) {
      const expireTime = decodeToken(sessionStorage.getItem('jwtToken'));

      if (expireTime * 1000 < Date.now) {
        return true;
      } else {
        return false;
      }
    }
  };
  const getToken = () => {
    return sessionStorage.getItem('jwtToken');
  };
  const loggedIn = () => {
    const loggedIn = getToken() !== null;
    return loggedIn;
  };
  const logout = () => {
    sessionStorage.removeItem('jwtToken');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('roles');
  };

  const makeOptions = (method, addToken, body) => {
    let opts = {
      method: method,
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    };
    if (addToken && loggedIn()) {
      opts.headers['x-access-token'] = getToken();
    }
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  };
  return {
    makeOptions,
    setToken,
    getToken,
    loggedIn,
    login,
    signup,
    logout,
    fetchData,
    handleHtttpErrors,
    fetchAny,
    fetchConferences,
    fetchTalkById,
    fetchTalkBySpeaker,
    fetchAllSpeakers,
    isExpired,
    createConference,
    createTalk,
    createSpeaker,
    fetchAllTalks,
  };
}
export const facade = apiFacade();
