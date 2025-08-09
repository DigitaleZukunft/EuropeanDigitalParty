import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Abschnitt, Rahmen, Plakette } from "./layout";
import { Sparkles, ShieldCheck, Lock, FileText, ArrowRight, BookOpen } from "lucide-react";

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

export default Aufmacher;

