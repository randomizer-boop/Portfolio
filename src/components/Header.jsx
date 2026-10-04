import { useEffect, useRef } from "react";
import { PROJECTS } from "../content";
import { ui } from "../content/ui";
import { site } from "../site.config";
import { LANGS, setLang, pick } from "../i18n";
import { Link } from "../router";

export function Wave({ color = "currentColor", size = 30 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke={color}
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M3 20c4.5 0 7-2.6 8.2-6.6C12.6 8.8 16 6.4 20.5 7c-2.6 1-4 3-3.6 5.6.5 3.4 4 5.6 12.1 5.4" />
      <path d="M3 25.5c2.6 0 2.6-1.8 5.2-1.8s2.6 1.8 5.2 1.8 2.6-1.8 5.2-1.8 2.6 1.8 5.2 1.8 2.6-1.8 5.2-1.8" />
    </svg>
  );
}

export function LangSwitch({ lang }) {
  return (
    <div className="lang-switch" role="group" aria-label={pick(ui.language, lang)}>
      {LANGS.map((code) => (
        <button
          key={code}
          type="button"
          lang={code}
          className={lang === code ? "is-active" : ""}
          aria-pressed={lang === code}
          onClick={() => setLang(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default function Header({ current, lang }) {
  const isHome = current === "about";

  // На телефоне вкладки листаются вбок — показываем активную
  const tabsRef = useRef(null);
  useEffect(() => {
    const box = tabsRef.current;
    const active = box?.querySelector('[aria-current="page"]');
    if (!active || box.scrollWidth <= box.clientWidth) return;
    box.scrollLeft = active.offsetLeft - (box.clientWidth - active.offsetWidth) / 2;
  }, [current]);

  return (
    <div className="container">
      <a href="#main" className="skip-link">
        {pick(ui.skip, lang)}
      </a>
      <nav className="nav" aria-label={pick(ui.mainNav, lang)}>
        <Link
          to="/"
          className="wordmark"
          aria-label={`${site.brand} — ${pick(ui.homeLink, lang)}`}
        >
          <span className="wordmark-wave">
            <Wave />
          </span>
          <span>{site.brand}</span>
        </Link>

        <div className="tabs" ref={tabsRef}>
          <Link to="/" className={`tab${isHome ? " is-active" : ""}`} aria-current={isHome ? "page" : undefined}>
            {pick(ui.about, lang)}
          </Link>
          {PROJECTS.map((p) => (
            <Link
              key={p.id}
              to={p.path}
              className={`tab${current === p.id ? " is-active" : ""}`}
              aria-current={current === p.id ? "page" : undefined}
            >
              <span className="tab-num">{p.num}</span>
              {p.name}
            </Link>
          ))}
        </div>

        <div className="nav-right">
          <LangSwitch lang={lang} />
          <a href="#contact" className="btn btn-outline btn-sm">
            {pick(ui.discuss, lang)}
          </a>
        </div>
      </nav>
    </div>
  );
}
