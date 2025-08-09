import React from "react";
import { Abschnitt, Rahmen } from "./layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FAQ = () => (
  <Abschnitt id="faq" klasse="bg-white">
    <Rahmen>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">Fragen & Antworten</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {[
          [
            "Ist das mit dem Grundgesetz vereinbar?",
            "Ja. Direkte Demokratie ist auf Bundes‑ und Länderebene gestaltbar. Digitale Verfahren ersetzen nicht Parlamente, sondern ergänzen sie und bleiben verfassungskonform: je nach Thema ist eine einfache oder qualifizierte Mehrheit erforderlich.",
          ],
          [
            "Wie schützt ihr die Anonymität?",
            "Unsere Abstimmung nutzt Zero‑Knowledge‑Beweise. Die Gültigkeit Ihrer Stimme wird kryptografisch bestätigt, ohne Ihre Identität offenzulegen. Die Prüf‑Spur enthält nur verschlüsselte Belege; Rückschlüsse auf einzelne Personen sind technisch ausgeschlossen.",
          ],
          [
            "Braucht man dafür Kryptowährungen?",
            "Nein. Es gibt keine spekulativen Token. Wir verwenden genehmigte, energieeffiziente Blockchains ausschließlich für Integrität und Prüfbarkeit – ohne Mining und ohne finanzielles Risiko.",
          ],
          [
            "Wer kontrolliert die KI?",
            "Künstliche Intelligenz ist ein Werkzeug, kein Entscheider. Wir setzen auf offenen Quellcode, Protokollierung, menschliche Letztentscheidung und unabhängige Audits. Bürgerinnen und Bürger können Fehler melden; Verzerrungen werden regelmäßig geprüft und die Systeme laufend verbessert.",
          ],
          [
            "Warum lohnt sich Digitalisierung wirtschaftlich?",
            "Digitale Prozesse sparen erhebliche Ressourcen: Laut internationalen Studien sind Online‑Verfahren im Durchschnitt 74 % schneller und 95 % günstiger als analoge Wege. KI‑Assistenz reduziert administrative Kosten um etwa 27 %. Weniger Papier, weniger Fahrten und weniger Wartezeiten entlasten die Staatskasse und Ihr Portemonnaie gleichermaßen.",
          ],
          [
            "Sind KI und Automatisierung ein Jobkiller?",
            "Nein. KI übernimmt monotone Routinetätigkeiten und unterstützt Sachbearbeitende, damit diese sich auf komplexe Fälle und persönliche Beratung konzentrieren können. Studien, etwa vom MIT, zeigen moderate Produktivitätsgewinne (ca. 1–1,6 % BIP); sie sehen keine massenhafte Arbeitsplatzvernichtung. Zudem entstehen neue Jobs in IT, Service und Betreuung.",
          ],
          [
            "Warum überhaupt Blockchain?",
            "Eine genehmigte Blockchain schafft fälschungssichere Protokolle und reduziert Bürokratie. Unveränderliche Einträge sorgen dafür, dass Entscheidungen transparent nachvollziehbar sind, ohne personenbezogene Daten preiszugeben. So wird Korruption erschwert, Vertrauen gestärkt und Bearbeitungszeit verkürzt: Pilotprojekte zeigen Reduktionen von 40 auf 10 Tage und Kostenersparnisse von bis zu 80 %.",
          ],
          [
            "Wie können ältere oder weniger technikaffine Menschen teilnehmen?",
            "Unsere Lösungen werden barrierearm gestaltet, mit klarer Sprache, großen Bedienelementen und Hilfefunktionen. Es gibt lokale Servicepunkte, mobile Bürgermobile und Telefon‑Hotlines, die beim Ausfüllen helfen. Wer analog bleiben möchte, kann weiterhin per Brief oder vor Ort abstimmen – die Ergebnisse werden digital zusammengeführt. Begleitprogramme und Schulungen erleichtern zusätzlich den Einstieg.",
          ],
        ].map(([q, a], i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle className="text-slate-800">{q}</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 text-sm">{a}</CardContent>
          </Card>
        ))}
      </div>
    </Rahmen>
  </Abschnitt>
);

export default FAQ;

