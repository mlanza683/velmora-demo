import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const features = [
  "Design premium per B&B e case vacanza",
  "Versione mobile-first pronta per campagne Facebook",
  "Pagina camere, gallery, booking e dettaglio camera",
  "Personalizzazione testi, colori e branding",
  "Base pronta per collegamento API e booking engine",
  "Perfetto come prodotto da vendere veloce",
];

const deliverables = [
  "Homepage wow ad alta conversione",
  "Pagina camere professionale",
  "Dettaglio camera premium",
  "Gallery editoriale",
  "Pagina booking / richiesta soggiorno",
  "Versione responsive desktop + mobile",
];

const steps = [
  {
    title: "1. Raccolta materiali",
    text: "Logo, foto, testi, contatti e stile desiderato.",
  },
  {
    title: "2. Personalizzazione",
    text: "Adatto layout, colori e contenuti alla struttura del cliente.",
  },
  {
    title: "3. Messa online",
    text: "Consegna pronta per pubblicazione o evoluzione futura con API.",
  },
];

const packages = [
  {
    name: "Start",
    price: "da 300€ + IVA",
    text: "Ideale per acquisire clienti veloci con una proposta d’ingresso chiara.",
    items: [
      "Homepage premium",
      "1 pagina camere",
      "Form contatti / booking base",
      "Ottimizzazione mobile",
    ],
  },
  {
    name: "Premium",
    price: "da 650€ + IVA",
    text: "Pacchetto più forte da proporre come prodotto professionale completo.",
    items: [
      "Homepage wow",
      "Camere + dettaglio camera",
      "Gallery + booking premium",
      "Branding personalizzato",
      "Setup pronto per evoluzione futura",
    ],
    featured: true,
  },
  {
    name: "Pro",
    price: "su preventivo",
    text: "Per chi vuole poi collegare disponibilità reali, pagamenti o gestionale.",
    items: [
      "Tutto il Premium",
      "Integrazione API",
      "Booking engine evoluto",
      "Backoffice o CMS dedicato",
    ],
  },
];

