import about from "../content/about";
import { PROJECTS } from "../content";
import { ui } from "../content/ui";
import { site } from "../site.config";
import { pick } from "../i18n";
import { Link } from "../router";
import Header from "./Header";
import Footer from "./Footer";

export default function NotFound({ lang }) {
  const accent = {
    "--accent-fill": about.colors.fill,
    "--accent-text": about.colors.text,
    "--accent-on-dark": about.colors.onDark,
  };

  return (
    <div className="page" style={accent}>
      <Header current={null} lang={lang} />
      <main id="main" tabIndex={-1} className="container not-found">
        <span className="eyebrow">404</span>
        <h1>{pick(ui.notFound, lang)}</h1>
        <p className="not-found-text">{pick(ui.notFoundText, lang)}</p>
        <div className="actions">
          <Link to="/" className="btn btn-dark">
            {pick(ui.toHome, lang)}
          </Link>
          {PROJECTS.map((p) => (
            <Link key={p.id} to={p.path} className="text-link">
              {p.name}
            </Link>
          ))}
        </div>
      </main>

      <Footer project={about} lang={lang}>
        <span>
          © {new Date().getFullYear()} {pick(site.person, lang)}
        </span>
        <Link to="/" className="foot-link foot-link-strong">
          ← {pick(ui.about, lang)}
        </Link>
      </Footer>
    </div>
  );
}
