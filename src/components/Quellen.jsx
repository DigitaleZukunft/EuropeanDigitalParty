import React from "react";
import { Abschnitt, Rahmen } from "./layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

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

export default Quellen;

