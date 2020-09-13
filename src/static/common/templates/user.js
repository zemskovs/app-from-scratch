const userTemplate = Handlebars.compile(`
  <div class="user">
  <div class="user__img">
    <div class="avatar-image avatar-image__header-size"></div>
  </div>
  <div class="user__description">
    <h4>{{name}}</h4>
    {{#if lastDate}}
      <p class="user__caption">Был в сети {{lastDate}} назад</p>
    {{/if}}
  </div>
  </div>
`);

export { userTemplate };
