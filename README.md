Интерфейс чата.

В ходе проекта был реализован дизайн приложения, vDom вместе с хуками, роутинг, 
распространенные утилиты.

### Локальная разработка:

Для старта проекта используется команда  `npm run start`

### Структура проекта
```
├───src
│   ├───components: общие компоненты
│   ├───css
│   ├───fonts
│   ├───icons
│   ├───modules
│   │   ├───api
│   │   ├───block: компонент для роутинга
│   │   ├───model: вариант реализации обновления стейта
│   │   ├───router: роутинг
│   │   ├───templateEngine: vDom
│   │   └───utils
│   ├───pages: компоненты страниц
│   └───static: реализация с помощью Handlebars
└───ui: дизайн из Figma
```

### Планы

Что можно улучшить:

- добавить взаимодействие с сервером. 
- переписать роутинг на хуки.
- почистить проект от ненужного кода. 
