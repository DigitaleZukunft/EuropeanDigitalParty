import React from "react";
import { Button } from "@/components/ui/button";
import { Rahmen } from "./layout";

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

export default Navigation;

