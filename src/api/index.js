import fetch from 'whatwg-fetch';
import cookie from 'js-cookie';

export const ACCESS_TOKEN = 'access-token';
const baseUrl = process.env.BASE_URL || 'http://localhost:3600';

function getHeaders() {
  const headers = {
    'Content-Type': 'application/json',
  };
  const currentAccessToken = cookie.get(ACCESS_TOKEN);

  if (currentAccessToken) {
    headers[ACCESS_TOKEN] = currentAccessToken;
  }

  return headers;
}

export function fetchData(url, type = 'GET', body) {
  return fetch(url, {
    method: type,
    headers: getHeaders(),
    body: body ? JSON.stringify(body) : undefined,
  })
    .then((response) => {
      if (response.status === 401) {
        cookie.remove(ACCESS_TOKEN);
        if (window) {
          window.location.href = '/login';
        }
        throw new Error(response);
      }
      return response;
    });
}

function makeUrl(path = '') {
  return `${baseUrl}${path}`;
}

export function get(path) {
  const url = makeUrl(path);

  return fetchData(url).then(res => res.json());
}

export function post(path, body = {}) {
  const url = makeUrl(path);

  return fetchData(url, 'POST', body);
}

export function del(path) {
  const url = makeUrl(path);

  return fetchData(url, 'DELETE');
}

export function put(path, body = {}) {
  const url = makeUrl(path);

  return fetchData(url, 'PUT', body);
}
