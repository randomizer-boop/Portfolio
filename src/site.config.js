// Пустое значение ("") — элемент на сайте не показывается.

export const site = {
  brand: "Wave · Portfolio",

  person: { ru: "Толкын", en: "Tolkyn" },

  // Контакты. Telegram — имя без @, почта — адрес целиком,
  // GitHub и LinkedIn — ссылка целиком.
  contacts: {
    telegram: "tolkynb",
    email: "tolkyn.bolatzhan@gmail.com",
    github: "https://github.com/randomizer-boop",
    linkedin: "",
  },

  // Ссылки на живые проекты. Пока ссылка пустая — кнопка скрыта.
  // repo — ссылка на код. Указывать только публичный репозиторий:
  // приватный откроется посетителю как «404».
  links: {
    starwise: {
      demo: "https://sw-demo-indol.vercel.app/",
      admin: "https://sw-demo-indol.vercel.app/admin-demo.html",
      bot: "https://t.me/star_wise_bot",
      tiktok: "https://www.tiktok.com/@starwise_ru",
      repo: "",
    },
    chinashipments: {
      demo: "https://cs-portfolio-zeta.vercel.app/",
      admin: "https://cs-portfolio-zeta.vercel.app/admin-demo",
      apiDocs: "https://cs-portfolio-zeta.vercel.app/api/docs",
      repo: "https://github.com/randomizer-boop/CS-portfolio",
    },
    pome: {
      demo: "https://pome-six.vercel.app/",
      repo: "",
    },
  },

  // Роль и срок по каждому проекту (карточка на главной и таблица на странице проекта).
  // Пустое значение — строка не показывается.
  meta: {
    starwise: {
      role: {
        ru: "Свой продукт · UX · Frontend · Backend · Бот · Деплой",
        en: "Own product · UX · Frontend · Backend · Bot · Deployment",
      },
      term: { ru: "", en: "" },
    },
    chinashipments: {
      role: {
        ru: "UX · Frontend · Backend API · База данных · Деплой",
        en: "UX · Frontend · Backend API · Database · Deployment",
      },
      term: { ru: "", en: "" },
    },
    pome: {
      role: {
        ru: "Продукт · UX · Frontend · Интеграция с бэкендом",
        en: "Product · UX · Frontend · Backend integration",
      },
      term: { ru: "", en: "" },
    },
  },
};
