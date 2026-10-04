import { useEffect, useRef } from "react";
import { PROJECTS } from "./content";
import { site } from "./site.config";
import { useLang } from "./i18n";
import { usePath, canonicalize } from "./router";
import HomePage from "./components/HomePage";
import ProjectPage from "./components/ProjectPage";
import NotFound from "./components/NotFound";

// Запрет индексации для страницы 404 (тег создаётся и убирается на лету)
function setNoIndex(on) {
  let tag = document.head.querySelector('meta[name="robots"]');
  if (on) {
    if (!tag) {
      tag = document.createElement("meta");
      tag.name = "robots";
      document.head.appendChild(tag);
    }
    tag.content = "noindex";
  } else if (tag) {
    tag.remove();
  }
}

export default function App() {
  const lang = useLang();
  const path = usePath();
  const isHome = path === "/";
  const index = PROJECTS.findIndex((p) => p.path === path);
  const project = PROJECTS[index];
  const isNotFound = !isHome && !project;

  useEffect(() => {
    if (project) document.title = `${project.name} — ${site.brand}`;
    else if (isNotFound) document.title = `404 — ${site.brand}`;
    else document.title = site.brand;
    setNoIndex(isNotFound);
  }, [project, isNotFound, lang]);

  // /StarWise/ и /index.html открывают нужную страницу — адрес приводим к обычному виду
  useEffect(() => {
    if (!isNotFound) canonicalize(path);
  }, [path, isNotFound]);

  // После перехода между страницами фокус уходит на содержимое новой страницы:
  // клавиатура и скринридер начинают с её начала, а не с нажатой ссылки
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (window.location.hash) return;
    document.getElementById("main")?.focus({ preventScroll: true });
  }, [path]);

  if (isHome) {
    return <HomePage lang={lang} />;
  }

  if (!project) {
    return <NotFound lang={lang} />;
  }

  const next = PROJECTS[(index + 1) % PROJECTS.length];
  const prev = index > 0 ? PROJECTS[index - 1] : null;

  return (
    <ProjectPage
      key={project.id}
      project={project}
      next={next}
      prev={prev}
      isLast={index === PROJECTS.length - 1}
      lang={lang}
    />
  );
}