export default function VelmoraSalesLanding({ setView }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#f4efe7] text-[#1f1a15]">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80"
            alt="Luxury boutique hotel"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,16,13,0.88)_0%,rgba(18,16,13,0.62)_45%,rgba(18,16,13,0.22)_100%)]" />
        </div>

        <div className="relative mx-auto grid min-h-[92vh] max-w-7xl items-center gap-10 px-4 pb-16 pt-24 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-2xl text-white"
          >
            <motion.div
              variants={fadeUp}
              className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] backdrop-blur"
            >
              Prodotto pronto da vendere
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-7xl"
            >
              Sito B&amp;B premium
              <span className="block text-[#dfbf93]">pronto in pochi giorni</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-lg leading-8 text-white/80"
            >
              Una soluzione elegante, moderna e mobile-first per B&amp;B,
              case vacanza e strutture ricettive che vogliono sembrare subito
              professionali.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="https://wa.me/393491031575"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#d6b48a] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#241f19] shadow-xl"
              >
                Scrivimi su WhatsApp
              </a>

              <button
                onClick={() => setView("site")}
                className="rounded-full border border-white/30 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white backdrop-blur"
              >
                Guarda demo
              </button>
            </motion.div>

            <motion.div
              variants={stagger}
              className="mt-10 grid grid-cols-3 gap-3 sm:max-w-md"
            >
              {[
                ["Mobile", "First", "target-users"],
                ["Premium", "Design", "features"],
                ["Booking", "Ready", "packages"],
              ].map(([v, l, target]) => (
                <motion.button
                  key={v + l}
                  type="button"
                  variants={fadeUp}
                  whileHover={{ y: -6, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollToSection(target)}
                  className="cursor-pointer rounded-2xl bg-white/10 p-4 text-center backdrop-blur transition hover:bg-white/20"
                >
                  <div className="font-serif text-2xl text-[#ecd7bb]">{v}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/70">
                    {l}
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="rounded-[34px] bg-[rgba(244,239,231,0.88)] p-7 shadow-[0_25px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl"
          >
            <div className="text-xs uppercase tracking-[0.28em] text-[#8f7358]">
              Offerta iniziale
            </div>
            <h2 className="mt-3 font-serif text-4xl text-[#1f1a15]">
              Da 300€ + IVA
            </h2>
            <p className="mt-4 leading-7 text-[#5f564d]">
              Una proposta d’ingresso pensata per acquisire clienti velocemente
              e mostrare subito valore.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Design elegante e personalizzabile",
                "Responsive mobile + desktop",
                "Booking form pronto",
                "Consegna rapida",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[20px] border border-[#e2d7c9] bg-white px-4 py-4 text-sm text-[#3f372f]"
                >
                  {item}
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/393491031575?text=Ciao,%20vorrei%20informazioni%20sul%20sito%20B%26B%20premium"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#1f1a15] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white"
            >
              Richiedi il sito
            </a>
          </motion.div>
        </div>
      </section>

      <section
        id="target-users"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10"
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div className="text-xs uppercase tracking-[0.35em] text-[#9b7b5c]">
            Per chi è
          </div>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#1f1a15] sm:text-5xl">
            Perfetto per chi vuole sembrare subito professionale
          </h2>
          <p className="mt-5 text-base leading-8 text-[#5e564d] sm:text-lg">
            Questa soluzione è pensata per B&amp;B, affittacamere, case vacanza
            e piccoli hotel che vogliono un sito visivamente forte senza
            partire da zero.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {features.map((item) => (
            <motion.div
              key={item}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="rounded-[28px] border border-[#eadfce] bg-[#fbf8f4] p-6 shadow-sm"
            >
              <div className="text-sm leading-7 text-[#3f372f]">{item}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section
        id="features"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10"
      >
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="text-xs uppercase tracking-[0.35em] text-[#9b7b5c]">
              Cosa include
            </div>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#1f1a15] sm:text-5xl">
              Una base premium già pronta per essere venduta
            </h2>
            <p className="mt-5 text-base leading-8 text-[#5e564d] sm:text-lg">
              Il prodotto è già strutturato per lavorare bene in presentazione,
              portfolio, advertising e futura evoluzione tecnica.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {deliverables.map((item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                className="rounded-[26px] border border-[#eadfce] bg-[#fbf8f4] px-5 py-5 text-sm uppercase tracking-[0.16em] text-[#3f372f] shadow-sm"
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div className="text-xs uppercase tracking-[0.35em] text-[#9b7b5c]">
            Come funziona
          </div>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#1f1a15] sm:text-5xl">
            Un processo semplice e veloce
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid gap-6 lg:grid-cols-3"
        >
          {steps.map((step) => (
            <motion.div
              key={step.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="rounded-[30px] border border-[#eadfce] bg-[#fbf8f4] p-8 shadow-sm"
            >
              <h3 className="font-serif text-3xl text-[#1f1a15]">
                {step.title}
              </h3>
              <p className="mt-4 leading-7 text-[#61574d]">{step.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section
        id="packages"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10"
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div className="text-xs uppercase tracking-[0.35em] text-[#9b7b5c]">
            Pacchetti
          </div>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#1f1a15] sm:text-5xl">
            Offerta chiara, facile da proporre
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid gap-6 xl:grid-cols-3"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.name}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className={`rounded-[34px] p-8 shadow-sm ring-1 ${
                pkg.featured
                  ? "bg-[#1f1a15] text-white ring-[#1f1a15]"
                  : "bg-[#fbf8f4] text-[#1f1a15] ring-[#eadfce]"
              }`}
            >
              <div
                className={`text-xs uppercase tracking-[0.28em] ${
                  pkg.featured ? "text-[#d7b68a]" : "text-[#8f7358]"
                }`}
              >
                {pkg.name}
              </div>

              <h3 className="mt-4 font-serif text-4xl">{pkg.price}</h3>

              <p
                className={`mt-4 leading-7 ${
                  pkg.featured ? "text-white/72" : "text-[#61574d]"
                }`}
              >
                {pkg.text}
              </p>

              <div className="mt-6 space-y-3">
                {pkg.items.map((item) => (
                  <div
                    key={item}
                    className={`rounded-[20px] px-4 py-4 text-sm ${
                      pkg.featured
                        ? "bg-white/8 text-white/88"
                        : "border border-[#eadfce] bg-white text-[#3f372f]"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/393491031575?text=Ciao,%20sono%20interessato%20al%20pacchetto%20${pkg.name}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#d7b68a] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#241f19] hover:opacity-90"
              >
                Richiedi questo pacchetto
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-[40px] bg-[#1e1a15] px-8 py-14 text-white shadow-[0_25px_80px_rgba(0,0,0,0.18)] md:px-12"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-[#d7b68a]">
                Call to action
              </div>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">
                Vuoi un sito B&amp;B elegante, veloce e pronto da mostrare ai clienti?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
                Questa soluzione è perfetta per iniziare subito con un prodotto
                forte, bello da vedere e già orientato alla vendita.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/393491031575"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#d7b68a] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#241f19]"
              >
                Scrivimi su WhatsApp
              </a>

              <button
                onClick={() => setView("site")}
                className="rounded-full border border-white/18 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white"
              >
                Chiedi una demo
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}