// loginButton

const cart = Handlebars.compile(`
  <div class="cart">
    <div class="cart__body">
      <div class="cart__header header">
        <h1>Вход</h1>
      </div>
      <form class="auth-form">
        <div class="auth-form__body">
          <input class="custom-input auth-form__item emailSelector" placeholder="Введите e-mail" type="email">
          <input class="custom-input auth-form__item passwordSelector" placeholder="Ввердите пароль" type="password">
          <div class="auth-form__footer">
            {{{loginButton}}}
          </div>
        </div>
      </form>
      <div class="cart__footer">
        <a href="./registration.html">Регистрация</a>
      </div>
    </div>
  </div>
`);
// execute the compiled template and print the output to the console
export { cart };
