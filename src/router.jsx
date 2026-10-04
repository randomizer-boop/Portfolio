// Минимальный роутер на History API
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";

// Папка, в которой лежит сайт. Для корня домена — "" (base в vite.config.js не задан).
const BASE = (import.meta.env.BASE_URL || "/").replace(/\/+$/, "");

// Приводит адрес из строки браузера к виду маршрута:
// /StarWise/ → /starwise, /index.html → /, //pome// → /pome
export function normalize(pathname) {
  let path = pathname || "/";
  try {
    path = decodeURI(path);
  } catch {
    // Битая кодировка в адресе — оставляем как есть, маршрут просто не найдётся
  }
  path = path.toLowerCase().replace(/\/{2,}/g, "/");
  if (BASE && (path === BASE.toLowerCase() || path.startsWith(`${BASE.toLowerCase()}/`))) {
    path = path.slice(BASE.length);
  }
  path = path.replace(/\/index\.html?$/, "/").replace(/\/+$/, "");
  return path === "" ? "/" : path;
}

// Адрес для href и History API (с учётом папки сайта)
export function href(to) {
  return `${BASE}${to}` || "/";
}

// Адрес файла из public/ (скриншоты) — тоже с учётом папки сайта
export const asset = href;

function currentPath() {
  return normalize(window.location.pathname);
}

function notify() {
  window.dispatchEvent(new PopStateEvent("popstate"));
}

export function navigate(to) {
  if (currentPath() !== normalize(href(to))) {
    window.history.pushState({}, "", href(to));
    notify();
  }
  // сразу наверх, без плавной прокрутки через всю новую страницу
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}

// Заменяет адрес в строке браузера на канонический: /StarWise/ → /starwise, /index.html → /
export function canonicalize(to) {
  const { pathname, search, hash } = window.location;
  if (pathname !== href(to)) {
    window.history.replaceState(window.history.state, "", `${href(to)}${search}${hash}`);
  }
}

export function usePath() {
  const [path, setPath] = useState(currentPath);
  useEffect(() => {
    // Синхронно: при «Назад» браузер восстанавливает прокрутку уже на готовой странице
    const onChange = () => flushSync(() => setPath(currentPath()));
    window.addEventListener("popstate", onChange);
    return () => window.removeEventListener("popstate", onChange);
  }, []);
  return path;
}

// Внутренняя ссылка без перезагрузки страницы
export function Link({ to, className, children, onClick, ...rest }) {
  const handleClick = (event) => {
    onClick?.(event);
    // Открытие в новой вкладке (Ctrl/Cmd/средняя кнопка) оставляем браузеру
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    navigate(to);
  };
  return (
    <a href={href(to)} className={className} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
