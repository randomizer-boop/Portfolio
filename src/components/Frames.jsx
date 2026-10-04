import { asset } from "../router";

export function BrowserFrame({ bar, dark = false, className = "", children }) {
  return (
    <div className={`browser${dark ? " browser-dark" : ""} ${className}`}>
      <div className="browser-bar">
        <span className="browser-dot" />
        <span className="browser-dot" />
        <span className="browser-dot" />
        <span className="browser-title">{bar}</span>
      </div>
      {children}
    </div>
  );
}

export function PhoneFrame({ src, alt, className = "" }) {
  return (
    <div className={`phone ${className}`}>
      <img src={asset(src)} alt={alt} loading="lazy" />
    </div>
  );
}
