export default {
  id: "chinashipments",
  path: "/chinashipments",
  name: "ChinaShipments",

  colors: { fill: "#03459B", text: "#03459B", onDark: "#9DBEF5" },

  tag: { ru: "Система заявок: сайт, API, CRM", en: "Request system: website, API, CRM" },
  lead: {
    ru: "Система приёма и обработки заявок для сервиса закупок и доставки из Китая в СНГ. Клиент считает доставку и оставляет заявку на сайте, API проверяет её и сохраняет в PostgreSQL, менеджер ведёт её в CRM-панели от «новой» до «закрытой».",
    en: "A request intake and processing system for a China-to-CIS sourcing and shipping service. The client estimates shipping and leaves a request on the website, the API validates it and stores it in PostgreSQL, and a manager takes it from “new” to “closed” in the CRM panel.",
  },
  demoLabel: "openSite",

  // Строка «В демо» в таблице проекта и на карточке
  demo: {
    ru: "Сайт с калькулятором и формой · CRM-панель на вымышленных заявках · Swagger API",
    en: "Website with calculator and form · CRM panel on fictional requests · Swagger API",
  },
  format: { ru: "Сайт, API заявок, CRM-панель", en: "Website, request API, CRM panel" },
  extraMeta: {
    label: { ru: "Язык", en: "Language" },
    value: { ru: "RU", en: "RU" },
  },

  card: {
    what: {
      ru: "Система заявок для логистического сервиса: сайт с калькулятором и формой, REST API, база данных и CRM-панель для менеджера.",
      en: "A request system for a logistics service: a website with a calculator and a form, a REST API, a database and a CRM panel for the manager.",
    },
    problem: {
      ru: "Довести заявку от формы на сайте до менеджера: проверить данные, сохранить в базу и вести по статусам в панели — вместо таблиц и переписок.",
      en: "Take a request from the website form to the manager: validate it, store it in the database and move it through statuses in a panel — instead of spreadsheets and chats.",
    },
    stack: ["React", "TypeScript", "Vite", "Tailwind", "FastAPI", "Pydantic", "SQLAlchemy", "Alembic", "PostgreSQL"],
    highlights: [
      {
        ru: "REST API на FastAPI: приём заявок, Swagger-документация, проверка состояния",
        en: "A FastAPI REST API: request intake, Swagger docs, a health check",
      },
      {
        ru: "Проверка входных данных в схемах Pydantic, модели на SQLAlchemy 2",
        en: "Input validation in Pydantic schemas, models on SQLAlchemy 2",
      },
      {
        ru: "Схема базы под миграциями Alembic, PostgreSQL на Neon",
        en: "Database schema under Alembic migrations, PostgreSQL on Neon",
      },
      {
        ru: "CRM-панель: статусы «новая → в работе → закрыта», поиск, фильтры, экспорт в CSV",
        en: "CRM panel: “new → in progress → closed” statuses, search, filters, CSV export",
      },
      {
        ru: "Фронтенд и бэкенд — два сервиса в одном деплое на Vercel",
        en: "Frontend and backend are two services in one Vercel deployment",
      },
    ],
    visual: {
      type: "browser",
      bar: { ru: "chinashipments · сайт", en: "chinashipments · website" },
      images: { ru: ["/img/cs_site.jpg"], en: ["/img/cs_site.jpg"] },
      alts: [{ ru: "Сайт ChinaShipments", en: "ChinaShipments website" }],
    },
  },

  arch: {
    title: {
      ru: "Форма на сайте → API → проверка → база → панель менеджера",
      en: "Website form → API → validation → database → manager's panel",
    },
    nodes: [
      {
        layer: { ru: "Клиент", en: "Client" },
        name: "React · TypeScript",
        what: { ru: "сайт, калькулятор, форма заявки", en: "website, calculator, request form" },
      },
      {
        layer: { ru: "API", en: "API" },
        name: "FastAPI",
        what: { ru: "POST /api/contact-requests", en: "POST /api/contact-requests" },
      },
      {
        layer: { ru: "Проверка", en: "Validation" },
        name: "Pydantic",
        what: { ru: "схемы запроса и ответа", en: "request and response schemas" },
      },
      {
        layer: { ru: "База", en: "Database" },
        name: "SQLAlchemy · PostgreSQL",
        what: { ru: "модель заявки, миграции Alembic", en: "request model, Alembic migrations" },
      },
      {
        layer: { ru: "Панель", en: "Panel" },
        name: "CRM",
        what: { ru: "статусы, поиск, экспорт в CSV", en: "statuses, search, CSV export" },
      },
    ],
    note: {
      ru: "Сайт и API развёрнуты на Vercel одним проектом: запросы /api/* уходят в сервис FastAPI, остальное — во фронтенд.",
      en: "The website and the API are deployed on Vercel as one project: /api/* requests go to the FastAPI service, everything else to the frontend.",
    },
  },

  decisions: [
    {
      title: { ru: "Данные проверяются дважды", en: "Data is validated twice" },
      text: {
        ru: "Форма проверяет поля в браузере, а сервер — ещё раз в схеме Pydantic: длина имени, телефона и текста ограничена. В базу попадает только корректная заявка.",
        en: "The form checks the fields in the browser and the server checks them again in a Pydantic schema: name, phone and text lengths are limited. Only a valid request reaches the database.",
      },
    },
    {
      title: { ru: "Схема базы — в миграциях", en: "The database schema lives in migrations" },
      text: {
        ru: "Таблица заявок создаётся миграцией Alembic, а не вручную: изменения схемы записаны в коде и повторяются на любой базе.",
        en: "The requests table is created by an Alembic migration, not by hand: schema changes are recorded in code and can be replayed on any database.",
      },
    },
    {
      title: { ru: "API с документацией", en: "A documented API" },
      text: {
        ru: "FastAPI сам строит Swagger-страницу из схем: эндпоинт заявок можно открыть и вызвать прямо в браузере. Отдельный адрес отвечает, жив ли сервис.",
        en: "FastAPI builds the Swagger page from the schemas: the request endpoint can be opened and called right in the browser. A separate endpoint reports whether the service is up.",
      },
    },
    {
      title: { ru: "Публичная демо-панель не трогает базу", en: "The public demo panel never touches the database" },
      text: {
        ru: "Демо работает на вымышленных заявках в памяти браузера. Панель можно показать любому, не открывая данные клиентов.",
        en: "The demo runs on fictional requests in browser memory. The panel can be shown to anyone without exposing client data.",
      },
    },
  ],

  client: {
    title: { ru: "Путь заявки: от сайта до менеджера", en: "A request's path: from the website to the manager" },
    visual: {
      type: "browser",
      bar: { ru: "chinashipments · сайт", en: "chinashipments · website" },
      images: { ru: ["/img/cs_site.jpg"], en: ["/img/cs_site.jpg"] },
      alts: [
        {
          ru: "Сайт ChinaShipments: первый экран с предложением и кнопкой расчёта доставки",
          en: "ChinaShipments website: hero with the offer and a shipping calculator button",
        },
      ],
    },
    steps: [
      {
        title: { ru: "Сайт услуги", en: "Service website" },
        text: {
          ru: "Услуги, этапы работы, тарифы и ответы на вопросы — на одной странице.",
          en: "Services, process, rates and FAQ — on a single page.",
        },
        front: { ru: "React, TypeScript, Tailwind CSS", en: "React, TypeScript, Tailwind CSS" },
      },
      {
        title: { ru: "Калькулятор доставки", en: "Shipping calculator" },
        text: {
          ru: "Ориентировочная цена по весу и способу доставки — ещё до заявки.",
          en: "A rough price by weight and shipping method — before any request.",
        },
        front: { ru: "расчёт в браузере по таблице тарифов", en: "calculated in the browser from the rate table" },
      },
      {
        title: { ru: "Заявка", en: "Request" },
        text: {
          ru: "Имя, телефон и задача. Заявка сразу попадает в базу.",
          en: "Name, phone and the task. The request goes straight into the database.",
        },
        front: { ru: "форма с проверкой полей", en: "form with field validation" },
        back: { ru: "FastAPI, Pydantic, PostgreSQL", en: "FastAPI, Pydantic, PostgreSQL" },
      },
      {
        title: { ru: "Обработка", en: "Processing" },
        text: {
          ru: "Менеджер видит заявку в панели и ведёт её по статусам.",
          en: "A manager sees the request in the panel and moves it through statuses.",
        },
        front: { ru: "панель заявок", en: "request panel" },
        back: { ru: "SQLAlchemy, миграции Alembic", en: "SQLAlchemy, Alembic migrations" },
      },
    ],
  },

  owner: {
    title: {
      ru: "Админ-панель: заявки вместо таблиц и переписок",
      en: "Admin panel: requests instead of spreadsheets and chats",
    },
    note: {
      ru: "Вымышленные заявки. Вход без пароля, изменения сбрасываются при перезагрузке.",
      en: "Fictional requests. No password, changes reset on reload.",
    },
    bar: "chinashipments · admin",
    image: "/img/cs_admin.jpg",
    alt: {
      ru: "Панель заявок ChinaShipments: счётчики, поиск, таблица со статусами",
      en: "ChinaShipments request panel: counters, search and a table with statuses",
    },
    markers: [
      { x: 5.5, y: 19.6 },
      { x: 83.8, y: 37 },
      { x: 70.3, y: 26 },
      { x: 68.8, y: 3.9 },
    ],
    legend: [
      {
        title: { ru: "Счётчики по статусам", en: "Status counters" },
        text: {
          ru: "Сколько заявок новых, в работе и закрытых. Нажатие на счётчик фильтрует список.",
          en: "How many requests are new, in progress and closed. Clicking a counter filters the list.",
        },
      },
      {
        title: { ru: "Статус и карточка заявки", en: "Status and request card" },
        text: {
          ru: "Статус меняется прямо в строке. В карточке — заметка менеджера, звонок и WhatsApp.",
          en: "The status changes right in the row. The card holds a manager's note, call and WhatsApp buttons.",
        },
      },
      {
        title: { ru: "Поиск", en: "Search" },
        text: {
          ru: "По имени, телефону и тексту задачи.",
          en: "By name, phone and task text.",
        },
      },
      {
        title: { ru: "Экспорт в CSV", en: "CSV export" },
        text: {
          ru: "Выгрузка заявок в таблицу одной кнопкой.",
          en: "All requests exported to a spreadsheet with one button.",
        },
      },
    ],
  },

  stack: {
    front: [
      { name: "React · TypeScript", what: { ru: "сайт и калькулятор", en: "website and calculator" } },
      { name: "Vite", what: { ru: "сборка", en: "build" } },
      {
        name: "Tailwind CSS",
        what: { ru: "оформление, телефон и десктоп", en: "styling, mobile and desktop" },
      },
    ],
    back: [
      {
        name: "FastAPI · Pydantic",
        what: { ru: "API заявок, проверка данных", en: "request API, data validation" },
      },
      {
        name: "SQLAlchemy · Alembic",
        what: { ru: "модели и миграции базы", en: "database models and migrations" },
      },
      { name: "PostgreSQL · Neon", what: { ru: "хранение заявок", en: "request storage" } },
      { name: "Vercel", what: { ru: "хостинг сайта и API", en: "hosting for the site and the API" } },
    ],
  },

  cta: {
    ru: "Ищете разработчика или нужна система заявок с CRM? Напишите.",
    en: "Hiring a developer or need a request system with a CRM? Get in touch.",
  },
};
