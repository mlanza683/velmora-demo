import { useState } from "react";
import VelmoraPremiumFrontend from "./pages/VelmoraSite";
import VelmoraSalesLanding from "./pages/Sales";

export default function App() {
  const [view, setView] = useState("site");

  return (
    <div>
      <div className="fixed right-4 top-4 z-[9999] flex gap-2">
        <button
          onClick={() => setView("site")}
          className="rounded-full bg-black px-4 py-2 text-sm text-white"
        >
          Demo sito
        </button>
        <button
          onClick={() => setView("sales")}
          className="rounded-full bg-[#d6b48a] px-4 py-2 text-sm text-black"
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