import React from "react";
import { Rahmen } from "./layout";
import { Vote, ExternalLink } from "lucide-react";

const Fuss = () => (
  <footer className="border-t bg-white">
    <Rahmen>
      <div className="grid gap-8 py-10 md:grid-cols-4">
        <div>
          <div className="inline-flex items-center gap-2 font-semibold"><Vote className="h-5 w-5 text-blue-600"/> Europäische Digitalpartei</div>
          <p className="mt-3 text-sm text-slate-600">Die Zukunft der Demokratie ist überprüfbar, inklusiv und effizient.</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Navigation</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {[
              ["Mission", "mission"],
              ["Programm", "programm"],
              ["Fahrplan", "fahrplan"],
              ["Quellen", "quellen"],
            ].map(([label, id]) => (
              <li key={id}><a className="hover:text-slate-900" href={`#${id}`}>{label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Rechtliches</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><a className="hover:text-slate-900" href="#">Datenschutz</a></li>
            <li><a className="hover:text-slate-900" href="#">Impressum</a></li>
            <li><a className="hover:text-slate-900" href="#">Nutzungsbedingungen</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Kontakt</h3>
          <div className="mt-3 flex gap-2">
            <a href="mailto:kontakt@europeandigital.party" className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50">
              <ExternalLink className="h-4 w-4"/> E‑Mail
            </a>
            <a href="#quellen" className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50">
              <ExternalLink className="h-4 w-4"/> Quellen
            </a>
          </div>
        </div>
      </div>
      <div className="border-t py-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} Europäische Digitalpartei. Alle Rechte vorbehalten.</div>
    </Rahmen>
  </footer>
);

export default Fuss;

