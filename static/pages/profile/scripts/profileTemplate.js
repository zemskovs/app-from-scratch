//todo: Сделать тексты по модели

const template = Handlebars.compile(`
  <div class="profile">
  <div class="profile__body">
    <div class="profile__top bottom-indent-xxl">
      <div class="avatar-image profile__avatar-size bottom-indent-sm"></div>
      <div class="profile__user-name">
        <h3>Петр</h3>
      </div>
    </div>

    <div class="user-main-info w-100 bottom-indent-xl">
      <div class="user-main-info__item profile__mail bottom-indent-sm">
        <span>Почта</span>
        <span class="user-main-info__value">mail@pochta.ru</span>
      </div>
      <div class="user-main-info__item profile__user-name">
        <span>Логин</span>
        <span class="user-main-info__value">username</span>
      </div>
    </div>

    <div class="profile__control-links bottom-indent-xl">
      <a href="#">Изменить данные</a>
      <a href="#" class="danger-link">Выйти</a>
    </div>

    <div class="profile__back-link">
      <a href="#">Назад</a>
    </div>
  </div>
  </div>
`);

export { template };
