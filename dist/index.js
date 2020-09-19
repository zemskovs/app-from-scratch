define("modules/utils/mydash/util", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isEqual = exports.setValue = exports.first = exports.last = void 0;
    // Array
    function last(list) {
        return list[list.length > 0 ? list.length - 1 : 0];
    }
    exports.last = last;
    function first(list) {
        return Array.isArray(list) ? list[0] : undefined;
    }
    exports.first = first;
    function setValue(object, path, value) {
        const keys = path.split('.'), last = keys.pop();
        keys.reduce(function (o, k) { return o[k] = o[k] || {}; }, object)[last] = value;
    }
    exports.setValue = setValue;
    function isEqual(one, two) {
        return JSON.stringify(one) === JSON.stringify(two);
    }
    exports.isEqual = isEqual;
});
define("modules/templateEngine/vdom", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.render = exports.createElement = void 0;
    function createElement(type, props, ...children) {
        return {
            type,
            props: Object.assign(Object.assign({}, props), { children: children.map((child) => typeof child === 'object'
                    ? child
                    : typeof child === 'string'
                        ? createTextElement(child)
                        : createElement(child)) }),
        };
    }
    exports.createElement = createElement;
    const TextElement = 'TEXT_ELEMENT';
    function createTextElement(text) {
        return {
            type: TextElement,
            props: {
                nodeValue: text,
                children: [],
            },
        };
    }
    function createDom(fiber) {
        const dom = fiber.type == 'TEXT_ELEMENT'
            ? document.createTextNode('')
            : document.createElement(fiber.type);
        updateDom(dom, {}, fiber.props);
        return dom;
    }
    const isEvent = (key) => key.startsWith('on');
    const isProperty = (key) => key !== 'children' && !isEvent(key);
    const isNew = (prev, next) => (key) => prev[key] !== next[key];
    const isGone = (prev, next) => (key) => !(key in next);
    function updateDom(dom, prevProps, nextProps) {
        Object.keys(prevProps)
            .filter(isEvent)
            .filter((key) => !(key in nextProps) || isNew(prevProps, nextProps)(key))
            .forEach((name) => {
            const eventType = name.toLowerCase().substring(2);
            dom.removeEventListener(eventType, prevProps[name]);
        });
        Object.keys(prevProps)
            .filter(isProperty)
            .filter(isGone(prevProps, nextProps))
            .forEach((name) => {
            dom[name] = '';
        });
        Object.keys(nextProps)
            .filter(isProperty)
            .filter(isNew(prevProps, nextProps))
            .forEach((name) => {
            dom[name] = nextProps[name];
        });
        Object.keys(nextProps)
            .filter(isEvent)
            .filter(isNew(prevProps, nextProps))
            .forEach((name) => {
            const eventType = name.toLowerCase().substring(2);
            dom.addEventListener(eventType, nextProps[name]);
        });
    }
    function commitRoot() {
        deletions.forEach(commitWork);
        commitWork(wipRoot.child);
        currentRoot = wipRoot;
        wipRoot = null;
    }
    function commitWork(fiber) {
        if (!fiber) {
            return;
        }
        const domParent = fiber.parent.dom;
        if (fiber.effectTag === 'PLACEMENT' && fiber.dom != null) {
            domParent.appendChild(fiber.dom);
        }
        else if (fiber.effectTag === 'UPDATE' && fiber.dom != null) {
            updateDom(fiber.dom, fiber.alternate.props, fiber.props);
        }
        else if (fiber.effectTag === 'DELETION') {
            domParent.removeChild(fiber.dom);
        }
        commitWork(fiber.child);
        commitWork(fiber.sibling);
    }
    function render(element, container) {
        wipRoot = {
            dom: container,
            props: {
                children: [element],
            },
            alternate: currentRoot,
        };
        deletions = [];
        nextUnitOfWork = wipRoot;
    }
    exports.render = render;
    let nextUnitOfWork = null;
    let currentRoot = null;
    let wipRoot = null;
    let deletions = null;
    function workLoop(deadline) {
        let shouldYield = false;
        while (nextUnitOfWork && !shouldYield) {
            nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
            shouldYield = deadline.timeRemaining() < 1;
        }
        if (!nextUnitOfWork && wipRoot) {
            commitRoot();
        }
        requestIdleCallback(workLoop);
    }
    requestIdleCallback(workLoop);
    function performUnitOfWork(fiber) {
        if (!fiber.dom) {
            fiber.dom = createDom(fiber);
        }
        const elements = fiber.props.children;
        reconcileChildren(fiber, elements);
        if (fiber.child) {
            return fiber.child;
        }
        let nextFiber = fiber;
        while (nextFiber) {
            if (nextFiber.sibling) {
                return nextFiber.sibling;
            }
            nextFiber = nextFiber.parent;
        }
    }
    function reconcileChildren(wipFiber, elements) {
        let index = 0;
        let oldFiber = wipFiber.alternate && wipFiber.alternate.child;
        let prevSibling = null;
        while (index < elements.length || oldFiber != null) {
            const element = elements[index];
            let newFiber = null;
            const sameType = oldFiber && element && element.type == oldFiber.type;
            if (sameType) {
                newFiber = {
                    type: oldFiber.type,
                    props: element.props,
                    dom: oldFiber.dom,
                    parent: wipFiber,
                    alternate: oldFiber,
                    effectTag: 'UPDATE',
                };
            }
            if (element && !sameType) {
                newFiber = {
                    type: element.type,
                    props: element.props,
                    dom: null,
                    parent: wipFiber,
                    alternate: null,
                    effectTag: 'PLACEMENT',
                };
            }
            if (oldFiber && !sameType) {
                oldFiber.effectTag = 'DELETION';
                deletions.push(oldFiber);
            }
            if (oldFiber) {
                oldFiber = oldFiber.sibling;
            }
            if (index === 0) {
                wipFiber.child = newFiber;
            }
            else if (element) {
                prevSibling.sibling = newFiber;
            }
            prevSibling = newFiber;
            index++;
        }
    }
});
define("modules/templateEngine/index", ["require", "exports", "modules/templateEngine/vdom"], function (require, exports, vdom_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.render = exports.h = void 0;
    Object.defineProperty(exports, "render", { enumerable: true, get: function () { return vdom_1.render; } });
    exports.h = vdom_1.createElement;
});
define("modules/router/route", ["require", "exports", "modules/utils/mydash/util"], function (require, exports, util_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Route = void 0;
    class Route {
        constructor(pathname, view, props) {
            this._pathname = pathname;
            this._blockClass = view;
            this._block = null;
            this._props = props;
        }
        navigate(pathname) {
            if (this.match(pathname)) {
                this._pathname = pathname;
                this.render();
            }
        }
        leave() {
            if (this._block) {
                this._block.hide();
            }
        }
        match(pathname) {
            return util_1.isEqual(pathname, this._pathname);
        }
        render() {
            if (!this._block) {
                this._block = new this._blockClass();
                return;
            }
            this._block.show();
        }
    }
    exports.Route = Route;
});
define("modules/router/router", ["require", "exports", "modules/router/route"], function (require, exports, route_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Router = void 0;
    class Router {
        constructor(rootQuery) {
            if (Router.__instance) {
                return Router.__instance;
            }
            this.routes = [];
            this.history = window.history;
            this._currentRoute = null;
            this._rootQuery = rootQuery;
            Router.__instance = this;
        }
        use(pathname, block) {
            const route = new route_1.Route(pathname, block, { rootQuery: this._rootQuery });
            this.routes.push(route);
            return this;
        }
        start() {
            this._currentRoute = this.routes[0];
            // На смену роута вызываем перерисовку
            window.onpopstate = (event) => {
                this._onRoute(event.currentTarget.location.pathname);
            };
            this._onRoute(window.location.pathname);
        }
        _onRoute(pathname) {
            const route = this.getRoute(pathname);
            if (!route) {
                return;
            }
            if (this._currentRoute) {
                this._currentRoute.leave();
                this._currentRoute = route;
            }
            route.render(route, pathname);
        }
        go(pathname) {
            this.history.pushState({}, '', pathname);
            this._onRoute(pathname);
        }
        back() {
            this.history.back();
        }
        forward() {
            this.history.forward();
        }
        getRoute(pathname) {
            return this.routes.find((route) => route.match(pathname));
        }
    }
    exports.Router = Router;
});
define("modules/eventBus", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EventBus = void 0;
    class EventBus {
        constructor() {
            this.listeners = {};
        }
        on(event, callback) {
            if (!this.listeners[event]) {
                this.listeners[event] = [];
            }
            this.listeners[event].push(callback);
        }
        off(event, callback) {
            if (!this.listeners[event]) {
                throw new Error(`Нет события: ${event}`);
            }
            const idx = this.listeners[event].indexOf(callback);
            if (idx > -1) {
                this.listeners[event].splice(idx, 1);
            }
        }
        emit(event, ...args) {
            if (!this.listeners[event]) {
                throw new Error(`Нет события: ${event}`);
            }
            this.listeners[event].forEach(function (listener) {
                listener.apply(null, args);
            });
        }
    }
    exports.EventBus = EventBus;
});
define("modules/block/block", ["require", "exports", "modules/eventBus", "modules/templateEngine/index"], function (require, exports, eventBus_1, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Block = void 0;
    class Block {
        /** JSDoc
         * @param {string} tagName
         * @param {Object} props
         *
         * @returns {void}
         */
        constructor(tagName = "div", props = {}) {
            this._element = null;
            this._meta = null;
            this.setProps = (nextProps) => {
                if (!nextProps) {
                    return;
                }
                Object.assign(this.props, nextProps);
            };
            const eventBus = new eventBus_1.EventBus();
            this._meta = {
                tagName,
                props
            };
            this.props = this._makePropsProxy(props);
            this.eventBus = () => eventBus;
            this._registerEvents(eventBus);
            eventBus.emit(Block.EVENTS.INIT);
        }
        _registerEvents(eventBus) {
            eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
            eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
            eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
            eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        }
        _createResources() {
            const { tagName } = this._meta;
            this._element = this._createDocumentElement(tagName);
        }
        init() {
            this._createResources();
            this.eventBus().emit(Block.EVENTS.FLOW_CDM);
        }
        _componentDidMount() {
            this.componentDidMount();
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        }
        // Может переопределять пользователь, необязательно трогать
        componentDidMount(oldProps) { }
        _componentDidUpdate(oldProps, newProps) {
            const isRerender = this.componentDidUpdate(oldProps, newProps);
            if (isRerender) {
                this.eventBus().emit(Block.EVENTS.FLOW_RENDER, newProps);
            }
        }
        // Может переопределять пользователь, необязательно трогать
        componentDidUpdate(oldProps, newProps) {
            return oldProps === newProps;
        }
        get element() {
            return this._element;
        }
        _render() {
            const block = this.render();
            // todo: Передавать откуда то
            const element = document.querySelector(".root");
            // render(block, this._element)
            index_1.render(block, element);
        }
        // Может переопределять пользователь, необязательно трогать
        render() { }
        getContent() {
            return this.element;
        }
        _makePropsProxy(props) {
            // Можно и так передать this
            // Такой способ больше не применяется с приходом ES6+
            const self = this;
            const proxyData = new Proxy(props, {
                set(target, property, value) {
                    target[property] = value;
                    self.eventBus().emit(Block.EVENTS.FLOW_CDU);
                    return true;
                },
                deleteProperty() {
                    throw new Error("Отказано в доступе");
                }
            });
            return proxyData;
        }
        _createDocumentElement(tagName) {
            // Можно сделать метод, который через фрагменты в цикле создает сразу несколько блоков
            return document.createElement(tagName);
        }
        show() {
            this.getContent().style.display = "block";
        }
        hide() {
            this.getContent().style.display = "none";
        }
    }
    exports.Block = Block;
    Block.EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_RENDER: "flow:render",
        FLOW_CDU: "flow:component-did-update"
    };
});
define("pages/chatList/ChatList", ["require", "exports", "modules/block/block", "modules/templateEngine/index"], function (require, exports, block_1, index_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ChatList = void 0;
    class ChatList extends block_1.Block {
        constructor(props = {}) {
            super('root', props);
        }
        render() {
            return index_2.h('div', { className: 'chat-list' }, index_2.h('div', { className: 'chat-list__top' }, index_2.h('div', { className: 'chat-list__header' }, index_2.h('div', { className: 'menu-icon' }, index_2.h('div', { className: 'menu-icon__line' }), index_2.h('div', { className: 'menu-icon__line' }), index_2.h('div', { className: 'menu-icon__line menu-icon__line-last' })), index_2.h('div', { className: 'search' }, index_2.h('input', { className: 'search__input', placeholder: 'Поиск' })))), index_2.h('div', { className: 'chat-list_list' }));
        }
    }
    exports.ChatList = ChatList;
});
define("index", ["require", "exports", "modules/router/router", "pages/chatList/ChatList"], function (require, exports, router_1, ChatList_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const router = new router_1.Router('.app');
    router.use('/', ChatList_1.ChatList).start();
});
