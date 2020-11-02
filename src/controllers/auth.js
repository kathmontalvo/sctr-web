import requestUrl from '../utils/requestUrl';

const login = (
  username,
  password,
) => {

  const URL = requestUrl.OAUTH;
  const formdata = new FormData();
  formdata.append('grant_type', 'password');
  formdata.append('client_id', '2');
  formdata.append('client_secret', 'XrDnYGDzV8bLe0ZHWv71uKJP4vgYsCuvBQZ5fnpV');
  formdata.append('username', username);
  formdata.append('password', password);

  const requestOptions = {
    method: 'POST',
    body: formdata,
    'Content-type': 'application/json',
  };

  return fetch(URL, requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
};

export default login;
