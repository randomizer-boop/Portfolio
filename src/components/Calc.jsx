import { ui } from "../content/ui";
import { pick } from "../i18n";

function Row({ row, lang }) {
  return (
    <div className="calc-row">
      <span className="calc-sign" aria-hidden="true">
        {row.sign}
      </span>
      <span className="calc-label">
        {pick(row.label, lang)}
        {row.hint && <small>{pick(row.hint, lang)}</small>}
      </span>
      <span className="calc-value">{pick(row.value, lang)}</span>
    </div>
  );
}

// Показывается вместо OwnerSide, если у проекта есть calc
export default function Calc({ project, demoUrl, lang }) {
  const { calc } = project;
  return (
    <section className="dark" id="calc">
      <div className="container dark-inner">
        <div className="dark-head">
          <div className="section-head">
            <div className="eyebrow">{pick(ui.howItCounts, lang)}</div>
            <h2>{pick(calc.title, lang)}</h2>
          </div>
          <div className="dark-cta">
            {demoUrl && (
              <a className="btn btn-accent" href={demoUrl} target="_blank" rel="noopener noreferrer">
                {pick(ui.openDemo, lang)} ↗
              </a>
            )}
            <span className="dark-note">{pick(calc.note, lang)}</span>
          </div>
        </div>

        <div className="calc">
          <div className="calc-ledger">
            {calc.rows.map((row, i) => (
              <Row key={i} row={row} lang={lang} />
            ))}
            <div className="calc-row calc-total">
              <span className="calc-sign" aria-hidden="true">
                =
              </span>
              <span className="calc-label">{pick(calc.total.label, lang)}</span>
              <span className="calc-value">{pick(calc.total.value, lang)}</span>
            </div>

            {calc.daily.map((row, i) => (
              <Row key={`d${i}`} row={row} lang={lang} />
            ))}
            <div className="calc-row calc-result">
              <span className="calc-sign" aria-hidden="true">
                =
              </span>
              <span className="calc-label">{pick(calc.result.label, lang)}</span>
              <span className="calc-value">{pick(calc.result.value, lang)}</span>
            </div>
          </div>

          <div className="calc-points">
            {calc.points.map((point, i) => (
              <div key={i} className="calc-point">
                <h3>{pick(point.title, lang)}</h3>
                <p>{pick(point.text, lang)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
