const cart = Handlebars.compile(`
  <div class="cart">
    <div class="cart__body">
      <div class="cart__header header">
        <h1>Вход</h1>
      </div>
      <form class="auth-form">
        <div class="auth-form__body">
          <input class="custom-input auth-form__item" placeholder="Введите e-mail">
          <input class="custom-input auth-form__item" placeholder="Ввердите пароль">
          <div class="auth-form__footer">
            <button class="custom-button">
              Войти
            </button>
          </div>
        </div>
      </form>
      <div class="cart__footer">
        <a href="#">Регистрация</a>
      </div>
    </div>
  </div>
`);
// execute the compiled template and print the output to the console
export { cart };
