import React from "react";
import { Abschnitt, Rahmen } from "./layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, ScrollText, Lock, Sparkles } from "lucide-react";

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

export default Probleme;

