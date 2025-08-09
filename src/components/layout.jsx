import React from "react";

export const Abschnitt = ({ id, klasse = "", children }) => (
  <section id={id} className={`scroll-mt-24 py-16 md:py-24 ${klasse}`}>{children}</section>
);

export const Rahmen = ({ children }) => (
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
);

export const Plakette = ({ children, intent = "primary" }) => (
  <span
    className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${
      intent === "primary"
        ? "bg-blue-50 text-blue-700 ring-blue-200"
        : intent === "green"
        ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
        : intent === "neutral"
        ? "bg-slate-50 text-slate-700 ring-slate-200"
        : "bg-amber-50 text-amber-700 ring-amber-200"
    }`}
  >
    {children}
  </span>
);

