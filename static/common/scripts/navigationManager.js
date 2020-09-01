class NavigationManager {
  origin = window.location.origin;

  rootPath = this.origin + '/static/pages';

  navigate(url) {
    window.location.assign(`${this.rootPath}${url}`);
  }

  toRegistration() {
    this.navigate('/auth/registration.html')
  }
}

export const nav = new NavigationManager();
