import { Route } from './route'

export class Router {
  routes;
  history;
  _currentRoute;
  _rootContainer;
  static __instance;

  constructor(rootQuery) {
    if (Router.__instance) {
      return Router.__instance
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootContainer = document.querySelector(rootQuery);

    Router.__instance = this
  }


  use(pathname, block) {
    const route = new Route(pathname, block, this._rootContainer);

    this.routes.push(route)

    return this
  }

  start () {
    this._currentRoute = this.routes[0]
    // На смену роута вызываем перерисовку
    window.onpopstate = event => {
      this._onRoute(event.currentTarget.location.pathname)
    }

    this._onRoute(window.location.pathname)
  }

  _onRoute (pathname) {
    const route = this.getRoute(pathname)
    if (!route) {
      return
    }
    if (this._currentRoute) {
      this._currentRoute.leave()
      this._currentRoute = route
    }

    route.render(route, pathname)
  }

  go (pathname) {
    this.history.pushState({}, '', pathname)
    this._onRoute(pathname)
  }

  back () {
    this.history.back()
  }

  forward () {
    this.history.forward()
  }

  getRoute (pathname) {
    return this.routes.find(route => route.match(pathname))
  }
}
