export function apiRequest({ url, method = 'GET', data = null, headers = {} }) {
  const config = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers
    }
  };

  if (data && method !== 'GET') {
    config.body = JSON.stringify(data);
  }

  return fetch(url, config).then(async res => {
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`API ${res.status}: ${text}`);
    }

    const type = res.headers.get('content-type');
    return type && type.includes('application/json')
      ? res.json()
      : res.text();
  });
}
