import { ui } from "../content/ui";
import { pick } from "../i18n";

export default function Arch({ project, lang }) {
  const { arch } = project;
  return (
    <section className="container arch" id="architecture">
      <div className="arch-inner">
        <div className="arch-head">
          <div className="eyebrow">{pick(ui.architecture, lang)}</div>
          <h2 className="arch-title">{pick(arch.title, lang)}</h2>
        </div>

        <ol className="flow" style={{ "--flow-count": arch.nodes.length }}>
          {arch.nodes.map((node, i) => (
            <li key={i} className="flow-node">
              <span className="flow-layer">{pick(node.layer, lang)}</span>
              <strong>{pick(node.name, lang)}</strong>
              <span className="flow-what">{pick(node.what, lang)}</span>
            </li>
          ))}
        </ol>

        {arch.note && <p className="arch-note">{pick(arch.note, lang)}</p>}
      </div>
    </section>
  );
}
