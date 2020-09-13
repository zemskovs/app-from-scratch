define("api/transport", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HTTPTransport = void 0;
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
        constructor() {
            this.get = (url, options = {}) => {
                const reqUrl = options.data ? url + queryStringify(options.data) : url;
                return this.request(reqUrl, Object.assign(Object.assign({}, options), { method: METHODS.GET }), options.timeout);
            };
            this.put = (url, options = {}) => {
                return this.request(url, Object.assign(Object.assign({}, options), { method: METHODS.PUT }), options.timeout);
            };
            this.post = (url, options = {}) => {
                return this.request(url, Object.assign(Object.assign({}, options), { method: METHODS.POST }), options.timeout);
            };
            this.delete = (url, options = {}) => {
                return this.request(url, Object.assign(Object.assign({}, options), { method: METHODS.DELETE }), options.timeout);
            };
            // options:
            // headers — obj
            // data — obj
            this.request = (url, options, timeout = 5000) => {
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
                    }
                    else {
                        xhr.send(data);
                    }
                });
            };
        }
    }
    exports.HTTPTransport = HTTPTransport;
});
define("index", ["require", "exports", "api/transport"], function (require, exports, transport_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const http = new transport_1.HTTPTransport();
    console.log(http);
});
define("model/model", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Model = void 0;
    class Model {
        constructor({ render, component, container, initState }) {
            this.state = {};
            this.renderElement = () => {
                this.render(this.component(), this.container);
            };
            this.setState = (newState) => {
                this.state = newState;
                this.renderElement();
            };
            this.useState = () => [this.state, this.setState];
            this.render = render;
            this.component = component;
            this.container = container;
            this.state = initState;
        }
    }
    exports.Model = Model;
});
//# sourceMappingURL=index.js.map