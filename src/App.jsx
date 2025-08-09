import React from "react";
import Navigation from "./components/Navigation";
import Aufmacher from "./components/Aufmacher";
import Mission from "./components/Mission";
import Probleme from "./components/Probleme";
import Loesung from "./components/Loesung";
import Abstimmungen from "./components/Abstimmungen";
import Programm from "./components/Programm";
import Fahrplan from "./components/Fahrplan";
import Quellen from "./components/Quellen";
import FAQ from "./components/FAQ";
import Kontakt from "./components/Kontakt";
import Fuss from "./components/Fuss";

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

