//переменные
// cartTemplate - шаблон карты

const template = Handlebars.compile(`
  <div class="auth">
  <div class="auth__body">
    {{{cartTemplate}}}
  </div>
  </div>
`);

export { template };
