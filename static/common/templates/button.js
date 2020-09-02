const buttonTemplate = Handlebars.compile(`
  {{#if iconButton}}
    <div class="click-icon {{buttonClasses}}" role="button"></div>
  {{/if}}
  {{#if largeButton}}
    <div class="custom-button {{buttonClasses}}" role="button">{{text}}</div>
  {{/if}}
`);

export { buttonTemplate };
