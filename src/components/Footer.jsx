import { ui } from "../content/ui";
import { site } from "../site.config";
import { pick } from "../i18n";

export default function Footer({ project, lang, children }) {
  const { telegram, email, github, linkedin } = site.contacts;
  const handle = telegram.replace(/^@/, "");

  return (
    <footer className="footer" id="contact">
      <div className="container footer-inner">
        <div className="footer-top">
          <h2>{pick(project.cta, lang)}</h2>
          {(handle || email) && (
            <div className="contacts">
              {handle && (
                <a
                  className="contact contact-accent"
                  href={`https://t.me/${handle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{pick(ui.telegram, lang)}</span>
                  <span className="contact-value">@{handle}</span>
                </a>
              )}
              {email && (
                <a className="contact" href={`mailto:${email}`}>
                  <span>{pick(ui.email, lang)}</span>
                  <span className="contact-value">{email}</span>
                </a>
              )}
            </div>
          )}
        </div>

        {(github || linkedin) && (
          <div className="socials">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
            )}
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
            )}
          </div>
        )}

        <div className="footer-bottom">{children}</div>
      </div>
    </footer>
  );
}
