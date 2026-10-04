export default {
  // fill — заливка кнопок, text — акцент на светлом фоне, onDark — акцент на тёмном
  colors: { fill: "#0E7C86", text: "#0B6570", onDark: "#5FD0D8" },

  eyebrow: { ru: "Портфолио разработчика", en: "Developer portfolio" },

  // Строка под именем; части массива разделяются точкой
  title: {
    ru: ["Full-Stack Developer"],
    en: ["Full-Stack Developer"],
  },

  lead: {
    ru: "Создаю веб-приложения и Telegram-продукты от начала до конца: интерфейс, API, база данных, авторизация, тесты и деплой. В портфолио — три проекта с живым демо и разбором архитектуры.",
    en: "I build web apps and Telegram products end to end: interface, API, database, authentication, tests and deployment. The portfolio has three projects, each with a live demo and an architecture breakdown.",
  },

  core: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Telegram Mini Apps"],

  meta: [
    {
      label: { ru: "Ищу", en: "Looking for" },
      value: {
        ru: "Junior-позиция · стажировка · проектная работа",
        en: "Junior position · Internship · Project work",
      },
    },
    {
      label: { ru: "Учёба", en: "Education" },
      value: {
        ru: "Computer Science · выпуск 2027",
        en: "Computer Science · graduating 2027",
      },
    },
  ],

  casesTitle: { ru: "Проекты", en: "Projects" },
  casesNote: {
    ru: "Три продукта с живым демо. У каждого — разбор: задача, моя роль, архитектура, инженерные решения.",
    en: "Three products with live demos. Each has a breakdown: the problem, my role, the architecture and the engineering decisions.",
  },

  profileTitle: { ru: "Навыки, подтверждённые проектами", en: "Skills backed by the projects" },
  profileNote: {
    ru: "Всё перечисленное использовано в проектах выше — от пользовательских сценариев и интерфейса до API, базы данных, авторизации, тестов и деплоя. Подход: бизнес-логика отдельно от интерфейса, данные проверяются на сервере, схема базы — в миграциях.",
    en: "Everything listed here was used in the projects above — from user flows and UI to the API, database, authentication, tests and deployment. My approach: business logic kept apart from the UI, data validated on the server, the database schema in migrations.",
  },
  profile: [
    {
      title: { ru: "Фронтенд", en: "Frontend" },
      text: {
        ru: "React и TypeScript: формы с проверкой полей, состояние, адаптив под телефон и десктоп, интерфейс на двух языках. Колесо натальной карты на SVG.",
        en: "React and TypeScript: validated forms, state, mobile and desktop layouts, a two-language interface. An SVG natal chart wheel.",
      },
    },
    {
      title: { ru: "Бэкенд", en: "Backend" },
      text: {
        ru: "Python и FastAPI: REST-эндпоинты, Pydantic-схемы, вебхук Telegram-бота, API админ-панели.",
        en: "Python and FastAPI: REST endpoints, Pydantic schemas, a Telegram bot webhook, an admin panel API.",
      },
    },
    {
      title: { ru: "Базы данных", en: "Databases" },
      text: {
        ru: "PostgreSQL: схема таблиц, SQL-запросы, миграции (Alembic и SQL-файлы), модели на SQLAlchemy 2, Row-Level Security.",
        en: "PostgreSQL: table design, SQL queries, migrations (Alembic and SQL files), SQLAlchemy 2 models, Row-Level Security.",
      },
    },
    {
      title: { ru: "API и интеграции", en: "APIs and integrations" },
      text: {
        ru: "Контракт между фронтендом и бэкендом, Swagger-документация. Интеграции: Telegram Bot API, Telegram Stars, GeoNames, Neon Data API.",
        en: "The contract between frontend and backend, Swagger docs. Integrations: Telegram Bot API, Telegram Stars, GeoNames, Neon Data API.",
      },
    },
    {
      title: { ru: "Авторизация и безопасность", en: "Authentication and security" },
      text: {
        ru: "Проверка подписи Telegram initData (HMAC-SHA256), вход через Google и код из письма, токен админ-панели, security-заголовки.",
        en: "Telegram initData signature check (HMAC-SHA256), sign-in with Google and an email code, an admin panel token, security headers.",
      },
    },
    {
      title: { ru: "Тестирование", en: "Testing" },
      text: {
        ru: "Unit-тесты бизнес-логики: 132 теста денежных расчётов в POME на Vitest — нулевой доход, отрицательный баланс, февраль, несколько валют.",
        en: "Unit tests for business logic: 132 Vitest tests of the money maths in POME — zero income, negative balance, February, several currencies.",
      },
    },
    {
      title: { ru: "Деплой", en: "Deployment" },
      text: {
        ru: "Vercel (фронтенд и FastAPI одним проектом), Railway и Cloudflare для StarWise: переменные окружения, вебхуки, SPA-маршруты.",
        en: "Vercel (frontend and FastAPI in one project), Railway and Cloudflare for StarWise: environment variables, webhooks, SPA routing.",
      },
    },
    {
      title: { ru: "Продукт и UX", en: "Product and UX" },
      text: {
        ru: "Веду проект от задачи до работающего демо: пользовательские сценарии, приоритеты, что пользователь видит до оплаты.",
        en: "I take a project from the problem to a working demo: user flows, priorities, what the user sees before paying.",
      },
    },
  ],

  stackTitle: { ru: "Технологии", en: "Technologies" },
  stack: [
    {
      title: { ru: "Фронтенд", en: "Frontend" },
      items: ["React", "TypeScript", "Vite", "Tailwind"],
    },
    {
      title: { ru: "Бэкенд", en: "Backend" },
      items: ["Python", "FastAPI", "Pydantic", "aiogram"],
    },
    {
      title: { ru: "Базы данных", en: "Databases" },
      items: ["PostgreSQL", "SQLAlchemy", "Alembic", "Neon", "Row-Level Security"],
    },
    {
      title: { ru: "Платформы и инструменты", en: "Platforms and tooling" },
      items: ["Telegram Mini Apps", "Telegram Bot API", "Vitest", "Vercel", "Railway"],
    },
  ],

  cta: {
    ru: "Ищете разработчика в продукт или команду? Напишите.",
    en: "Looking for a developer for your product or team? Get in touch.",
  },
};
