//переменные
// cartTemplate - шаблон карты

const registrationTemplate = Handlebars.compile(`
  <div class="auth">
  <div class="auth__body">
    {{{cartTemplate}}}
  </div>
  </div>
`);

export { registrationTemplate };
