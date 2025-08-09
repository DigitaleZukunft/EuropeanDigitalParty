import React from "react";
import { Abschnitt, Rahmen } from "./layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, ShieldCheck, Blocks, Check } from "lucide-react";

const Loesung = () => (
  <Abschnitt id="loesung" klasse="bg-white">
    <Rahmen>
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Die Lösung: schlanke Regeln, smarte Abläufe, sichere Abstimmungen</h2>
        <p className="mt-3 text-slate-700">
          EDP setzt auf eine kombinierte Reform von Recht, IT und Prozessen: veraltete Regeln vereinfachen, digitale Verfahren einführen und Arbeitsabläufe neu denken. Technologie ist dabei kein Selbstzweck, sondern Werkzeug, um messbare Verbesserungen zu erzielen. Durch künstliche Intelligenz und Blockchain schaffen wir schnellere Entscheidungen, sparen Geld und Papier, senken den CO₂‑Fußabdruck und erhöhen gleichzeitig die Transparenz und Sicherheit der Beteiligten. So werden Verwaltung und Demokratie nicht nur moderner, sondern auch wirtschaftlicher und menschlicher.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {[
          { icon: <Cpu className="h-5 w-5"/>, title: "KI‑Assistenz", points: ["Dokumente prüfen und Vorbescheide erzeugen","Formulare vorausfüllen, Medienbrüche vermeiden","Argumente strukturieren und Faktenprüfungen vorschlagen"] },
          { icon: <ShieldCheck className="h-5 w-5"/>, title: "ZK‑Abstimmung", points: [
            "Wahlgeheimnis mit Zero‑Knowledge",
            "Öffentlich prüfbarer Stimmnachweis",
            <span key="r1">Angepasstes <a className="underline decoration-emerald-500 underline-offset-2" href="https://docs.rarimo.com/freedom-tool/" target="_blank" rel="noreferrer">Rarimo Freedom Tool</a> für ZK‑Pässe</span>,
          ] },
          { icon: <Blocks className="h-5 w-5"/>, title: "Prüf‑Blockchain", points: ["Unveränderliche Protokolle (nur schreiben)","Behördenverbund: genehmigt und föderiert","DSGVO‑konforme Trennung: Identität ≠ Stimme"] },
        ].map((b, i) => (
          <Card key={i} className="hover:shadow-xl transition">
            <CardHeader><CardTitle className="flex items-center gap-2">{b.icon}{b.title}</CardTitle></CardHeader>
            <CardContent>
              <ul className="space-y-2 text-slate-700">
                {b.points.map((p, j) => (
                  <li key={j} className="flex items-start gap-2"><Check className="mt-1 h-4 w-4 text-emerald-600"/>{p}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Rahmen>
  </Abschnitt>
);

export default Loesung;

