import { ui } from "../content/ui";
import { site } from "../site.config";
import { pick } from "../i18n";
import { Link } from "../router";
import Header from "./Header";
import ClientSide from "./ClientSide";
import OwnerSide from "./OwnerSide";
import Calc from "./Calc";
import Arch from "./Arch";
import Decisions from "./Decisions";
import Stack from "./Stack";
import Footer from "./Footer";

// Цвет акцента страницы берётся из проекта (colors)
export default function ProjectPage({ project, next, prev, isLast, lang }) {
  const links = site.links[project.id] || {};
  const meta = site.meta[project.id] || {};
  const role = pick(meta.role, lang);
  const term = pick(meta.term, lang);
  const { status } = project;

  const accent = {
    "--accent-fill": project.colors.fill,
    "--accent-text": project.colors.text,
    "--accent-on-dark": project.colors.onDark,
  };

  return (
    <div className="page" style={accent}>
      <Header current={project.id} lang={lang} />

      <main id="main" tabIndex={-1}>
        <header className="container hero">
          <div className="hero-main">
            <div className="eyebrow-row">
              <span>{project.num}</span>
              <span className="dot" />
              <span>{pick(project.tag, lang)}</span>
              {status && <span className="status-badge">{pick(status.label, lang)}</span>}
            </div>
            <h1 className="hero-title">{project.name}</h1>
            <p className="hero-lead">{pick(project.lead, lang)}</p>
            {status?.note && <p className="status-note">{pick(status.note, lang)}</p>}

            <div className="actions">
              {links.demo && (
                <a className="btn btn-dark" href={links.demo} target="_blank" rel="noopener noreferrer">
                  {pick(ui[project.demoLabel], lang)} ↗
                </a>
              )}
              {links.admin && (
                <a className="btn btn-outline" href={links.admin} target="_blank" rel="noopener noreferrer">
                  {pick(ui.demoAdmin, lang)} ↗
                </a>
              )}
              {links.bot && (
                <a className="text-link" href={links.bot} target="_blank" rel="noopener noreferrer">
                  {pick(ui.bot, lang)} ↗
                </a>
              )}
              {links.tiktok && (
                <a className="text-link" href={links.tiktok} target="_blank" rel="noopener noreferrer">
                  TikTok ↗
                </a>
              )}
              {links.apiDocs && (
                <a className="text-link" href={links.apiDocs} target="_blank" rel="noopener noreferrer">
                  {pick(ui.apiDocs, lang)} ↗
                </a>
              )}
              {links.repo && (
                <a className="text-link" href={links.repo} target="_blank" rel="noopener noreferrer">
                  {pick(ui.code, lang)} ↗
                </a>
              )}
            </div>
          </div>

          <dl className="meta">
            {status && (
              <div>
                <dt>{pick(ui.status, lang)}</dt>
                <dd>{pick(status.value, lang)}</dd>
              </div>
            )}
            <div>
              <dt>{pick(ui.format, lang)}</dt>
              <dd>{pick(project.format, lang)}</dd>
            </div>
            {role && (
              <div>
                <dt>{pick(ui.role, lang)}</dt>
                <dd>{role}</dd>
              </div>
            )}
            {term && (
              <div>
                <dt>{pick(ui.term, lang)}</dt>
                <dd>{term}</dd>
              </div>
            )}
            {project.demo && (
              <div>
                <dt>{pick(ui.inDemo, lang)}</dt>
                <dd>{pick(project.demo, lang)}</dd>
              </div>
            )}
            <div>
              <dt>{pick(project.extraMeta.label, lang)}</dt>
              <dd>{pick(project.extraMeta.value, lang)}</dd>
            </div>
          </dl>
        </header>

        {project.arch && <Arch project={project} lang={lang} />}

        <ClientSide project={project} lang={lang} />

        {project.owner && <OwnerSide project={project} adminUrl={links.admin} lang={lang} />}
        {project.calc && <Calc project={project} demoUrl={links.demo} lang={lang} />}

        {project.decisions && <Decisions project={project} lang={lang} />}

        <Stack project={project} lang={lang} />
      </main>

      <Footer project={project} lang={lang}>
        {prev ? (
          <Link to={prev.path} className="foot-link">
            ← {prev.name}
          </Link>
        ) : (
          <Link to="/" className="foot-link">
            ← {pick(ui.about, lang)}
          </Link>
        )}
        <Link to={next.path} className="foot-link foot-link-strong">
          {pick(isLast ? ui.firstProject : ui.nextProject, lang)}: {next.name} →
        </Link>
      </Footer>
    </div>
  );
}
