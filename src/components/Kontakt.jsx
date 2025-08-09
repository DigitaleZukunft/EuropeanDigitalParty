import React from "react";
import { Abschnitt, Rahmen } from "./layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Handshake, GitBranch, Map, Mail } from "lucide-react";

const Kontakt = () => (
  <Abschnitt id="kontakt" klasse="bg-slate-900 text-slate-100">
    <Rahmen>
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Mitmachen</h2>
          <p className="mt-3 text-slate-300">Ob Bürgerin, Gemeinde oder Verband – wir bauen Allianzen für praxisnahe Reformen. Wenn Sie das genauso sehen: Schließen Sie sich an. Denn Veränderung beginnt, wenn wir nicht mehr warten.</p>
          <ul className="mt-4 space-y-3 text-slate-200">
            <li className="flex items-start gap-2"><Handshake className="mt-1 h-4 w-4 text-emerald-400"/> Partner‑Programm für Kommunen</li>
            <li className="flex items-start gap-2"><GitBranch className="mt-1 h-4 w-4 text-emerald-400"/> Offener Quellcode & öffentliche Prüfungen</li>
            <li className="flex items-start gap-2"><Map className="mt-1 h-4 w-4 text-emerald-400"/> Werkstatt‑Reihen vor Ort</li>
          </ul>
          <div className="mt-6 flex gap-3">
            <Button asChild><a href="mailto:kontakt@europeandigital.party">E‑Mail senden</a></Button>
            <Button variant="secondary" asChild><a href="#quellen">Quellen ansehen</a></Button>
          </div>
        </div>
        <div>
          <Card className="bg-white/5">
            <CardHeader><CardTitle>Kurznachricht senden</CardTitle></CardHeader>
            <CardContent>
              <form className="grid gap-3">
                <div>
                  <label className="block text-sm">Name</label>
                  <input className="mt-1 w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Vor- und Nachname" />
                </div>
                <div>
                  <label className="block text-sm">E‑Mail</label>
                  <input type="email" className="mt-1 w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="name@example.org" />
                </div>
                <div>
                  <label className="block text-sm">Nachricht</label>
                  <textarea rows={4} className="mt-1 w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Wie können wir helfen?" />
                </div>
                <Button type="button" className="inline-flex items-center">
                  <Mail className="mr-2 h-4 w-4"/> Nachricht senden
                </Button>
                <p className="text-xs text-slate-400">* Formular ist eine Demo. Backend‑Anbindung (z. B. API) folgt im Projekt.</p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Rahmen>
  </Abschnitt>
);

export default Kontakt;

