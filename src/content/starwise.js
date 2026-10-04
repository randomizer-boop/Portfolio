export default {
  id: "starwise",
  path: "/starwise",
  name: "StarWise",

  // fill — заливка кнопок, text — акцент на светлом фоне, onDark — акцент на тёмном
  colors: { fill: "#8065C7", text: "#6A4FB0", onDark: "#C5B6F0" },

  tag: { ru: "Telegram Mini App + бот", en: "Telegram Mini App + bot" },
  lead: {
    ru: "Telegram Mini App для расчёта и разбора натальной карты. Пользователь вводит дату, время и город рождения — получает карту и бесплатный портрет. За интерфейсом — свой движок расчёта, API на FastAPI, бот, PostgreSQL и админ-панель.",
    en: "A Telegram Mini App that calculates and explains a natal chart. The user enters their date, time and city of birth and gets a chart and a free portrait. Behind the interface: a custom calculation engine, a FastAPI API, a bot, PostgreSQL and an admin panel.",
  },
  demoLabel: "openDemo",

  // Необязательный блок: метка на карточке и в шапке страницы, строка в таблице, пояснение под описанием
  status: {
    label: { ru: "В разработке", en: "In development" },
    value: { ru: "В разработке", en: "In development" },
    note: {
      ru: "Проект в разработке: платные разборы ещё не запущены. В планах — AI.",
      en: "In development: paid readings aren't live yet. AI is planned.",
    },
  },

  // Строка «В демо» в таблице проекта и на карточке
  demo: {
    ru: "Mini App (RU, EN) · админ-панель на вымышленных данных · бот",
    en: "Mini App (RU, EN) · admin panel on fictional data · bot",
  },

  format: { ru: "Mini App, бот, админ-панель", en: "Mini App, bot, admin panel" },
  extraMeta: {
    label: { ru: "Язык", en: "Language" },
    value: { ru: "Русский · демо также на английском", en: "Russian · the demo is also in English" },
  },

  card: {
    what: {
      ru: "Telegram-продукт целиком: Mini App, бот, API, база данных и админ-панель для расчёта и разбора натальной карты.",
      en: "A complete Telegram product: a Mini App, a bot, an API, a database and an admin panel for calculating and reading natal charts.",
    },
    problem: {
      ru: "Собрать расчёт карты, разбор понятным языком и оплату в одном приложении внутри Telegram — без регистрации и отдельного сайта.",
      en: "Put the chart calculation, a plain-language reading and payment into one app inside Telegram — no sign-up, no separate website.",
    },
    stack: ["React", "Vite", "Python", "FastAPI", "aiogram", "PostgreSQL", "Swiss Ephemeris"],
    highlights: [
      {
        ru: "Свой движок расчёта на Swiss Ephemeris: планеты, дома по Плацидусу, аспекты, конфигурации",
        en: "Own calculation engine on Swiss Ephemeris: planets, Placidus houses, aspects, configurations",
      },
      {
        ru: "Вход без пароля: сервер проверяет подпись Telegram initData (HMAC-SHA256)",
        en: "Passwordless sign-in: the server verifies the Telegram initData signature (HMAC-SHA256)",
      },
      {
        ru: "Бот на вебхуке в одном процессе с API: запуск, оплата, поддержка",
        en: "A webhook bot in the same process as the API: launch, payments, support",
      },
      {
        ru: "Telegram Stars на бэкенде: счёт, запись платежа без дублей, выдача доступа, возврат; в Mini App оплата пока выключена флагом",
        en: "Telegram Stars on the backend: invoice, duplicate-safe payment record, access grant, refund; in the Mini App payment is currently off by a flag",
      },
      {
        ru: "Админ-панель на своём API: пользователи, платежи, переписка поддержки, цены",
        en: "An admin panel on its own API: users, payments, support chat, prices",
      },
    ],
    visual: {
      type: "desktop-phone",
      bar: { ru: "starwise · admin", en: "starwise · admin" },
      images: {
        ru: ["/img/sw_admin.jpg", "/img/sw_home.jpg"],
        en: ["/img/sw_admin.jpg", "/img/sw_home_en.jpg"],
      },
      alts: [
        { ru: "Админ-панель StarWise", en: "StarWise admin panel" },
        { ru: "Mini App StarWise: главный экран", en: "StarWise Mini App: home screen" },
      ],
    },
  },

  arch: {
    title: {
      ru: "Mini App → API → расчёт → база → бот → платежи и админка",
      en: "Mini App → API → engine → database → bot → payments and admin",
    },
    nodes: [
      {
        layer: { ru: "Клиент", en: "Client" },
        name: "Telegram Mini App",
        what: { ru: "React · Vite · WebApp SDK", en: "React · Vite · WebApp SDK" },
      },
      {
        layer: { ru: "API", en: "API" },
        name: "FastAPI",
        what: {
          ru: "проверка initData, расчёт, профиль, счета",
          en: "initData check, calculation, profile, invoices",
        },
      },
      {
        layer: { ru: "Расчёт", en: "Engine" },
        name: "Swiss Ephemeris",
        what: { ru: "планеты, дома, аспекты", en: "planets, houses, aspects" },
      },
      {
        layer: { ru: "База", en: "Database" },
        name: "PostgreSQL",
        what: {
          ru: "6 таблиц: пользователи, платежи, доступы, обращения",
          en: "6 tables: users, payments, entitlements, support",
        },
      },
      {
        layer: { ru: "Бот", en: "Bot" },
        name: "aiogram · webhook",
        what: { ru: "запуск, оплата, поддержка", en: "launch, payments, support" },
      },
      {
        layer: { ru: "Платежи и админка", en: "Payments and admin" },
        name: { ru: "Stars · админ-панель", en: "Stars · admin panel" },
        what: {
          ru: "возвраты, выдача доступа, цены",
          en: "refunds, access grants, prices",
        },
      },
    ],
    note: {
      ru: "Mini App размещён на Cloudflare. API и бот — один сервис FastAPI на Railway.",
      en: "The Mini App is hosted on Cloudflare. The API and the bot are one FastAPI service on Railway.",
    },
  },

  decisions: [
    {
      title: { ru: "Вход без пароля по подписи Telegram", en: "Passwordless sign-in by Telegram signature" },
      text: {
        ru: "Mini App передаёт initData, сервер пересчитывает HMAC-SHA256 на токене бота. Подделанные данные и данные старше суток отклоняются.",
        en: "The Mini App sends initData and the server recomputes HMAC-SHA256 with the bot token. Forged data and data older than a day are rejected.",
      },
    },
    {
      title: { ru: "Бот и API — один сервис", en: "The bot and the API are one service" },
      text: {
        ru: "Telegram присылает события на вебхук FastAPI, запрос проверяется по секретному заголовку. Один процесс вместо двух — проще деплой.",
        en: "Telegram delivers updates to a FastAPI webhook, and each request is checked by a secret header. One process instead of two — simpler deployment.",
      },
    },
    {
      title: { ru: "Платёж не теряется и не задваивается", en: "A payment is never lost or doubled" },
      text: {
        ru: "Оплата записывается по ID платежа Telegram: повторная доставка не создаёт дубль. При сбое базы сервер отвечает 500, и Telegram присылает платёж ещё раз.",
        en: "A payment is stored by its Telegram charge ID, so a repeated delivery creates no duplicate. If the database fails the server answers 500 and Telegram delivers the payment again.",
      },
    },
    {
      title: { ru: "Цены и категории — в базе, а не в коде", en: "Prices and categories live in the database, not in code" },
      text: {
        ru: "Админ-панель меняет цену и доступность разбора одним запросом к API — без нового деплоя.",
        en: "The admin panel changes a reading's price and availability with one API request — no redeploy.",
      },
    },
  ],
  decisionsNote: {
    ru: "Оплата Telegram Stars реализована на бэкенде. В боевом Mini App кнопка оплаты пока выключена флагом — до запуска платных разборов.",
    en: "Telegram Stars payments are implemented on the backend. In the production Mini App the pay button is currently switched off by a flag — until paid readings launch.",
  },

  client: {
    title: { ru: "Приложение внутри Telegram", en: "An app inside Telegram" },
    visual: {
      type: "phones",
      images: {
        ru: ["/img/sw_home.jpg", "/img/sw_reading.jpg"],
        en: ["/img/sw_home_en.jpg", "/img/sw_reading_en.jpg"],
      },
      alts: [
        { ru: "StarWise: главный экран с натальной картой", en: "StarWise: home screen with the natal chart" },
        { ru: "StarWise: бесплатный разбор по трём точкам", en: "StarWise: free reading in three points" },
      ],
    },
    steps: [
      {
        title: { ru: "Онбординг и форма", en: "Onboarding and form" },
        text: {
          ru: "Дата, время и город рождения — три шага до результата.",
          en: "Date, time and city of birth — three steps to a result.",
        },
        front: { ru: "форма на React, подсказка города", en: "React form, city autocomplete" },
        back: { ru: "FastAPI, GeoNames: город и часовой пояс", en: "FastAPI, GeoNames: city and time zone" },
      },
      {
        title: { ru: "Расчёт карты", en: "Chart calculation" },
        text: {
          ru: "Положения планет, дома, аспекты и конфигурации.",
          en: "Planet positions, houses, aspects and configurations.",
        },
        front: { ru: "колесо карты на SVG", en: "SVG chart wheel" },
        back: { ru: "собственный движок на Swiss Ephemeris", en: "own engine built on Swiss Ephemeris" },
      },
      {
        title: { ru: "Бесплатный портрет", en: "Free portrait" },
        text: {
          ru: "Разбор по Солнцу, Луне и Асценденту — пользователь видит ценность до оплаты.",
          en: "A reading of the Sun, Moon and Ascendant — the user sees the value before paying.",
        },
        front: { ru: "экран разбора: формула и три точки карты", en: "reading screen: a formula and three chart points" },
        back: { ru: "профиль и карта в PostgreSQL", en: "profile and chart in PostgreSQL" },
      },
      {
        title: { ru: "Платные разборы и подписка", en: "Paid readings and subscription" },
        text: {
          ru: "Четыре категории и ежедневный прогноз. Платная часть ещё не запущена.",
          en: "Four categories and a daily forecast. The paid part isn't live yet.",
        },
        front: { ru: "пейволл; кнопка оплаты выключена флагом", en: "paywall; the pay button is off by a flag" },
        back: { ru: "счета Telegram Stars, покупки в базе", en: "Telegram Stars invoices, purchases in the database" },
      },
    ],
  },

  owner: {
    title: {
      ru: "Админ-панель: всё управление сервисом в одном окне",
      en: "Admin panel: the whole service managed from one window",
    },
    note: {
      ru: "Вымышленные пользователи и платежи. Вход без пароля, изменения не сохраняются.",
      en: "Fictional users and payments. No password, changes aren't saved.",
    },
    bar: "starwise · admin",
    image: "/img/sw_admin.jpg",
    alt: {
      ru: "Админ-панель StarWise: сводка, вкладки и таблица платежей",
      en: "StarWise admin panel: overview, tabs and the payments table",
    },
    // Положение меток на скриншоте, в процентах от его ширины и высоты
    markers: [
      { x: 8.6, y: 18.3 },
      { x: 91.5, y: 46.1 },
      { x: 25.9, y: 28.1 },
      { x: 47.1, y: 28.1 },
    ],
    legend: [
      {
        title: { ru: "Сводка", en: "Overview" },
        text: {
          ru: "Пользователи, оплаты, полученные Stars, подписки и новые обращения — на одном экране.",
          en: "Users, payments, Stars received, subscriptions and new support messages — on one screen.",
        },
      },
      {
        title: { ru: "Платежи и возвраты", en: "Payments and refunds" },
        text: {
          ru: "Возврат Stars пользователю одной кнопкой. Доступ можно выдать и отозвать вручную.",
          en: "Refund Stars to a user with one button. Access can be granted or revoked by hand.",
        },
      },
      {
        title: { ru: "Поддержка", en: "Support" },
        text: {
          ru: "Переписка с пользователем прямо из панели: ответ приходит ему от имени бота.",
          en: "Chat with a user right from the panel: the reply reaches them on behalf of the bot.",
        },
      },
      {
        title: { ru: "Категории и цены", en: "Categories and prices" },
        text: {
          ru: "Цена и доступность разбора меняются сразу, без перезапуска сервера.",
          en: "A reading's price and availability change instantly, with no server restart.",
        },
      },
    ],
  },

  stack: {
    front: [
      { name: "React · Vite", what: { ru: "экраны Mini App", en: "Mini App screens" } },
      {
        name: "Telegram WebApp SDK",
        what: { ru: "вход и оплата внутри Telegram", en: "sign-in and payment inside Telegram" },
      },
      { name: "SVG", what: { ru: "колесо натальной карты", en: "natal chart wheel" } },
      { name: "i18n", what: { ru: "английский язык в демо-версии", en: "English in the demo version" } },
    ],
    back: [
      { name: "FastAPI", what: { ru: "API приложения и админ-панели", en: "API for the app and the admin panel" } },
      { name: "Swiss Ephemeris", what: { ru: "расчёт планет, домов, аспектов", en: "planets, houses and aspects" } },
      { name: "aiogram", what: { ru: "бот и сообщения в поддержку", en: "bot and support messages" } },
      { name: "Telegram Stars", what: { ru: "оплата, подписка, возвраты", en: "payments, subscription, refunds" } },
      { name: "PostgreSQL", what: { ru: "пользователи, покупки, обращения", en: "users, purchases, support threads" } },
    ],
  },

  cta: {
    ru: "Ищете разработчика или нужен продукт в Telegram? Напишите.",
    en: "Hiring a developer or need a Telegram product? Get in touch.",
  },
};
