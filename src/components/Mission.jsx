import React from "react";
import { Abschnitt, Rahmen } from "./layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Blocks, Users2 } from "lucide-react";

const Mission = () => (
  <Abschnitt id="mission" klasse="bg-white">
    <Rahmen>
      <div className="grid gap-8 md:grid-cols-3">
        {[
          {
            icon: <Cpu className="h-5 w-5"/>,
            title: "Effiziente Verwaltung",
            text: (
              <>
                KI‑gestützte Systeme verkürzen Wartezeiten dramatisch, beseitigen Doppelarbeit und helfen bei der Antragstellung. Automatisch vorausgefüllte Formulare, intelligente Checklisten und Plausibilitätsprüfungen sorgen dafür, dass Fehler früh erkannt werden. Studien zeigen, dass digitale Verfahren im Schnitt 74 % schneller und 95 % günstiger sind als Papierwege und im Schnitt rund 27 % der administrativen Kosten einsparen – so bleibt mehr Zeit für die menschliche Beratung und mehr Geld in der öffentlichen Kasse.
              </>
            ),
          },
          {
            icon: <Blocks className="h-5 w-5"/>,
            title: "Nachvollziehbare Prozesse",
            text: (
              <>
                Genehmigte Blockchains erzeugen eine fälschungssichere Prüf‑Spur: Entscheidungen werden unveränderlich protokolliert und sind für alle nachvollziehbar. Durch föderierte Ketten und Zero‑Knowledge‑Technologie lassen sich Datenschutz und Transparenz zugleich gewährleisten. Forschung und Praxis zeigen, dass die digitale Archivierung Korruption reduziert, Vertrauen stärkt und zugleich Aufwand und Kosten in der Verwaltung deutlich senkt.
              </>
            ),
          },
          {
            icon: <Users2 className="h-5 w-5"/>,
            title: "Direkte Teilhabe",
            text: (
              <>
                Barrierearme, sichere Abstimmungen ermöglichen Bürgerinnen und Bürgern jeder Generation die Teilnahme – egal ob vom Dorf oder aus der Stadt. Online‑Volksentscheide ergänzen Parlamente, nicht ersetzen sie: Wer möchte, kann weiterhin per Post abstimmen; wer digital wählt, spart Porto, Papier und Wege. So wird direkte Demokratie endlich inklusiv und erreicht auch Menschen mit Mobilitäts‑ oder Zeitbeschränkungen.
              </>
            ),
          },
        ].map((f, i) => (
          <Card key={i} className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-800">{f.icon}{f.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600">{f.text}</CardContent>
          </Card>
        ))}
      </div>
    </Rahmen>
  </Abschnitt>
);

export default Mission;

