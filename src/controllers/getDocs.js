import requestUrl from '../utils/requestUrl';

const getDocs = (docName) => {

  const URL = `${requestUrl.DOCS}/${docName}`;
  const headers = new Headers({});

  const requestOptions = {
    method: 'GET',
    headers,
  };

  return fetch(URL, requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
};

export default getDocs;
