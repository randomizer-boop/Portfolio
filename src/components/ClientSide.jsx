import { ui } from "../content/ui";
import { pick } from "../i18n";
import { asset } from "../router";
import { BrowserFrame, PhoneFrame } from "./Frames";

export function Visual({ visual, lang }) {
  const images = visual.images[lang] || visual.images.ru;
  const alt = (i) => pick(visual.alts[i], lang);

  if (visual.type === "phones") {
    return (
      <div className="visual visual-phones">
        <PhoneFrame src={images[0]} alt={alt(0)} />
        <PhoneFrame src={images[1]} alt={alt(1)} className="phone-shift" />
      </div>
    );
  }

  if (visual.type === "desktop-phone") {
    return (
      <div className="visual visual-combo">
        <BrowserFrame bar={pick(visual.bar, lang)} className="combo-desktop">
          <img src={asset(images[0])} alt={alt(0)} loading="lazy" />
        </BrowserFrame>
        <PhoneFrame src={images[1]} alt={alt(1)} className="combo-phone" />
      </div>
    );
  }

  return (
    <div className="visual">
      <BrowserFrame bar={pick(visual.bar, lang)}>
        <img src={asset(images[0])} alt={alt(0)} loading="lazy" />
      </BrowserFrame>
    </div>
  );
}

export default function ClientSide({ project, lang }) {
  const { client } = project;
  return (
    <section className="container client">
      <div className="client-inner">
        <div className="client-text">
          <div className="section-head">
            <div className="eyebrow">{pick(ui.clientSide, lang)}</div>
            <h2>{pick(client.title, lang)}</h2>
          </div>

          <ol className="steps">
            {client.steps.map((step, i) => (
              <li key={i}>
                <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
                <div className="step-body">
                  <strong>{pick(step.title, lang)}</strong>
                  <span className="step-text">{pick(step.text, lang)}</span>
                  <div className="step-tech">
                    {step.front && (
                      <span>
                        <b>{pick(ui.front, lang)}</b> · {pick(step.front, lang)}
                      </span>
                    )}
                    {step.back && (
                      <span>
                        <b>{pick(ui.back, lang)}</b> · {pick(step.back, lang)}
                      </span>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <Visual visual={client.visual} lang={lang} />
      </div>
    </section>
  );
}
