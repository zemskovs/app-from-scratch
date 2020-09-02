const cart = Handlebars.compile(`      
  <div class="cart">
    <div class="cart__body">
      <div class="cart__header header">
        <h1>Регистрация</h1>
      </div>
      <form class="auth-form">
        <div class="auth-form__body">
          <input class="custom-input auth-form__item emailSelector" placeholder="Введите e-mail" type="email">
          <input class="custom-input auth-form__item passwordSelector" placeholder="Ввердите пароль" type="password">
          <input class="custom-input auth-form__item repeatPasswordSelector" placeholder="Повторите пароль" type="password">
          <div class="auth-form__footer">
            {{{loginButton}}}
          </div>
        </div>
      </form>
      <div class="cart__footer">
        <a href="./index.html">Назад</a>
      </div>
    </div>
  </div>
`)

export { cart };
