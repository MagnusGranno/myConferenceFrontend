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

    const response = await fetch(URL + '/api/login/signup', options);
    return await response.json();
  };

  const fetchConferences = async () => {
    const options = makeOptions('GET', true);
    const response = await fetch(URL + '/api/conference/conferences', options);
    return response.json();
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

    const jwtData = token.split('.')[1];
    const decodedJwtJsonData = window.atob(jwtData);
    const decodedJwtData = JSON.parse(decodedJwtJsonData);

    const roles = decodedJwtData.roles;
    sessionStorage.setItem('roles', JSON.stringify(roles));
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
  };
}
export const facade = apiFacade();
