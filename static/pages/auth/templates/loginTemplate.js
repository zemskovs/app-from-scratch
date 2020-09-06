//переменные
// cartTemplate - шаблон карты

const loginTemplate = Handlebars.compile(`
  <div class="auth">
  <div class="auth__body">
    {{{cartTemplate}}}
  </div>
  </div>
`);

export { loginTemplate };
