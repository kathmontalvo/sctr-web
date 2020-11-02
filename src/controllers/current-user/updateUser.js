import requestUrl from '../../utils/requestUrl';
import session from '../session';

const updateUser = (file) => {

  const URL = requestUrl.UPDATE_ACCOUNT;
  const headers = new Headers({
    Authorization: `Bearer ${session.getItem('access_token')}`,
    Accept: 'application/json, text/plain',
  });

  const fd = new FormData();
  fd.append('image', file);

  const requestOptions = {
    method: 'POST',
    body: fd,
    headers,
  };

  return fetch(URL, requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
};

export default updateUser;
