const cart = Handlebars.compile(`      
  <div class="cart">
    <div class="cart__body">
      <div class="cart__header header">
        <h1>Регистрация</h1>
      </div>
      <form class="auth-form">
        <div class="auth-form__body">
          <input class="custom-input auth-form__item" placeholder="Введите e-mail">
          <input class="custom-input auth-form__item" placeholder="Ввердите пароль" type="password">
          <input class="custom-input auth-form__item" placeholder="Повторите пароль" type="password">
          <div class="auth-form__footer">
            <button class="custom-button">
              Регистрация
            </button>
          </div>
        </div>
      </form>
      <div class="cart__footer">
        <a href="#">Назад</a>
      </div>
    </div>
  </div>
`)

export { cart };
