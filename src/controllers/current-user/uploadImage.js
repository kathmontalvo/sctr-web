import requestUrl from '../../utils/requestUrl';

const uploadImage = (file) => {

  const URL = requestUrl.UPLOAD_IMG;
  const headers = new Headers({});

  const fd = new FormData();
  fd.append('image', file);

  const requestOptions = {
    method: 'GET',
    body: fd,
    headers,
  };

  return fetch(URL, requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
};

export default uploadImage;
