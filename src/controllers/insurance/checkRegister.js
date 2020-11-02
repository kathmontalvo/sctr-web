import requestUrl from '../../utils/requestUrl';
import session from '../session';

const checkRegister = (userType, users, insurance, plant, body, type) => {

  let BASE_URL;
  if (userType === 1) {
    BASE_URL = requestUrl.PLANT_INSURANCES;
  } else if (userType === 2) {
    BASE_URL = requestUrl.USER_INSURANCES;
  }

  const fd = new FormData();
  fd.append('users', JSON.stringify(users));
  fd.append('insurence', insurance);
  fd.append('plant', plant);
  fd.append('body', body);
  fd.append('type', type);

  const headers = new Headers({
    Authorization: `Bearer ${session.getItem('access_token')}`,
    Accept: 'application/json, text/plain',
  });

  const requestOptions = {
    method: 'POST',
    body: fd,
    headers,
  };

  return fetch(BASE_URL, requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
};

export default checkRegister;
