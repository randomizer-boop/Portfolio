import { ui } from "../content/ui";
import { pick } from "../i18n";

export default function Decisions({ project, lang }) {
  const { decisions, decisionsNote } = project;
  return (
    <section className="container decisions" id="engineering">
      <div className="section-head">
        <div className="eyebrow">{pick(ui.underTheHood, lang)}</div>
        <h2>{pick(ui.decisionsTitle, lang)}</h2>
      </div>

      <div className="decision-grid">
        {decisions.map((item, i) => (
          <div key={i} className="decision">
            <span className="decision-num">{String(i + 1).padStart(2, "0")}</span>
            <h3>{pick(item.title, lang)}</h3>
            <p>{pick(item.text, lang)}</p>
          </div>
        ))}
      </div>

      {decisionsNote && <p className="decision-note">{pick(decisionsNote, lang)}</p>}
    </section>
  );
}
