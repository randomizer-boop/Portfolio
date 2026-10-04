import about from "../content/about";
import { PROJECTS } from "../content";
import { ui } from "../content/ui";
import { site } from "../site.config";
import { pick } from "../i18n";
import { Link } from "../router";
import Header from "./Header";
import Footer from "./Footer";
import { Visual } from "./ClientSide";

const external = { target: "_blank", rel: "noopener noreferrer" };

function ProjectCard({ project, lang }) {
  const { card } = project;
  const links = site.links[project.id] || {};
  const role = pick(site.meta[project.id]?.role, lang);

  return (
    <article className="case" style={{ "--case-color": project.colors.fill, "--case-text": project.colors.text }}>
      <span className="case-num">{project.num}</span>

      <div className="case-body">
        <span className="case-tag">
          <span className="case-dot" />
          {pick(project.tag, lang)}
          {project.status && <span className="status-badge">{pick(project.status.value, lang)}</span>}
        </span>
        <h3 className="case-name">
          <Link to={project.path}>{project.name}</Link>
        </h3>
        <p className="case-lead">{pick(card.what, lang)}</p>

        <dl className="case-spec">
          <div>
            <dt>{pick(ui.problem, lang)}</dt>
            <dd>{pick(card.problem, lang)}</dd>
          </div>
          {role && (
            <div>
              <dt>{pick(ui.role, lang)}</dt>
              <dd className="case-role">{role}</dd>
            </div>
          )}
          <div>
            <dt>{pick(ui.stack, lang)}</dt>
            <dd className="case-stack">{card.stack.join(" · ")}</dd>
          </div>
          <div>
            <dt>{pick(ui.highlights, lang)}</dt>
            <dd>
              <ul className="case-points">
                {card.highlights.map((item, i) => (
                  <li key={i}>{pick(item, lang)}</li>
                ))}
              </ul>
            </dd>
          </div>
          {project.demo && (
            <div>
              <dt>{pick(ui.inDemo, lang)}</dt>
              <dd>{pick(project.demo, lang)}</dd>
            </div>
          )}
        </dl>

        <div className="case-links">
          <Link to={project.path} className="btn btn-dark btn-sm">
            {pick(ui.caseStudy, lang)} →
          </Link>
          {links.demo && (
            <a className="btn btn-outline btn-sm" href={links.demo} {...external}>
              {pick(project.demoLabel === "openSite" ? ui.site : ui.demo, lang)} ↗
            </a>
          )}
          {links.admin && (
            <a className="text-link" href={links.admin} {...external}>
              {pick(ui.demoAdmin, lang)} ↗
            </a>
          )}
          {links.repo && (
            <a className="text-link" href={links.repo} {...external}>
              GitHub ↗
            </a>
          )}
        </div>
      </div>

      <Link to={project.path} className="case-visual" aria-label={`${project.name}: ${pick(ui.caseStudy, lang)}`}>
        <Visual visual={card.visual} lang={lang} />
      </Link>
    </article>
  );
}

export default function HomePage({ lang }) {
  const { email, github, linkedin, telegram } = site.contacts;
  const githubName = github.replace(/\/+$/, "").split("/").pop();
  const linkedinName = linkedin.replace(/\/+$/, "").split("/").pop();
  const handle = telegram.replace(/^@/, "");
  const roleParts = about.title[lang] || about.title.ru;

  const accent = {
    "--accent-fill": about.colors.fill,
    "--accent-text": about.colors.text,
    "--accent-on-dark": about.colors.onDark,
  };

  return (
    <div className="page" style={accent}>
      <Header current="about" lang={lang} />

      <main id="main" tabIndex={-1}>
        <header className="container hero hero-home">
          <div className="hero-main">
            <div className="eyebrow-row">
              <span className="dot" />
              <span>{pick(about.eyebrow, lang)}</span>
            </div>
            <h1 className="hero-title">
              <span className="hero-hello">{pick(ui.hello, lang)}</span>
              {pick(site.person, lang)}
            </h1>
            <p className="hero-role">
              {roleParts.map((part, i) => (
                <span key={part}>
                  {part}
                  {i < roleParts.length - 1 && " ·"}
                </span>
              ))}
            </p>
            <p className="hero-lead">{pick(about.lead, lang)}</p>

            <ul className="hero-core" aria-label={pick(about.stackTitle, lang)}>
              {about.core.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="actions">
              <a className="btn btn-dark" href="#projects">
                {pick(ui.seeProjects, lang)} ↓
              </a>
              {github && (
                <a className="btn btn-outline" href={github} {...external}>
                  GitHub ↗
                </a>
              )}
              {linkedin && (
                <a className="btn btn-outline" href={linkedin} {...external}>
                  LinkedIn ↗
                </a>
              )}
              {handle && (
                <a className="text-link" href={`https://t.me/${handle}`} {...external}>
                  Telegram ↗
                </a>
              )}
              {email && (
                <a className="text-link" href={`mailto:${email}`}>
                  {pick(ui.writeEmail, lang)}
                </a>
              )}
            </div>
          </div>

          <dl className="meta">
            {about.meta.map((row, i) => (
              <div key={i}>
                <dt>{pick(row.label, lang)}</dt>
                <dd>{pick(row.value, lang)}</dd>
              </div>
            ))}
            {email && (
              <div>
                <dt>{pick(ui.email, lang)}</dt>
                <dd>
                  <a href={`mailto:${email}`}>{email}</a>
                </dd>
              </div>
            )}
            {handle && (
              <div>
                <dt>Telegram</dt>
                <dd>
                  <a href={`https://t.me/${handle}`} {...external}>
                    @{handle}
                  </a>
                </dd>
              </div>
            )}
            {github && (
              <div>
                <dt>GitHub</dt>
                <dd>
                  <a href={github} {...external}>
                    {githubName}
                  </a>
                </dd>
              </div>
            )}
            {linkedin && (
              <div>
                <dt>LinkedIn</dt>
                <dd>
                  <a href={linkedin} {...external}>
                    {linkedinName}
                  </a>
                </dd>
              </div>
            )}
          </dl>
        </header>

        <section className="container cases" id="projects">
          <div className="cases-head">
            <h2>{pick(about.casesTitle, lang)}</h2>
            <p>{pick(about.casesNote, lang)}</p>
          </div>

          <div className="case-list">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} lang={lang} />
            ))}
          </div>
        </section>

        <section className="dark" id="profile">
          <div className="container dark-inner">
            <div className="dark-head">
              <div className="section-head">
                <div className="eyebrow">{pick(ui.profile, lang)}</div>
                <h2>{pick(about.profileTitle, lang)}</h2>
              </div>
              <p className="profile-note">{pick(about.profileNote, lang)}</p>
            </div>

            <div className="profile-grid">
              {about.profile.map((item, i) => (
                <div key={i} className="profile-item">
                  <span className="profile-num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{pick(item.title, lang)}</h3>
                  <p>{pick(item.text, lang)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container skills-section" id="stack">
          <h2 className="skills-title">{pick(about.stackTitle, lang)}</h2>
          <div className="skills">
            {about.stack.map((group, i) => (
              <div key={i} className="skill-group">
                <h3>{pick(group.title, lang)}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer project={about} lang={lang}>
        <span>
          © {new Date().getFullYear()} {pick(site.person, lang)}
        </span>
        <a href="#projects" className="foot-link foot-link-strong">
          {pick(ui.projects, lang)} ↑
        </a>
      </Footer>
    </div>
  );
}
