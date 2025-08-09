import React from "react";
import { Abschnitt, Rahmen } from "./layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Abstimmungen = () => (
  <Abschnitt id="abstimmungen" klasse="bg-slate-50">
    <Rahmen>
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Digitale Volksabstimmungen auf allen Ebenen</h2>
        <p className="mt-3 text-slate-700">
          Gemeinde, Land, Bund und EU: Rechtssichere, anonyme und überprüfbare Abstimmungen werden digital nicht nur sicherer, sondern auch deutlich günstiger und schneller. Digitale Volksentscheide sparen Druck‑, Porto‑ und Auszählkosten und senken den Aufwand um bis zu 95 %; sie beschleunigen Verfahren um durchschnittlich 74 % und ermöglichen eine flexible Stimmabgabe von zu Hause, aus dem Rathaus oder per Brief. Kernbaustein ist ein angepasster <a className="underline decoration-emerald-500 underline-offset-2" href="https://docs.rarimo.com/freedom-tool/" target="_blank" rel="noreferrer">Rarimo Freedom Tool</a>‑ZK‑Pass für Stimmberechtigte, der das Wahlgeheimnis schützt und trotzdem den Nachweis der Gültigkeit zulässt.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Identität",
            text: (
              <>
                Die Stimmberechtigung wird per eIDAS/Online‑Ausweis lokal geprüft – ohne zentrales Personenregister. Behörden erhalten nur die Information, dass eine Person wahlberechtigt ist, nicht aber wie sie abgestimmt hat. Für alle ohne eigenes Endgerät stehen Terminals in Rathäusern oder mobilen Bürgermobilen bereit.
              </>
            ),
          },
          {
            title: "Abstimmung",
            text: (
              <>
                Über einen Zero‑Knowledge‑Beweis wird die Gültigkeit der Stimme nachgewiesen, während die Identität verborgen bleibt. Die Oberfläche ist barrierearm, funktioniert auf Smartphone, PC oder Tablet und bietet für ältere Menschen optionale Unterstützung durch Hotline oder persönliche Hilfe vor Ort. Papierstimmzettel können weiterhin genutzt und digital mitgezählt werden – für maximale Inklusion.
              </>
            ),
          },
          {
            title: "Prüfung",
            text: (
              <>
                Jede Abstimmung erzeugt einen öffentlich einsehbaren Nachweis auf einer genehmigten, energieeffizienten Blockchain. Damit kann jeder ohne Spezialwissen überprüfen, ob seine Stimme gezählt wurde und ob das Gesamtergebnis korrekt zustande kam. Die Prüfbarkeit funktioniert ohne Rückschluss auf die Person und ermöglicht so Vertrauen ohne Überwachung.
              </>
            ),
          },
        ].map((s, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>{s.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700">{s.text}</CardContent>
          </Card>
        ))}
      </div>
    </Rahmen>
  </Abschnitt>
);

export default Abstimmungen;

