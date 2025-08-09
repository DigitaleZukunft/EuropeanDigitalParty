import React from "react";
import { Abschnitt, Rahmen } from "./layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Programm = () => (
  <Abschnitt id="programm" klasse="bg-slate-50">
    <Rahmen>
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Programm in 9 Punkten</h2>
          <p className="mt-3 text-slate-700">Konsequent. Messbar. Bürgernah.</p>
        </div>
        <Badge variant="secondary" className="text-xs">Version 1.0 (lebendes Dokument)</Badge>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {[
          [
            "1. Ein Verfahren, ein Konto",
            "Alle Verwaltungsleistungen werden über ein zentrales Bürgerkonto abgewickelt – egal ob Baugenehmigung, Vereinsgründung oder Gewerbeanmeldung. Statt zig Portale und Kennwörter gibt es ein einziges Dashboard mit transparentem Status‑Verlauf, Erinnerungsfunktion und sicheren Nachrichtenkanälen.",
          ],
          [
            "2. 180‑Tage‑Garantie",
            "Anträge dürfen nicht in der Warteschleife verschwinden. Klare Fristen geben Planbarkeit: Wird ein Verwaltungsakt nicht innerhalb von 180 Tagen entschieden, gilt der Antrag als automatisch genehmigt. Behörden werden so zu effizientem Handeln motiviert, Bürgerinnen und Unternehmer erhalten Rechtssicherheit.",
          ],
          [
            "3. Gesetze in Klartext",
            "Amtliche Texte müssen verständlich sein. Jede Regelung erhält eine verbindliche Version in einfacher Sprache und mit Beispielen. Diese Klartext‑Fassungen haben Rechtswirkung und erleichtern es allen – ob Laie oder Jurist –, ihre Rechte und Pflichten zu verstehen.",
          ],
          [
            "4. Daten nur einmal",
            "Das Once‑Only‑Prinzip beendet die Mehrfacheingabe: Daten werden einmal erfasst und über Register geteilt. Statt immer neue Nachweise hochzuladen, verknüpfen sich Register miteinander – natürlich datenschutzkonform. So sinkt der Aufwand für Bürger und Verwaltung, und es entstehen weniger Fehler.",
          ],
          [
            "5. Offene Regeln",
            "Verordnungen werden maschinenlesbar veröffentlicht und mit öffentlichen Testfällen hinterlegt. So können Unternehmen und Zivilgesellschaft Algorithmen entwickeln, die Gesetze automatisch anwenden, und Fehler in Normen schnell melden. Transparenz fördert Vertrauen und beschleunigt die Umsetzung.",
          ],
          [
            "6. Volksabstimmungen digital",
            "Ob Gemeinde, Land, Bund oder EU – digitale Volksentscheide mit Zero‑Knowledge‑Technologie werden Standard. Sie sind kostengünstig, barrierefrei und machen politische Beteiligung alltagstauglich. Wer möchte, kann weiterhin per Brief abstimmen; digital Teilnehmende profitieren von flexiblen Stimmzeiten und unmittelbarer Bestätigung.",
          ],
          [
            "7. Faires Nachverfolgen",
            "Durch Transparenz‑Tafeln und Kennzahlen werden Wartezeiten, Rückstände und Bearbeitungsqualität öffentlich. Vergleiche zwischen Ämtern schaffen Anreize zur Verbesserung. Die Daten werden in Echtzeit aktualisiert, damit sich Bürger informieren und Behörden voneinander lernen können.",
          ],
          [
            "8. KI in der Verwaltung",
            "Künstliche Intelligenz unterstützt Sachbearbeitende bei Routineaufgaben wie Dokumenten‑Erkennung, Plausibilitätsprüfungen und Recherche. Die finale Entscheidung bleibt beim Menschen. Dank Automatisierung sinken die Kosten, die Fehlerquote reduziert sich und die Mitarbeitenden gewinnen Zeit für komplexe Fälle und den direkten Kontakt.",
          ],
          [
            "9. Prüf‑Spur",
            "Jede Transaktion hinterlässt einen unveränderlichen Protokolleintrag auf einer genehmigten Blockchain. Bürgerinnen und Bürger können damit im Nachgang überprüfen, ob ein Vorgang korrekt bearbeitet wurde, ohne ihre Identität offenzulegen. Diese Transparenz verhindert Manipulation, stärkt das Vertrauen und erleichtert externe Prüfungen.",
          ],
        ].map(([title, desc], i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle className="text-slate-800">{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700">{desc}</CardContent>
          </Card>
        ))}
      </div>
    </Rahmen>
  </Abschnitt>
);

export default Programm;

