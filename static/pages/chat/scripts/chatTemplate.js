//todo: Сделать тексты по модели

export const chatTemplate = Handlebars.compile(`
  <div class="chat">

  <div class="chat__top">
    <div class="chat__header">
      {{{userTemplate}}}
      <div class="chat__settings">
        {{{chatSettingsButton}}}
      </div>
    </div>
  </div>

  <div class="chat__body">
    <div class="chat__message chat__message__from">
        <div class="message">
          <div class="message__content message__content__from">
            <p class="message__text">
              Идейные соображения высшего порядка, а также реализация намеченных плановых заданий играет важную роль в
              формировании соответствующий условий активизации. Разнообразный и богатый опыт сложившаяся структура
              организации обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых
              участниками в отношении поставленных задач. Не следует, однако забывать, что сложившаяся структура
              организации позволяет выполнять важные задания по разработке систем массового участия. Идейные соображения
              высшего порядка, а также дальнейшее развитие различных форм деятельности требуют определения и уточнения
              направлений прогрессивного развития. Равным образом укрепление и развитие структуры требуют от нас анализа
              дальнейших направлений развития.
            </p>
          </div>
          <div class="message__date">
            <span>10:20</span>
          </div>
        </div>
      </div>

      <div class="chat__message chat__message__to">
        <div class="message">
          <div class="message__content message__content__to">
            <p class="message__text">
              Хорошо
            </p>
          </div>
          <div class="message__date">
            <span>10:20</span>
          </div>
        </div>
      </div>

      <div class="chat__message chat__message__from">
        <div class="message">
          <div class="message__content message__content__from">
            <p class="message__text">
              Идейные соображения высшего порядка, а также реализация намеченных плановых заданий играет важную роль в
              формировании соответствующий условий активизации. Разнообразный и богатый опыт сложившаяся структура
              организации обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых
              участниками в отношении поставленных задач. Не следует, однако забывать, что сложившаяся структура
              организации позволяет выполнять важные задания по разработке систем массового участия. Идейные соображения
              высшего порядка, а также дальнейшее развитие различных форм деятельности требуют определения и уточнения
              направлений прогрессивного развития. Равным образом укрепление и развитие структуры требуют от нас анализа
              дальнейших направлений развития.
            </p>
          </div>
          <div class="message__date">
            <span>10:20</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>

  <div class="chat__bottom">
    <div class="chat__footer">
      <div class="right-indent-sm">
        {{{attachButton}}}
      </div>
      <input type="text" placeholder="Написать сообщение..." class="send-message-input right-indent-sm sendMessageSelector">
      {{{sendButton}}}
    </div>
  </div>
`);
