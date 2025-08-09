import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Check, Vote, ShieldCheck, Cpu, Blocks, FileText, LineChart, Users2, GitBranch, Map, Handshake, BookOpen, Lock, ScrollText, Sparkles, Mail, ExternalLink, ArrowRight } from "lucide-react";

// ——— Hilfskomponenten ———
const Abschnitt = ({ id, klasse = "", children }) => (
  <section id={id} className={`scroll-mt-24 py-16 md:py-24 ${klasse}`}>{children}</section>
);
const Rahmen = ({ children }) => (
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
);
const Plakette = ({ children, intent = "primary" }) => (
  <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${
    intent === "primary"
      ? "bg-blue-50 text-blue-700 ring-blue-200"
      : intent === "green"
      ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
      : intent === "neutral"
      ? "bg-slate-50 text-slate-700 ring-slate-200"
      : "bg-amber-50 text-amber-700 ring-amber-200"
  }`}>{children}</span>
);

// ——— Navigation ———
const Navigation = () => (
  <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b">
    <Rahmen>
      <div className="flex h-16 items-center justify-between">
        <a href="#start" className="group inline-flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-emerald-500 text-white font-black">EDP</span>
          <span className="font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">Europäische Digitalpartei</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {[
            ["Mission", "mission"],
            ["Probleme", "probleme"],
            ["Lösung", "loesung"],
            ["Abstimmungen", "abstimmungen"],
            ["Programm", "programm"],
            ["Fahrplan", "fahrplan"],
            ["Quellen", "quellen"],
            ["FAQ", "faq"],
            ["Kontakt", "kontakt"],
          ].map(([label, href]) => (
            <a key={href} href={`#${href}`} className="text-slate-600 hover:text-slate-900">{label}</a>
          ))}
          <Button asChild className="ml-2">
            <a href="#kontakt">Mitmachen</a>
          </Button>
        </nav>
      </div>
    </Rahmen>
  </header>
);

// ——— Aufmacher ———
const Aufmacher = () => (
  <Abschnitt id="start" klasse="bg-gradient-to-br from-blue-700 via-blue-600 to-emerald-600 text-white">
    <Rahmen>
      <div className="grid items-center gap-10 py-10 md:grid-cols-2 md:py-20">
        <div>
          <Plakette><Sparkles className="h-3.5 w-3.5"/> Neuer Gesellschaftsvertrag</Plakette>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            Bürokratie abbauen. Demokratie stärken.
            <span className="block text-emerald-200">Mit KI, Blockchain und gesundem Menschenverstand.</span>
          </h1>
          <p className="mt-4 max-w-prose text-blue-50/90">
            Wir sind überzeugt: Staat darf sich nicht wie ein Hindernislauf anfühlen. <strong>EDP</strong> verbindet Verwaltungsreform mit echter
            Mitbestimmung – sicher, überprüfbar, menschlich. Digitale Services mit KI und Blockchain machen Verfahren messbar schneller und günstiger
            und sparen bares Geld in den öffentlichen Haushalten, was am Ende allen zugutekommt. Weniger sinnloses Papier, weniger Anfahrten und
            Warten – mehr Zeit für Familie, Beruf und ehrenamtliches Engagement. Damit Entscheidungen dahin kommen, wo sie hingehören:
            <em>zu den Menschen</em>.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <a href="#kontakt" className="inline-flex items-center">Jetzt mitmachen <ArrowRight className="ml-2 h-4 w-4"/></a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="#programm" className="inline-flex items-center">Programm lesen <BookOpen className="ml-2 h-4 w-4"/></a>
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Plakette intent="green"><ShieldCheck className="h-3.5 w-3.5"/> Datenschutz ab Werk</Plakette>
            <Plakette intent="neutral"><Lock className="h-3.5 w-3.5"/> ZK‑Abstimmungen</Plakette>
            <Plakette intent="warning"><FileText className="h-3.5 w-3.5"/> Öffentliche Prüfungen</Plakette>
          </div>
        </div>
        <div>
          <Card className="border-0 shadow-2xl bg-white/10 backdrop-blur ring-1 ring-white/20">
            <CardHeader>
              <CardTitle className="text-white">So funktioniert der digitale Volksentscheid</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3 text-sm text-white/90">
                <li className="flex items-start gap-3"><span className="mt-1">1.</span><div>
                  <strong>Identität</strong> per eIDAS/Online‑Ausweis – lokal verifiziert, kein zentrales Personenregister.
                </div></li>
                <li className="flex items-start gap-3"><span className="mt-1">2.</span><div>
                  <strong>Abstimmung</strong> via Zero‑Knowledge‑Beweis: Stimme zählt, Identität bleibt verborgen.
                </div></li>
                <li className="flex items-start gap-3"><span className="mt-1">3.</span><div>
                  <strong>Prüfung</strong> auf einer öffentlichen, genehmigten Blockchain – Ergebnis ist fälschungssicher.
                </div></li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </Rahmen>
  </Abschnitt>
);

