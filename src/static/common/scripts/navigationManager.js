class NavigationManager {
  origin = window.location.origin;

  rootPath = this.origin + '/static/pages';

  navigate(url) {
    window.location.href = `${this.rootPath}${url}`;
  }

  toRegistration() {
    this.navigate('/auth/registration.html');
  }

  toChatList() {
    this.navigate('/chatList/index.html');
  }
}

export const nav = new NavigationManager();
