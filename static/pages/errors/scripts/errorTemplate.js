// принимает errorCode, errorDescription

export const errorTemplate = Handlebars.compile(`
  <div class="error">
  <div class="error__code">
    <h1>{{errorCode}}</h1>
  </div>
  <div class="error__text bottom-indent-xxl">
    <p>{{errorDescription}}</p>
  </div>
  <div class="error__link">
    <a href="#">Назад</a>
  </div>
  </div>
`);