// ——— Mission ———
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
                KI‑gestützte Systeme verkürzen Wartezeiten dramatisch, beseitigen Doppelarbeit und helfen bei der Antragsstellung. Automatisch vorausgefüllte Formulare, intelligente Checklisten und Plausibilitätsprüfungen sorgen dafür, dass Fehler früh erkannt werden. Studien zeigen, dass digitale Verfahren im Schnitt 74 % schneller und 95 % günstiger sind als Papierwege und im Schnitt rund 27 % der administrativen Kosten einsparen – so bleibt mehr Zeit für die menschliche Beratung und mehr Geld in der öffentlichen Kasse.
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

// ——— Probleme ———
const Probleme = () => (
  <Abschnitt id="probleme" klasse="bg-slate-50">
    <Rahmen>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Die Lage: komplex, langsam, intransparent</h2>
          <p className="mt-3 text-slate-700">
            In zu vielen Verwaltungen herrscht noch Papierkrieg: Genehmigungen dauern Monate, Regeln widersprechen sich und Akten liegen als analoge Inseln in Silos. Bürgerinnen und Bürger füllen immer wieder die gleichen Formulare aus, müssen mehrmals vorsprechen und verlieren wertvolle Lebenszeit. Für Unternehmen entstehen hohe Kosten durch Verzögerungen und unnötige Auflagen; Korruption und Intransparenz gedeihen im Dickicht und belasten das Vertrauen in Staat und Politik. Die Folge ist Frust bei allen Beteiligten und eine chronische Überlastung der Behörden.
          </p>
          <ul className="mt-4 space-y-3 text-slate-800">
            <li className="flex items-start gap-2"><LineChart className="mt-1 h-4 w-4 text-amber-600"/> Lange Verfahren, hohe volkswirtschaftliche Kosten und Zeitverschwendung</li>
            <li className="flex items-start gap-2"><ScrollText className="mt-1 h-4 w-4 text-amber-600"/> Unübersichtliche Rechtslage, doppelte Datenabfragen und widersprüchliche Regeln</li>
            <li className="flex items-start gap-2"><Lock className="mt-1 h-4 w-4 text-amber-600"/> Fehlende Nachvollziehbarkeit, Intransparenz und Korruptionsrisiken</li>
            <li className="flex items-start gap-2"><Sparkles className="mt-1 h-4 w-4 text-amber-600"/> Umweltbelastung durch Papierberge und unnötige Fahrten</li>
          </ul>
        </div>
        <div>
          <Card className="h-full">
            <CardHeader><CardTitle>Was Menschen berichten</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-700">
              <p>„Anträge sind überall anders und keiner weiß, was wirklich gilt.“</p>
              <p>„Wir warten Wochen auf Rückmeldung – telefonisch nicht erreichbar.“</p>
              <p>„Es gibt drei Portale, keines spricht mit dem anderen.“</p>
              <p className="text-slate-500">* Beispiele sinngemäß aus häufigen Nutzerbeschwerden.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Rahmen>
  </Abschnitt>
);

