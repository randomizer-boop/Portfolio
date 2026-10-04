import { ui } from "../content/ui";
import { pick } from "../i18n";
import { asset } from "../router";
import { BrowserFrame } from "./Frames";

export default function OwnerSide({ project, adminUrl, lang }) {
  const { owner } = project;
  return (
    <section className="dark" id="admin">
      <div className="container dark-inner">
        <div className="dark-head">
          <div className="section-head">
            <div className="eyebrow">{pick(ui.ownerSide, lang)}</div>
            <h2>{pick(owner.title, lang)}</h2>
          </div>
          <div className="dark-cta">
            {adminUrl && (
              <a className="btn btn-accent" href={adminUrl} target="_blank" rel="noopener noreferrer">
                {pick(ui.openDemoAdmin, lang)} ↗
              </a>
            )}
            <span className="dark-note">{pick(owner.note, lang)}</span>
          </div>
        </div>

        <BrowserFrame bar={owner.bar} dark>
          <div className="shot">
            <img src={asset(owner.image)} alt={pick(owner.alt, lang)} loading="lazy" />
            {owner.markers.map((m, i) => (
              <span
                key={i}
                className="marker marker-sm"
                style={{ left: `${m.x}%`, top: `${m.y}%` }}
                aria-hidden="true"
              >
                {i + 1}
              </span>
            ))}
          </div>
        </BrowserFrame>

        <div className="legend">
          {owner.legend.map((item, i) => (
            <div key={i} className="legend-item">
              <span className="marker" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{pick(item.title, lang)}</h3>
              <p>{pick(item.text, lang)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
