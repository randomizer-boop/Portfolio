import { ui } from "../content/ui";
import { pick } from "../i18n";

function Card({ title, note, items, lang }) {
  return (
    <div className="stack-card">
      <div className="stack-card-head">
        <h3>{title}</h3>
        <span>{note}</span>
      </div>
      {items.map((item) => (
        <div className="stack-row" key={item.name}>
          <span className="stack-name">{item.name}</span>
          <span className="stack-what">{pick(item.what, lang)}</span>
        </div>
      ))}
    </div>
  );
}

export default function Stack({ project, lang }) {
  const { stack } = project;
  return (
    <section className="container stack">
      <h2>{pick(ui.stackTitle, lang)}</h2>
      <div className="stack-grid">
        <Card
          title={pick(ui.frontend, lang)}
          note={pick(ui.frontendNote, lang)}
          items={stack.front}
          lang={lang}
        />
        <Card
          title={pick(ui.backend, lang)}
          note={pick(stack.backNote || ui.backendNote, lang)}
          items={stack.back}
          lang={lang}
        />
      </div>
    </section>
  );
}