// ——— Lösung ———
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

// ——— Digitale Volksabstimmungen ———
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

// ——— Programm ———
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
            "Alle Verwaltungsleistungen werden über ein zentrales Bürgerkonto abgewickelt – egal ob Baugenehmigung, Vereinsgründung oder Gewerbeanmeldung. Statt zig Portale und Kennwörter gibt es ein einziges Dashboard mit transparentem Status‑Verlauf, Erinnerungsfunktion und sicheren Nachrichtenkanälen."
          ],
          [
            "2. 180‑Tage‑Garantie",
            "Anträge dürfen nicht in der Warteschleife verschwinden. Klare Fristen geben Planbarkeit: Wird ein Verwaltungsakt nicht innerhalb von 180 Tagen entschieden, gilt der Antrag als automatisch genehmigt. Behörden werden so zu effizientem Handeln motiviert, Bürgerinnen und Unternehmer erhalten Rechtssicherheit."
          ],
          [
            "3. Gesetze in Klartext",
            "Amtliche Texte müssen verständlich sein. Jede Regelung erhält eine verbindliche Version in einfacher Sprache und mit Beispielen. Diese Klartext‑Fassungen haben Rechtswirkung und erleichtern es allen – ob Laie oder Jurist –, ihre Rechte und Pflichten zu verstehen."
          ],
          [
            "4. Daten nur einmal",
            "Das Once‑Only‑Prinzip beendet die Mehrfacheingabe: Daten werden einmal erfasst und über Register geteilt. Statt immer neue Nachweise hochzuladen, verknüpfen sich Register miteinander – natürlich datenschutzkonform. So sinkt der Aufwand für Bürger und Verwaltung, und es entstehen weniger Fehler."
          ],
          [
            "5. Offene Regeln",
            "Verordnungen werden maschinenlesbar veröffentlicht und mit öffentlichen Testfällen hinterlegt. So können Unternehmen und Zivilgesellschaft Algorithmen entwickeln, die Gesetze automatisch anwenden, und Fehler in Normen schnell melden. Transparenz fördert Vertrauen und beschleunigt die Umsetzung."
          ],
          [
            "6. Volksabstimmungen digital",
            "Ob Gemeinde, Land, Bund oder EU – digitale Volksentscheide mit Zero‑Knowledge‑Technologie werden Standard. Sie sind kostengünstig, barrierefrei und machen politische Beteiligung alltagstauglich. Wer möchte, kann weiterhin per Brief abstimmen; digital Teilnehmende profitieren von flexiblen Stimmzeiten und unmittelbarer Bestätigung."
          ],
          [
            "7. Faires Nachverfolgen",
            "Durch Transparenz‑Tafeln und Kennzahlen werden Wartezeiten, Rückstände und Bearbeitungsqualität öffentlich. Vergleiche zwischen Ämtern schaffen Anreize zur Verbesserung. Die Daten werden in Echtzeit aktualisiert, damit sich Bürger informieren und Behörden voneinander lernen können."
          ],
          [
            "8. KI in der Verwaltung",
            "Künstliche Intelligenz unterstützt Sachbearbeitende bei Routineaufgaben wie Dokumenten‑Erkennung, Plausibilitätsprüfungen und Recherche. Die finale Entscheidung bleibt beim Menschen. Dank Automatisierung sinken die Kosten, die Fehlerquote reduziert sich und die Mitarbeitenden gewinnen Zeit für komplexe Fälle und den direkten Kontakt."
          ],
          [
            "9. Prüf‑Spur",
            "Jede Transaktion hinterlässt einen unveränderlichen Protokolleintrag auf einer genehmigten Blockchain. Bürgerinnen und Bürger können damit im Nachgang überprüfen, ob ein Vorgang korrekt bearbeitet wurde, ohne ihre Identität offenzulegen. Diese Transparenz verhindert Manipulation, stärkt das Vertrauen und erleichtert externe Prüfungen."
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

// ——— Fahrplan ———
const Fahrplan = () => (
  <Abschnitt id="fahrplan" klasse="bg-white">
    <Rahmen>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">Fahrplan (36 Monate)</h2>
      <Tabs defaultValue="phase1" className="mt-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="phase1">Phase 1</TabsTrigger>
          <TabsTrigger value="phase2">Phase 2</TabsTrigger>
          <TabsTrigger value="phase3">Phase 3</TabsTrigger>
        </TabsList>
        <TabsContent value="phase1">
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            {[
              ["Digitale Basis", "Registerabgleich, eID‑Login, Akten‑Digitalisierung"],
              ["Pilotkommunen", "3–5 Städte, standardisierte Prozesse"],
              ["Öffentliche Prüfungen", "Externe Prüfpfade und Fehler‑Prämien (Bug‑Bounties)"],
            ].map(([t, d], i) => (
              <Card key={i}><CardHeader><CardTitle>{t}</CardTitle></CardHeader><CardContent className="text-slate-700">{d}</CardContent></Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="phase2">
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            {[
              ["KI‑Rollout", "Dokumenten‑Erkennung, Validierung, Assistenz"],
              ["ZK‑Abstimmung", "Gemeinde‑Referenden mit Prüf‑Spur"],
              ["RegTech‑Paket", "Maschinenlesbare Normen plus Testfälle"],
            ].map(([t, d], i) => (
              <Card key={i}><CardHeader><CardTitle>{t}</CardTitle></CardHeader><CardContent className="text-slate-700">{d}</CardContent></Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="phase3">
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            {[
              ["Skalierung", "Bund/Länder/Europa – föderierte Ketten"],
              ["Dienstleistungsziele", "Ziele und Ergebnis‑Kennzahlen gesetzlich"],
              ["Export‑Modell", "Gute Praxis international teilen"],
            ].map(([t, d], i) => (
              <Card key={i}><CardHeader><CardTitle>{t}</CardTitle></CardHeader><CardContent className="text-slate-700">{d}</CardContent></Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </Rahmen>
  </Abschnitt>
);

// ——— Quellen & Nachweise ———
const Quellen = () => (
  <Abschnitt id="quellen" klasse="bg-slate-50">
    <Rahmen>
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Quellen & weiterführende Informationen</h2>
        <p className="mt-3 text-slate-700">Ausgewählte Primärquellen mit stabilen Permalinks – für alle, die tiefer einsteigen möchten.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Digitale Verwaltung & E‑Government</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-slate-800">
            <div>
              <a className="inline-flex items-center gap-2 hover:underline" href="https://www.oecd.org/en/publications/government-at-a-glance-2023_3d5c5d31-en.html" target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4"/> OECD – Government at a Glance 2023</a>
              <p className="ml-6 text-xs text-slate-500">Internationale Vergleichsstudie zur Leistungsfähigkeit der öffentlichen Verwaltungen und Fortschritten bei der digitalen Transformation.</p>
            </div>
            <div>
              <a className="inline-flex items-center gap-2 hover:underline" href="https://www.oecd.org/en/data/dashboards/government-at-a-glance-2023.html" target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4"/> OECD – Daten‑Dashboard</a>
              <p className="ml-6 text-xs text-slate-500">Interaktives Dashboard mit Kennzahlen zu Verwaltung, Effizienz und E‑Government aus dem OECD‑Bericht.</p>
            </div>
            <div>
              <a className="inline-flex items-center gap-2 hover:underline" href="https://publicadministration.un.org/egovkb/en-us/Reports/UN-E-Government-Survey-2024" target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4"/> UN DESA – E‑Government Survey 2024 (Landing)</a>
              <p className="ml-6 text-xs text-slate-500">Landing‑Page des UN‑Berichts über den digitalen Reifegrad von Regierungen weltweit.</p>
            </div>
            <div>
              <a className="inline-flex items-center gap-2 hover:underline" href="https://desapublications.un.org/sites/default/files/publications/2024-09/%28Web%20version%29%20E-Government%20Survey%202024%201392024.pdf" target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4"/> UN DESA – E‑Government Survey 2024 (PDF)</a>
              <p className="ml-6 text-xs text-slate-500">Vollständige PDF‑Version des UN‑Berichts mit Analysen zu Services, Partizipation und Infrastruktur.</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Rechtlicher Rahmen (EU‑Identität & Signaturen)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-slate-800">
            <div>
              <a className="inline-flex items-center gap-2 hover:underline" href="https://eur-lex.europa.eu/eli/reg/2014/910/oj/eng" target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4"/> EUR‑Lex – Verordnung (EU) 910/2014 (eIDAS)</a>
              <p className="ml-6 text-xs text-slate-500">EU‑Verordnung, die die rechtlichen Grundlagen für elektronische Identifizierung, Signaturen und Vertrauensdienste in der EU schafft.</p>
            </div>
            <div>
              <a className="inline-flex items-center gap-2 hover:underline" href="https://eur-lex.europa.eu/eli/reg/2014/910/2024-10-18/eng" target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4"/> EUR‑Lex – Konsolidierte Fassung (Stand 18.10.2024)</a>
              <p className="ml-6 text-xs text-slate-500">Aktualisierte konsolidierte Fassung der eIDAS‑Verordnung mit allen Änderungen bis Oktober 2024.</p>
            </div>
            <div>
              <a className="inline-flex items-center gap-2 hover:underline" href="https://commission.europa.eu/strategy-and-policy/priorities-2019-2024/europe-fit-digital-age/european-digital-identity_en" target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4"/> Europäische Digitale Identität – Überblick</a>
              <p className="ml-6 text-xs text-slate-500">Kurzporträt der EU‑Kommission zur Initiative einer einheitlichen europäischen digitalen Identität und deren Einsatzbereiche.</p>
            </div>
            <div>
              <a className="inline-flex items-center gap-2 hover:underline" href="https://ec.europa.eu/digital-building-blocks/sites/display/EUDIGITALIDENTITYWALLET/EU%2BDigital%2BIdentity%2BWallet%2BHome" target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4"/> EU Digital Identity Wallet – offizielle Seite</a>
              <p className="ml-6 text-xs text-slate-500">Offizielle Projektseite zur EU‑Digital‑Identity‑Wallet mit technischen Informationen, Pilotprojekten und Zeitplan.</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>ZK‑Abstimmungen & Kryptographie</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-slate-800">
            <div>
              <a className="inline-flex items-center gap-2 hover:underline" href="https://arxiv.org/abs/1504.03778" target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4"/> Benaloh et al. – End‑to‑End Verifiability (2015)</a>
              <p className="ml-6 text-xs text-slate-500">Wissenschaftlicher Artikel, der die Grundlagen verifizierbarer elektronischer Abstimmungssysteme beschreibt.</p>
            </div>
            <div>
              <a className="inline-flex items-center gap-2 hover:underline" href="https://eprint.iacr.org/2016/260.pdf" target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4"/> Groth 2016 – Pairing‑based SNARK (Groth16)</a>
              <p className="ml-6 text-xs text-slate-500">Forschungsarbeit zu effizienten Zero‑Knowledge‑Beweisen mittels bilinearer Paarungen – Basis moderner zk‑SNARKs.</p>
            </div>
            <div>
              <a className="inline-flex items-center gap-2 hover:underline" href="https://eprint.iacr.org/2019/953.pdf" target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4"/> PLONK 2019 – Universelle SNARK</a>
              <p className="ml-6 text-xs text-slate-500">Beschreibung der universellen, effizienten SNARK‑Konstruktion „PLONK“ für skalierbare Zero‑Knowledge‑Proofs.</p>
            </div>
            <div>
              <a className="inline-flex items-center gap-2 hover:underline" href="https://docs.rarimo.com/freedom-tool/" target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4"/> Rarimo – Freedom Tool (Dokumentation)</a>
              <p className="ml-6 text-xs text-slate-500">Dokumentation des Freedom Tools, das Zero‑Knowledge‑basierte Pässe für anonyme Abstimmungen bereitstellt.</p>
            </div>
            <div>
              <a className="inline-flex items-center gap-2 hover:underline" href="https://docs.rarimo.com/freedom-tool/smart-contracts-reference/" target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4"/> Rarimo – Smart‑Contract‑Referenz & Deployments</a>
              <p className="ml-6 text-xs text-slate-500">Technische Referenz zu den Smart Contracts des Freedom Tools inklusive Code‑Beispiele und Deployments.</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Register & Prüf‑Blockchain (öffentliche Dienste)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-slate-800">
            <div>
              <a className="inline-flex items-center gap-2 hover:underline" href="https://digital-strategy.ec.europa.eu/en/policies/european-blockchain-services-infrastructure" target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4"/> EU – European Blockchain Services Infrastructure (EBSI)</a>
              <p className="ml-6 text-xs text-slate-500">Offizielle Beschreibung der europäischen Blockchain‑Plattform für grenzüberschreitende öffentliche Dienste wie Bildungsnachweise oder Unternehmensregister.</p>
            </div>
            <div>
              <a className="inline-flex items-center gap-2 hover:underline" href="https://hub.ebsi.eu/" target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4"/> EBSI – Hub & technische Infos</a>
              <p className="ml-6 text-xs text-slate-500">Portal mit technischen Spezifikationen, Pilotprojekten und Open‑Source‑Ressourcen zur EBSI‑Blockchain.</p>
            </div>
            <div>
              <a className="inline-flex items-center gap-2 hover:underline" href="https://thedocs.worldbank.org/en/doc/784361528484329990-0200022018/original/BlockchainandLandJune2018.pdf" target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4"/> Weltbank – Blockchain and Land (2018, PDF)</a>
              <p className="ml-6 text-xs text-slate-500">Studie der Weltbank über den Einsatz von Blockchain in Landregistern, die zeigt, wie Transparenz und Effizienz erhöht und Korruption reduziert werden können.</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Direkte Demokratie (Schweiz, Praxis)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-slate-800">
            <div>
              <a className="inline-flex items-center gap-2 hover:underline" href="https://www.ch.ch/en/votes-and-elections/referendum/" target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4"/> ch.ch – Referendum: wie es funktioniert</a>
              <p className="ml-6 text-xs text-slate-500">Amtliche Informationsseite erklärt Ablauf und Bedingungen eines Referendums in der Schweiz.</p>
            </div>
            <div>
              <a className="inline-flex items-center gap-2 hover:underline" href="https://www.ch.ch/en/political-system/political-rights/initiatives/what-is-a-federal-popular-initiative" target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4"/> ch.ch – Volksinitiative: Überblick</a>
              <p className="ml-6 text-xs text-slate-500">Kurzer Überblick zur Volksinitiative: Wer sie einreichen darf, wie viele Unterschriften nötig sind und wie der Prozess abläuft.</p>
            </div>
            <div>
              <a className="inline-flex items-center gap-2 hover:underline" href="https://www.aboutswitzerland.eda.admin.ch/en/direct-democracy" target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4"/> EDA – Direct Democracy (Hintergrund)</a>
              <p className="ml-6 text-xs text-slate-500">Hintergrundbericht des Eidgenössischen Departements für auswärtige Angelegenheiten zur direkten Demokratie in der Schweiz.</p>
            </div>
          </CardContent>
        </Card>
      </div>
      <p className="mt-6 text-xs text-slate-500">
        Hinweis: Einige Quellen sind englischsprachig. Alle Links sind Permalinks oder Primärquellen (soweit verfügbar) und sind jeweils mit einer kurzen inhaltlichen Zusammenfassung versehen.
      </p>
    </Rahmen>
  </Abschnitt>
);

// ——— FAQ ———
const FAQ = () => (
  <Abschnitt id="faq" klasse="bg-white">
    <Rahmen>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">Fragen & Antworten</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {[
          [
            "Ist das mit dem Grundgesetz vereinbar?",
            "Ja. Direkte Demokratie ist auf Bundes‑ und Länderebene gestaltbar. Digitale Verfahren ersetzen nicht Parlamente, sondern ergänzen sie und bleiben verfassungskonform: je nach Thema ist eine einfache oder qualifizierte Mehrheit erforderlich."
          ],
          [
            "Wie schützt ihr die Anonymität?",
            "Unsere Abstimmung nutzt Zero‑Knowledge‑Beweise. Die Gültigkeit Ihrer Stimme wird kryptografisch bestätigt, ohne Ihre Identität offenzulegen. Die Prüf‑Spur enthält nur verschlüsselte Belege; Rückschlüsse auf einzelne Personen sind technisch ausgeschlossen."
          ],
          [
            "Braucht man dafür Kryptowährungen?",
            "Nein. Es gibt keine spekulativen Token. Wir verwenden genehmigte, energieeffiziente Blockchains ausschließlich für Integrität und Prüfbarkeit – ohne Mining und ohne finanzielles Risiko."
          ],
          [
            "Wer kontrolliert die KI?",
            "Künstliche Intelligenz ist ein Werkzeug, kein Entscheider. Wir setzen auf offenen Quellcode, Protokollierung, menschliche Letztentscheidung und unabhängige Audits. Bürgerinnen und Bürger können Fehler melden; Verzerrungen werden regelmäßig geprüft und die Systeme laufend verbessert."
          ],
          [
            "Warum lohnt sich Digitalisierung wirtschaftlich?",
            "Digitale Prozesse sparen erhebliche Ressourcen: Laut internationalen Studien sind Online‑Verfahren im Durchschnitt 74 % schneller und 95 % günstiger als analoge Wege. KI‑Assistenz reduziert administrative Kosten um etwa 27 %. Weniger Papier, weniger Fahrten und weniger Wartezeiten entlasten die Staatskasse und Ihr Portemonnaie gleichermaßen."
          ],
          [
            "Sind KI und Automatisierung ein Jobkiller?",
            "Nein. KI übernimmt monotone Routinetätigkeiten und unterstützt Sachbearbeitende, damit diese sich auf komplexe Fälle und persönliche Beratung konzentrieren können. Studien, etwa vom MIT, zeigen moderate Produktivitätsgewinne (ca. 1–1,6 % BIP); sie sehen keine massenhafte Arbeitsplatzvernichtung. Zudem entstehen neue Jobs in IT, Service und Betreuung."
          ],
          [
            "Warum überhaupt Blockchain?",
            "Eine genehmigte Blockchain schafft fälschungssichere Protokolle und reduziert Bürokratie. Unveränderliche Einträge sorgen dafür, dass Entscheidungen transparent nachvollziehbar sind, ohne personenbezogene Daten preiszugeben. So wird Korruption erschwert, Vertrauen gestärkt und Bearbeitungszeit verkürzt: Pilotprojekte zeigen Reduktionen von 40 auf 10 Tage und Kostenersparnisse von bis zu 80 %."
          ],
          [
            "Wie können ältere oder weniger technikaffine Menschen teilnehmen?",
            "Unsere Lösungen werden barrierearm gestaltet, mit klarer Sprache, großen Bedienelementen und Hilfefunktionen. Es gibt lokale Servicepunkte, mobile Bürgermobile und Telefon‑Hotlines, die beim Ausfüllen helfen. Wer analog bleiben möchte, kann weiterhin per Brief oder vor Ort abstimmen – die Ergebnisse werden digital zusammengeführt. Begleitprogramme und Schulungen erleichtern zusätzlich den Einstieg."
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

// ——— Mitmachen/Kontakt ———
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

// ——— Fußzeile ———
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

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navigation />
      <main>
        <Aufmacher />
        <Mission />
        <Probleme />
        <Loesung />
        <Abstimmungen />
        <Programm />
        <Fahrplan />
        <Quellen />
        <FAQ />
        <Kontakt />
      </main>
      <Fuss />
    </div>
  );
}
