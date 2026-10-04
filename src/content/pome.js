export default {
  id: "pome",
  path: "/pome",
  name: "POME",

  colors: { fill: "#9B2F31", text: "#9B2F31", onDark: "#EBA9A4" },

  tag: { ru: "Веб-приложение с личным кабинетом", en: "Web app with user accounts" },
  lead: {
    ru: "Личные финансы, которые отвечают на один вопрос: сколько можно потратить сегодня, чтобы в конце месяца всё сошлось. React и TypeScript, PostgreSQL с Row-Level Security, денежная логика — чистые функции под 132 автотестами.",
    en: "Personal finance that answers one question: how much can I spend today and still end the month on track? React and TypeScript, PostgreSQL with Row-Level Security, and money logic in pure functions covered by 132 automated tests.",
  },
  demoLabel: "openDemo",

  // Строка «В демо» в таблице проекта и на карточке
  demo: {
    ru: "Демо-режим без регистрации: лимит на сегодня, бюджет, цели, прогноз",
    en: "No-sign-up demo: today's limit, budget, goals, forecast",
  },
  format: { ru: "Веб-приложение, телефон и десктоп", en: "Web app, mobile and desktop" },
  extraMeta: {
    label: { ru: "Языки и валюты", en: "Languages and currencies" },
    value: { ru: "RU, EN · 5 валют", en: "RU, EN · 5 currencies" },
  },

  card: {
    what: {
      ru: "Веб-приложение личных финансов с аккаунтами: данные пользователей хранятся в PostgreSQL и закрыты на уровне строк.",
      en: "A personal finance web app with user accounts: user data lives in PostgreSQL and is protected at row level.",
    },
    problem: {
      ru: "Трекеры показывают, сколько уже потрачено. POME считает одно число на сегодня — сколько можно потратить, чтобы месяц сошёлся.",
      en: "Trackers show what has already been spent. POME calculates one number for today — how much you can spend and still end the month on track.",
    },
    stack: ["React 19", "TypeScript", "Vite", "Tailwind v4", "Vitest", "Neon Postgres", "Neon Auth"],
    highlights: [
      {
        ru: "132 автоматических теста на денежную логику, включая крайние случаи",
        en: "132 automated tests of the money logic, edge cases included",
      },
      {
        ru: "PostgreSQL на Neon, Row-Level Security на каждой таблице: пользователь видит только свои строки",
        en: "PostgreSQL on Neon, Row-Level Security on every table: users see only their own rows",
      },
      {
        ru: "Вход через Google и код из письма, автовыход через 30 минут бездействия",
        en: "Sign-in with Google and an email code, sign-out after 30 idle minutes",
      },
      {
        ru: "Суммы — в целых минимальных единицах валюты: без ошибок округления, 5 валют",
        en: "Amounts in whole minor currency units: no rounding errors, 5 currencies",
      },
      {
        ru: "Расчёты — чистые функции отдельно от интерфейса; мгновенный отклик с откатом при ошибке",
        en: "The maths is pure functions kept apart from the UI; instant response with rollback on error",
      },
    ],
    visual: {
      type: "desktop-phone",
      bar: { ru: "pome · десктоп", en: "pome · desktop" },
      images: {
        ru: ["/img/pome_app.jpg", "/img/pome_mobile.jpg"],
        en: ["/img/pome_app_en.jpg", "/img/pome_mobile_en.jpg"],
      },
      alts: [
        { ru: "POME на компьютере", en: "POME on desktop" },
        { ru: "POME на телефоне", en: "POME on a phone" },
      ],
    },
  },

  arch: {
    title: {
      ru: "Интерфейс → чистая логика → вход → Data API → база с RLS",
      en: "Interface → pure logic → sign-in → Data API → database with RLS",
    },
    nodes: [
      {
        layer: { ru: "Клиент", en: "Client" },
        name: "React 19 · TypeScript",
        what: { ru: "экраны, мгновенный отклик", en: "screens, instant response" },
      },
      {
        layer: { ru: "Логика", en: "Logic" },
        name: "logic.ts · summarize()",
        what: { ru: "чистые функции, 132 теста", en: "pure functions, 132 tests" },
      },
      {
        layer: { ru: "Вход", en: "Sign-in" },
        name: "Neon Auth",
        what: { ru: "Google, код из письма", en: "Google, email code" },
      },
      {
        layer: { ru: "API", en: "API" },
        name: "Neon Data API",
        what: { ru: "запросы из браузера с токеном пользователя", en: "browser requests with the user's token" },
      },
      {
        layer: { ru: "База", en: "Database" },
        name: "PostgreSQL · RLS",
        what: { ru: "7 таблиц, у каждой строки — владелец", en: "7 tables, every row has an owner" },
      },
    ],
    note: {
      ru: "Своего сервера нет: браузер обращается к базе через Data API, а доступ ограничивает сама база.",
      en: "There is no custom server: the browser reaches the database through the Data API, and the database itself restricts access.",
    },
  },

  decisions: [
    {
      title: { ru: "Доступ ограничивает база, а не интерфейс", en: "The database restricts access, not the UI" },
      text: {
        ru: "В каждой строке записан её владелец, политика Row-Level Security сравнивает его с вошедшим пользователем. Чужие данные не вернутся, даже если запрос составить вручную.",
        en: "Every row stores its owner and a Row-Level Security policy compares it with the signed-in user. Someone else's data won't come back even from a hand-written request.",
      },
    },
    {
      title: { ru: "Деньги хранятся в валюте ввода", en: "Money is stored in the currency it was entered in" },
      text: {
        ru: "Первая версия переводила всё в доллары и округляла: 1 500 000 ₸ возвращались как 1 499 999 ₸. Теперь сумма хранится целым числом в своей валюте и пересчитывается только для расчётов.",
        en: "The first version converted everything to dollars and rounded: ₸1,500,000 came back as ₸1,499,999. Now an amount is stored as an integer in its own currency and converted only for calculations.",
      },
    },
    {
      title: { ru: "Расчёты отделены от экранов", en: "The maths is separate from the screens" },
      text: {
        ru: "Формулы — чистые функции в модулях логики, компоненты только показывают результат. Поэтому расчёты покрыты 132 тестами: нулевой доход, отрицательный баланс, февраль, несколько валют.",
        en: "The formulas are pure functions in logic modules; components only display the result. That is why the maths is covered by 132 tests: zero income, negative balance, February, several currencies.",
      },
    },
    {
      title: { ru: "Состояние выводится из данных", en: "State is derived from data" },
      text: {
        ru: "Остатки счетов и статус платежа («оплачен», «просрочен») не хранятся, а считаются из операций — им не с чем разойтись.",
        en: "Account balances and a bill's status (“paid”, “overdue”) aren't stored — they are computed from transactions, so there is nothing to drift out of sync.",
      },
    },
  ],

  client: {
    title: {
      ru: "Личный кабинет с одним главным числом",
      en: "A personal account built around one number",
    },
    visual: {
      type: "desktop-phone",
      bar: { ru: "pome · десктоп", en: "pome · desktop" },
      images: {
        ru: ["/img/pome_app.jpg", "/img/pome_mobile.jpg"],
        en: ["/img/pome_app_en.jpg", "/img/pome_mobile_en.jpg"],
      },
      alts: [
        { ru: "POME на компьютере: обзор месяца и лимит на сегодня", en: "POME on desktop: month overview and today's limit" },
        { ru: "POME на телефоне: лимит на сегодня", en: "POME on a phone: today's limit" },
      ],
    },
    steps: [
      {
        title: { ru: "Вход или демо", en: "Sign in or demo" },
        text: {
          ru: "Google, код на почту или демо-режим без регистрации.",
          en: "Google, an email code, or a demo with no sign-up.",
        },
        front: { ru: "экран входа, демо на примере данных", en: "sign-in screen, demo on sample data" },
        back: { ru: "Neon Auth", en: "Neon Auth" },
      },
      {
        title: { ru: "Мастер настройки", en: "Setup wizard" },
        text: {
          ru: "Процент сбережений, зарплата, обязательные платежи, остатки, бюджет и цель.",
          en: "Savings rate, salary, fixed payments, balances, budget and a goal.",
        },
        front: { ru: "мастер на весь экран", en: "full-screen wizard" },
        back: { ru: "Postgres через Data API", en: "Postgres through the Data API" },
      },
      {
        title: { ru: "«Можно потратить сегодня»", en: "“Safe to spend today”" },
        text: {
          ru: "Одно число на день: в нём уже учтены обязательные платежи и цели.",
          en: "One number for the day: upcoming bills and goals are already in it.",
        },
        front: { ru: "расчёты отдельно от экранов, 132 теста", en: "maths kept apart from the screens, 132 tests" },
        back: {
          ru: "суммы в валюте ввода, без ошибок округления",
          en: "amounts stored in the entered currency, no rounding errors",
        },
      },
      {
        title: { ru: "Бюджет, цели, прогноз", en: "Budget, goals, forecast" },
        text: {
          ru: "Категории, накопления, аналитика и сценарий «что если».",
          en: "Categories, savings, analytics and a “what if” scenario.",
        },
        front: { ru: "мгновенный отклик, откат при ошибке", en: "instant response, rollback on error" },
        back: { ru: "каждый видит только свои данные (RLS)", en: "everyone sees only their own data (RLS)" },
      },
    ],
  },

  // Вместо админ-панели (owner) — блок расчёта. Числа взяты из демо-режима приложения.
  calc: {
    title: {
      ru: "Как считается «можно потратить сегодня»",
      en: "How “safe to spend today” is calculated",
    },
    note: {
      ru: "Пример из демо-режима. В живом демо числа пересчитываются каждый день.",
      en: "An example from the demo. In the live demo the numbers are recalculated every day.",
    },
    rows: [
      {
        sign: "",
        label: { ru: "Баланс: наличные и основной счёт", en: "Balance: cash and main account" },
        hint: { ru: "потраченное уже вычтено", en: "what you spent is already out of it" },
        value: { ru: "5 788 $", en: "$5,788" },
      },
      {
        sign: "−",
        label: { ru: "Платежи до зарплаты", en: "Bills before payday" },
        hint: { ru: "аренда, счета, подписки — 10 платежей", en: "rent, utilities, subscriptions — 10 payments" },
        value: { ru: "1 789 $", en: "$1,789" },
      },
      {
        sign: "−",
        label: { ru: "Ещё отложить на цели", en: "Still to set aside for goals" },
        hint: { ru: "пополнено 450 $ из 850 $", en: "topped up $450 of $850" },
        value: { ru: "400 $", en: "$400" },
      },
    ],
    total: {
      label: { ru: "Можно потратить до зарплаты", en: "Can spend until payday" },
      value: { ru: "3 599 $", en: "$3,599" },
    },
    daily: [
      {
        sign: "÷",
        label: { ru: "Лимит на день", en: "Daily limit" },
        hint: {
          ru: "(3 599 $ + 54 $ потрачено сегодня) ÷ 29 дней до зарплаты",
          en: "($3,599 + $54 spent today) ÷ 29 days until payday",
        },
        value: { ru: "126 $", en: "$126" },
      },
      {
        sign: "−",
        label: { ru: "Потрачено сегодня", en: "Spent today" },
        hint: null,
        value: { ru: "54 $", en: "$54" },
      },
    ],
    result: {
      label: { ru: "Осталось на сегодня", en: "Left for today" },
      value: { ru: "71,98 $", en: "$71.98" },
    },
    points: [
      {
        title: { ru: "От реальных денег, а не от дохода", en: "From real money, not from income" },
        text: {
          ru: "В расчёт идёт то, что лежит на счетах сегодня. Ожидаемая зарплата не учитывается, пока не пришла.",
          en: "The calculation uses what is in the accounts today. An expected salary doesn't count until it arrives.",
        },
      },
      {
        title: { ru: "Ничего не считается дважды", en: "Nothing is counted twice" },
        text: {
          ru: "Оплаченный счёт привязывается к трате. Переводы между своими счетами — не доход и не расход.",
          en: "A paid bill is linked to its expense. Transfers between your own accounts are neither income nor spending.",
        },
      },
      {
        title: { ru: "Сбережения — цель, а не вычет", en: "Savings are a target, not a deduction" },
        text: {
          ru: "Процент сбережений показывает, сколько стоит отложить. Лимит уменьшает только реальный перевод на «Сбережения».",
          en: "The savings rate shows how much to put aside. Only a real transfer to Savings lowers the limit.",
        },
      },
      {
        title: { ru: "Точность до копейки", en: "Exact to the cent" },
        text: {
          ru: "Суммы хранятся в валюте ввода и в целых единицах — без ошибок округления. Расчёты покрыты 132 тестами.",
          en: "Amounts are stored in the currency they were entered in, as whole units — no rounding errors. The maths is covered by 132 tests.",
        },
      },
    ],
  },

  stack: {
    backNote: { ru: "без своего сервера", en: "no custom server" },
    front: [
      { name: "React 19 · TypeScript", what: { ru: "экраны приложения", en: "app screens" } },
      {
        name: "Tailwind v4",
        what: { ru: "оформление, телефон и десктоп", en: "styling, mobile and desktop" },
      },
      {
        name: "Vitest",
        what: { ru: "132 теста денежных расчётов", en: "132 tests for the money maths" },
      },
      { name: "i18n", what: { ru: "русский и английский", en: "Russian and English" } },
    ],
    back: [
      { name: "Neon Postgres", what: { ru: "база данных", en: "database" } },
      { name: "Neon Auth", what: { ru: "вход через Google и почту", en: "sign-in with Google and email" } },
      {
        name: "Data API · RLS",
        what: { ru: "у каждого только свои данные", en: "everyone sees only their own data" },
      },
      { name: "Vercel", what: { ru: "хостинг", en: "hosting" } },
    ],
  },

  cta: {
    ru: "Ищете разработчика или нужно веб-приложение с личным кабинетом? Напишите.",
    en: "Hiring a developer or need a web app with user accounts? Get in touch.",
  },
};
