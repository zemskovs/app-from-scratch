const METHODS = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

/**
 * Функцию реализовывать здесь необязательно, но может помочь не плодить логику у GET-метода
 * На входе: объект. Пример: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
 * На выходе: строка. Пример: ?a=1&b=2&c=[object Object]&k=1,2,3
 */
function queryStringify(data) {
  return Object.keys(data).reduce((acc, key, idx, arr) => {
    acc = acc + key + '=' + data[key];
    if (idx !== arr.length - 1) {
      acc = acc + '&';
    }
    return acc;
  }, '?');
}

class HTTPTransport {
  get = (url, options = {}) => {
    const reqUrl = options.data ? url + queryStringify(options.data) : url;
    return this.request(
      reqUrl,
      { ...options, method: METHODS.GET },
      options.timeout,
    );
  };

  put = (url, options = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.PUT },
      options.timeout,
    );
  };

  post = (url, options = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.POST },
      options.timeout,
    );
  };

  delete = (url, options = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.DELETE },
      options.timeout,
    );
  };

  // options:
  // headers — obj
  // data — obj
  request = (url, options, timeout = 5000) => {
    const { method, data } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}
