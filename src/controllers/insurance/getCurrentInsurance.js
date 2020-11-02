import requestUrl from '../../utils/requestUrl';
import session from '../session';

const getCurrentInsurance = (userType, insuranceId) => {

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
    method: 'POST',
    body: { insuranceId },
    headers,
  };

  return fetch(BASE_URL, requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
};

export default getCurrentInsurance;
