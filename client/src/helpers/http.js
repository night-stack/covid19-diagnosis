const httpRequest = async (method, url, data = {}, headers = {}) => {
  const response = await fetch(url, {
    method,
    headers,
    body: data,
  });

  // eslint-disable-next-line no-return-await
  return await response.json();
};

export const postData = (url, data, headers = {}) => httpRequest('POST', url, data, headers);
export const putData = (url, data, headers = {}) => httpRequest('PUT', url, data, headers);
export const deleteData = (url, data = {}, headers = {}) => httpRequest('DELETE', url, data, headers);
