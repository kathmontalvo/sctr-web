import requestUrl from '../../utils/requestUrl';
import session from '../session';

const setComments = (userType, registerId, body) => {

  let BASE_URL;
  if (userType === 1) {
    BASE_URL = requestUrl.PLANT_INSURANCES;
  } else if (userType === 2) {
    BASE_URL = requestUrl.USER_INSURANCES;
  }

  const headers = new Headers({
    Authorization: `Bearer ${session.getItem('access_token')}`,
    Accept: 'application/json, text/plain',
  });

  const requestOptions = {
    method: 'GET',
    headers,
  };

  return fetch(BASE_URL, requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
};

export default setComments;
