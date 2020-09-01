//todo: Сделать чаты по модели

const template = Handlebars.compile(`
  <div class="chat-list">
  <div class="chat-list__top">
    <div class="chat-list__header">
      <div class="chat-list__menu">
        <div class="menu-icon">
          <div class="menu-icon__line"></div>
          <div class="menu-icon__line"></div>
          <div class="menu-icon__line menu-icon__line-last"></div>
        </div>
      </div>
      <div class="search">
        <input type="text" class="search__input" placeholder="Поиск">
      </div>
    </div>
  </div>
  <div class="chat-list_list">
      <div class="chat-list__item">
        <div class="chat-preview">
          <div class="user">
            <div class="user__img">
              <div class="avatar-image avatar-image__preview-size"></div>
            </div>
            <div class="user__description">
              <h4>Виктор</h4>
              <p class="user__caption">
                <span class="chat-preview__sender">Вы:</span>Привет, друг
              </p>
            </div>
          </div>
          <div class="chat-preview__right">
            <span class="chat-preview__caption">10:49</span>
          </div>
        </div>
      </div>

      <div class="chat-list__item">
        <div class="chat-preview">
          <div class="user">
            <div class="user__img">
              <div class="avatar-image avatar-image__preview-size"></div>
            </div>
            <div class="user__description">
              <h4>Андрей</h4>
              <p class="user__caption">Изображение</p>
            </div>
          </div>
          <div class="chat-preview__right">
            <span class="chat-preview__caption">10:49</span>
            <div class="badge">
              <span>2</span>
            </div>
          </div>
        </div>
      </div>

      <div class="chat-list__item">
        <div class="chat-preview">
          <div class="user">
            <div class="user__img">
              <div class="avatar-image avatar-image__preview-size"></div>
            </div>
            <div class="user__description">
              <h4>Толя</h4>
              <p class="user__caption">
                Давно пора было собраться
              </p>
            </div>
          </div>
          <div class="chat-preview__right">
            <span class="chat-preview__caption">10:49</span>
            <div class="badge">
              <span>2</span>
            </div>
          </div>
        </div>
      </div>

      <div class="chat-list__item">
        <div class="chat-preview">
          <div class="user">
            <div class="user__img">
              <div class="avatar-image avatar-image__preview-size"></div>
            </div>
            <div class="user__description">
              <h4>1, 2, 3</h4>
              <p class="user__caption">Изображение</p>
            </div>
          </div>
          <div class="chat-preview__right">
            <span class="chat-preview__caption">10:49</span>
            <div class="badge">
              <span>2</span>
            </div>
          </div>
        </div>
      </div>

      <div class="chat-list__item">
        <div class="chat-preview">
          <div class="user">
            <div class="user__img">
              <div class="avatar-image avatar-image__preview-size"></div>
            </div>
            <div class="user__description">
              <h4>Андрей</h4>
              <p class="user__caption">Изображение</p>
            </div>
          </div>
          <div class="chat-preview__right">
            <span class="chat-preview__caption">10:49</span>
            <div class="badge">
              <span>2</span>
            </div>
          </div>
        </div>
      </div>

      <div class="chat-list__item">
        <div class="chat-preview">
          <div class="user">
            <div class="user__img">
              <div class="avatar-image avatar-image__preview-size"></div>
            </div>
            <div class="user__description">
              <h4>Андрей</h4>
              <p class="user__caption">Изображение</p>
            </div>
          </div>
          <div class="chat-preview__right">
            <span class="chat-preview__caption">Пн</span>
            <div class="badge">
              <span>2</span>
            </div>
          </div>
        </div>
      </div>

      <div class="chat-list__item">
        <div class="chat-preview">
          <div class="user">
            <div class="user__img">
              <div class="avatar-image avatar-image__preview-size"></div>
            </div>
            <div class="user__description">
              <h4>Андрей</h4>
              <p class="user__caption">Изображение</p>
            </div>
          </div>
          <div class="chat-preview__right">
            <span class="chat-preview__caption">10:49</span>
            <div class="badge">
              <span>2</span>
            </div>
          </div>
        </div>
      </div>

      <div class="chat-list__item">
        <div class="chat-preview">
          <div class="user">
            <div class="user__img">
              <div class="avatar-image avatar-image__preview-size"></div>
            </div>
            <div class="user__description">
              <h4>Андрей</h4>
              <p class="user__caption">Изображение</p>
            </div>
          </div>
          <div class="chat-preview__right">
            <span class="chat-preview__caption">10:49</span>
            <div class="badge">
              <span>2</span>
            </div>
          </div>
        </div>
      </div>

      <div class="chat-list__item">
        <div class="chat-preview">
          <div class="user">
            <div class="user__img">
              <div class="avatar-image avatar-image__preview-size"></div>
            </div>
            <div class="user__description">
              <h4>Андрей</h4>
              <p class="user__caption">Изображение</p>
            </div>
          </div>
          <div class="chat-preview__right">
            <span class="chat-preview__caption">10:49</span>
            <div class="badge">
              <span>2</span>
            </div>
          </div>
        </div>
      </div>

      <div class="chat-list__item">
        <div class="chat-preview">
          <div class="user">
            <div class="user__img">
              <div class="avatar-image avatar-image__preview-size"></div>
            </div>
            <div class="user__description">
              <h4>Андрей</h4>
              <p class="user__caption">Изображение</p>
            </div>
          </div>
          <div class="chat-preview__right">
            <span class="chat-preview__caption">10:49</span>
            <div class="badge">
              <span>2</span>
            </div>
          </div>
        </div>
      </div>

      <div class="chat-list__item">
        <div class="chat-preview">
          <div class="user">
            <div class="user__img">
              <div class="avatar-image avatar-image__preview-size"></div>
            </div>
            <div class="user__description">
              <h4>Андрей</h4>
              <p class="user__caption">Изображение</p>
            </div>
          </div>
          <div class="chat-preview__right">
            <span class="chat-preview__caption">10:49</span>
            <div class="badge">
              <span>2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`);

export { template };
