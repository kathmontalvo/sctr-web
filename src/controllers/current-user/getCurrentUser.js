import requestUrl from '../../utils/requestUrl';

const getCurrentUser = (
  token,
) => {

  const URL = requestUrl.CURRENT_USER;
  const headers = new Headers({
    'Accept': 'application/json, text/plain',
    'Authorization': `Bearer ${token}`,
  });

  const requestOptions = {
    method: 'POST',
    headers,
  };

  return fetch(URL, requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
};

export default getCurrentUser;
