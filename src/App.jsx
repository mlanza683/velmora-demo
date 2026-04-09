import { useState } from "react";
import VelmoraPremiumFrontend from "./pages/VelmoraSite";
import VelmoraSalesLanding from "./pages/Sales";

export default function App() {
  const [view, setView] = useState("site");

  return (
    <div>
      <div className="fixed bottom-20 left-1/2 z-[9999] flex -translate-x-1/2 gap-2 rounded-full bg-[rgba(244,239,231,0.92)] p-2 shadow-lg backdrop-blur md:left-auto md:right-4 md:top-4 md:bottom-auto md:translate-x-0">
        <button
          onClick={() => setView("site")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            view === "site"
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
        >
          Demo sito
        </button>

        <button
          onClick={() => setView("sales")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            view === "sales"
              ? "bg-[#d6b48a] text-black"
              : "bg-white text-black"
          }`}
        >
          Pagina vendita
        </button>
      </div>

      {view === "site" ? (
        <VelmoraPremiumFrontend />
      ) : (
        <VelmoraSalesLanding setView={setView} />
      )}
    </div>
  );
}
