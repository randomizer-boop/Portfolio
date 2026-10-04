// Язык сайта: RU / EN. Хранится в localStorage, по умолчанию — язык браузера.

import { useSyncExternalStore } from "react";

export const LANGS = ["ru", "en"];
const STORAGE_KEY = "portfolio_lang";
// Языки браузера, для которых по умолчанию включается русский
const RU_LOCALES = ["ru", "kk", "uk", "be", "uz", "ky"];

function detect() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (LANGS.includes(saved)) return saved;
  } catch {
    // Хранилище недоступно — определяем по языку браузера
  }
  const browser = (navigator.language || "").slice(0, 2).toLowerCase();
  return RU_LOCALES.includes(browser) ? "ru" : "en";
}

let current = detect();
const listeners = new Set();
document.documentElement.lang = current;

export function getLang() {
  return current;
}

export function setLang(lang) {
  if (!LANGS.includes(lang) || lang === current) return;
  current = lang;
  document.documentElement.lang = lang;
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Язык сменится только до перезагрузки
  }
  listeners.forEach((fn) => fn());
}

function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function useLang() {
  return useSyncExternalStore(subscribe, getLang);
}

// Выбирает строку из пары { ru, en }; обычную строку возвращает как есть
export function pick(value, lang = current) {
  if (value && typeof value === "object" && ("ru" in value || "en" in value)) {
    return value[lang] ?? value.ru ?? "";
  }
  return value ?? "";
}
