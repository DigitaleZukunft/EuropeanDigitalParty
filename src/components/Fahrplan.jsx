import React from "react";
import { Abschnitt, Rahmen } from "./layout";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

export default Fahrplan;

