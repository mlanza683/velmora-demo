import { useMemo, useState } from "react";
import { motion } from "framer-motion";

const pages = ["home", "rooms", "room-detail", "experiences", "gallery", "about", "contact"];
const mobilePages = ["home", "rooms", "experiences", "gallery", "about", "contact"];

const pageLabels = {
  home: "Home",
  rooms: "Camere",
  "room-detail": "Dettaglio camera",
  experiences: "Esperienze",
  gallery: "Gallery",
  about: "About",
  contact: "Prenota",
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const rooms = [
  {
    id: 1,
    name: "Suite Panorama",
    category: "Suite",
    price: 189,
    guests: 2,
    size: "35 m²",
    bed: "King Size",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1521783593447-5702b9bfd267?auto=format&fit=crop&w=1400&q=80",
    ],
    description:
      "Terrazza privata, palette calda, dettagli premium e atmosfera boutique.",
    longDescription:
      "La Suite Panorama è pensata per trasmettere un soggiorno esclusivo ma accogliente. Luce naturale, tessuti morbidi, visual premium e una sensazione di quiete immediata rendono questa camera perfetta per una presentazione di alto livello.",
    amenities: ["Breakfast", "Wi-Fi", "Smart Check-in", "Balcony", "Mini Bar", "Late Check-out"],
  },
  {
    id: 2,
    name: "Deluxe Garden",
    category: "Deluxe",
    price: 149,
    guests: 2,
    size: "28 m²",
    bed: "Queen Size",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    ],
    description:
      "Eleganza morbida, dettagli curati e comfort pensato per il relax.",
    longDescription:
      "Una camera raffinata, luminosa e perfetta per soggiorni brevi di fascia alta. La Deluxe Garden lavora su comfort, equilibrio e visual coerente con un brand hospitality premium.",
    amenities: ["Breakfast", "Wi-Fi", "Garden View", "Desk", "Late Check-out"],
  },
  {
    id: 3,
    name: "Junior Suite",
    category: "Junior Suite",
    price: 169,
    guests: 3,
    size: "32 m²",
    bed: "King Size",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1521783593447-5702b9bfd267?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1400&q=80",
    ],
    description:
      "Spazio, quiete e design contemporaneo con finiture premium.",
    longDescription:
      "Pensata per chi vuole più respiro visivo e una presentazione commerciale molto forte, la Junior Suite combina eleganza contemporanea e funzionalità.",
    amenities: ["Breakfast", "Wi-Fi", "Lounge Area", "Mini Bar", "Coffee Set"],
  },
];

const experiences = [
  {
    title: "Colazione artigianale",
    text: "Prodotti locali, tavola curata e presentazione premium ogni mattina.",
    image: "https://images.unsplash.com/photo-1521783593447-5702b9bfd267?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Wellness moments",
    text: "Piccoli rituali di benessere e atmosfera slow per un soggiorno memorabile.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Esperienze locali",
    text: "Tour, degustazioni e suggerimenti personalizzati per vivere il territorio.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1521783593447-5702b9bfd267?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80",
];

function SectionTitle({ eyebrow, title, text, align = "left" }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}
    >
      <div className="text-[11px] uppercase tracking-[0.35em] text-[#9b7b5c] sm:text-xs">{eyebrow}</div>
      <h2 className="mt-4 font-serif text-4xl leading-tight text-[#1f1a15] sm:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-8 text-[#5e564d] sm:text-lg">{text}</p> : null}
    </motion.div>
  );
}

function Shell({ currentPage, setCurrentPage, children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4efe7] pb-28 text-[#1e1c18] md:pb-0">
      <header className="sticky top-0 z-50 border-b border-[#e8dccb]/70 bg-[rgba(244,239,231,0.82)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10 lg:py-5">
          <button onClick={() => setCurrentPage("home")} className="text-left">
            <div className="font-serif text-xl tracking-[0.22em] text-[#1f1a15] sm:text-2xl">VELMORA</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#7a6857] sm:text-xs sm:tracking-[0.35em]">Boutique Stay</div>
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => {
                  setCurrentPage(page);
                  setMobileMenuOpen(false);
                }}
                className={`text-sm uppercase tracking-[0.18em] transition ${
                  currentPage === page ? "text-[#201b16]" : "text-[#7b6a58] hover:text-[#201b16]"
                }`}
              >
                {pageLabels[page]}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentPage("contact")}
              className="hidden rounded-full bg-[#1f1a15] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white md:block"
            >
              Prenota
            </button>

            <button
              onClick={() => setMobileMenuOpen((p) => !p)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d8c8b5] bg-[#fbf7f1] text-[#241f19] md:hidden"
            >
              <span className="flex flex-col gap-1">
                <span className="block h-[2px] w-5 bg-current" />
                <span className="block h-[2px] w-5 bg-current" />
                <span className="block h-[2px] w-5 bg-current" />
              </span>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-[#e8dccb] bg-[#f7f1e8] px-4 py-4 md:hidden">
            <div className="space-y-2">
              {mobilePages.map((page) => (
                <button
                  key={page}
                  onClick={() => {
                    setCurrentPage(page);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-[20px] px-4 py-4 text-left text-sm uppercase tracking-[0.16em] ${
                    currentPage === page
                      ? "bg-[#1f1a15] text-white"
                      : "bg-[#fbf8f4] text-[#2e271f] ring-1 ring-[#eadfce]"
                  }`}
                >
                  <span>{pageLabels[page]}</span>
                  <span>→</span>
                </button>
              ))}

              <button
                onClick={() => {
                  setCurrentPage("contact");
                  setMobileMenuOpen(false);
                }}
                className="mt-3 w-full rounded-full bg-[#d7b68a] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#241f19]"
              >
                Prenota ora
              </button>
            </div>
          </div>
        )}
      </header>

      {children}

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#d8c8b5] bg-[rgba(251,248,244,0.94)] p-3 backdrop-blur-xl md:hidden">
        <div className="mx-auto flex max-w-lg items-center gap-3">
          <button
            onClick={() => setCurrentPage("rooms")}
            className="flex-1 rounded-full border border-[#d8c8b5] bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#2a241d]"
          >
            Camere
          </button>
          <button
            onClick={() => setCurrentPage("contact")}
            className="flex-[1.2] rounded-full bg-[#1f1a15] px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-lg"
          >
            Verifica disponibilità
          </button>
        </div>
      </div>

      <footer className="border-t border-[#e7dac8] bg-[#f7f1e8] pb-24 md:pb-0">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-4 lg:px-10">
          <div>
            <div className="font-serif text-3xl text-[#201b16]">VELMORA</div>
            <p className="mt-4 max-w-xs leading-7 text-[#665c53]">
              Concept premium per struttura ricettiva da usare come case study portfolio e come prodotto da vendere.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2e271f]">Pagine</h3>
            <div className="mt-4 space-y-3 text-[#6b6157]">
              <div>Home</div>
              <div>Camere</div>
              <div>Gallery</div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2e271f]">Servizi</h3>
            <div className="mt-4 space-y-3 text-[#6b6157]">
              <div>Booking engine</div>
              <div>SEO hospitality</div>
              <div>Responsive design</div>
              <div>Lead generation</div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2e271f]">Contatti</h3>
            <div className="mt-4 space-y-3 text-[#6b6157]">
              <div>hello@velmora.com</div>
              <div>+39 02 0000 0000</div>
              <div>Milano, Italia</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomePage({ setCurrentPage }) {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80"
            alt="Luxury boutique stay"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,16,13,0.85)_0%,rgba(18,16,13,0.55)_40%,rgba(18,16,13,0.15)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,180,138,0.22),transparent_30%)]" />
        </div>

        <div className="relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-10 px-4 pb-16 pt-24 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-2xl text-white">
            <motion.div variants={fadeUp} className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] backdrop-blur">
              Velmora Experience
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
              Un soggiorno che
              <span className="block text-[#dfbf93]">si prenota da solo</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-lg text-lg leading-8 text-white/80">
              Design premium, atmosfera boutique e una homepage costruita per colpire, rassicurare e convertire.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <motion.button
                onClick={() => setCurrentPage("contact")}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full bg-[#d6b48a] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#241f19] shadow-xl"
              >
                Prenota ora
              </motion.button>
              <motion.button
                onClick={() => setCurrentPage("rooms")}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full border border-white/30 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white backdrop-blur hover:bg-white/10"
              >
                Guarda le camere
              </motion.button>
            </motion.div>
            <motion.div variants={stagger} className="mt-10 grid grid-cols-3 gap-3 sm:max-w-md">
              {[["4.9", "Rating"], ["Boutique", "Style"], ["Direct", "Booking"]].map(([v, l]) => (
                <motion.div
                  key={l}
                  variants={fadeUp}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur"
                >
                  <div className="font-serif text-2xl text-[#ecd7bb]">{v}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/70">{l}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          >
            <div className="rounded-[32px] bg-[rgba(244,239,231,0.86)] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-[#8f7358]">Direct booking</div>
                  <h3 className="mt-2 font-serif text-3xl text-[#1f1a15]">Verifica disponibilità</h3>
                </div>
                <div className="rounded-full bg-[#d6b48a] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#241f19]">
                  Best rate
                </div>
              </div>
              <div className="mt-5 space-y-4">
                {["Check-in", "Check-out", "Ospiti"].map((label) => (
                  <motion.input
                    key={label}
                    whileFocus={{ scale: 1.01 }}
                    placeholder={label}
                    className="w-full rounded-2xl border border-[#d8c7b2] bg-white px-4 py-4 outline-none"
                  />
                ))}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full rounded-full bg-[#1f1a15] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white"
                >
                  Controlla ora
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
        <SectionTitle
          eyebrow="Art direction"
          title="Un’identità visiva premium, non il solito sito generico"
          text="Palette sabbia e bronzo, serif elegante, atmosfere calde e dettagli pensati per far percepire subito qualità."
        />
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Calore visivo",
              image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
              theme: "light",
              text: "Toni avvolgenti e materiali naturali per trasmettere comfort e qualità.",
            },
            {
              title: "Dettagli emozionali",
              image: "https://images.unsplash.com/photo-1521783593447-5702b9bfd267?auto=format&fit=crop&w=1200&q=80",
              theme: "dark",
              text: "Immagini e testo che fanno percepire il soggiorno prima ancora della prenotazione.",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className={`overflow-hidden rounded-[34px] shadow-xl ${
                item.theme === "dark" ? "bg-[#1f1a15] text-white" : "bg-[#e8ddcf] text-[#1f1a15]"
              }`}
            >
              <img src={item.image} alt={item.title} className="h-80 w-full object-cover" />
              <div className="p-6">
                <div className={`text-xs uppercase tracking-[0.28em] ${item.theme === "dark" ? "text-[#d8b78d]" : "text-[#8e6f52]"}`}>
                  Velmora
                </div>
                <h3 className="mt-3 font-serif text-3xl">{item.title}</h3>
                <p className={`mt-3 leading-7 ${item.theme === "dark" ? "text-white/72" : "text-[#5d564e]"}`}>
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}

function RoomsPage({ setCurrentPage }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
      <SectionTitle
        eyebrow="Selected rooms"
        title="Camere disegnate per vendere"
        text="Ogni card è pensata come una mini pagina di vendita: visual forte, dati rapidi, benefit chiari e CTA credibili."
      />
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} className="mt-12 grid gap-7 lg:grid-cols-3">
        {rooms.map((room) => (
          <motion.article
            key={room.id}
            variants={fadeUp}
            whileHover={{ y: -10 }}
            className="group overflow-hidden rounded-[34px] bg-[#fbf8f4] shadow-[0_12px_40px_rgba(47,35,23,0.08)] ring-1 ring-[#eadfce]"
          >
            <div className="overflow-hidden">
              <img src={room.image} alt={room.name} className="h-80 w-full object-cover transition duration-700 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-serif text-3xl text-[#201b16]">{room.name}</h3>
                <div className="rounded-full bg-[#d9b78d] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2a241d]">
                  da {room.price}€
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.16em] text-[#826d58]">
                <span>{room.category}</span>
                <span>•</span>
                <span>{room.size}</span>
                <span>•</span>
                <span>{room.guests} ospiti</span>
              </div>
              <p className="mt-4 leading-7 text-[#61574d]">{room.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {room.amenities.slice(0, 4).map((amenity) => (
                  <span
                    key={amenity}
                    className="rounded-full border border-[#e5d9ca] px-3 py-2 text-xs uppercase tracking-[0.16em] text-[#4c4137]"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
              <motion.button
                onClick={() => setCurrentPage("room-detail")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 rounded-full bg-[#1f1a15] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white"
              >
                Scopri di più
              </motion.button>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

function RoomDetailPage({ setCurrentPage }) {
  const room = rooms[0];
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp} className="text-xs uppercase tracking-[0.32em] text-[#8f7358]">
              Boutique Suite
            </motion.div>
            <motion.h1 variants={fadeUp} className="mt-4 font-serif text-5xl leading-tight text-[#1f1a15] sm:text-6xl">
              {room.name}
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-lg leading-8 text-[#5d564d]">
              {room.longDescription}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-[#6b6157]">
              <span className="rounded-full border border-[#e2d7c9] bg-[#fbf8f4] px-4 py-3">{room.category}</span>
              <span className="rounded-full border border-[#e2d7c9] bg-[#fbf8f4] px-4 py-3">{room.size}</span>
              <span className="rounded-full border border-[#e2d7c9] bg-[#fbf8f4] px-4 py-3">{room.guests} ospiti</span>
              <span className="rounded-full border border-[#e2d7c9] bg-[#fbf8f4] px-4 py-3">{room.bed}</span>
              <span className="rounded-full border border-[#e2d7c9] bg-[#fbf8f4] px-4 py-3">da {room.price}€ / notte</span>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={stagger} className="mt-10 grid gap-4 md:grid-cols-2">
            <motion.div variants={fadeUp} className="overflow-hidden rounded-[34px] bg-[#1f1a15] shadow-xl md:col-span-2">
              <img src={room.images[0]} alt={room.name} className="h-[420px] w-full object-cover sm:h-[520px]" />
            </motion.div>
            {room.images.slice(1).map((image, index) => (
              <motion.div
                key={image + index}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="overflow-hidden rounded-[30px] bg-[#fbf8f4] shadow-sm ring-1 ring-[#eadfce]"
              >
                <img src={image} alt={`Room view ${index + 2}`} className="h-64 w-full object-cover" />
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1fr]">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-xs uppercase tracking-[0.3em] text-[#8f7358]">
                Descrizione
              </motion.div>
              <motion.h2 variants={fadeUp} className="mt-4 font-serif text-4xl text-[#1f1a15]">
                Una camera da far desiderare
              </motion.h2>
              <motion.div variants={stagger} className="mt-5 space-y-5 text-lg leading-8 text-[#5d564d]">
                <motion.p variants={fadeUp}>
                  La pagina dettaglio mette in scena la stanza come farebbe un hotel premium: immagini grandi, testo emozionale,
                  servizi evidenti e una struttura pensata per aumentare il valore percepito.
                </motion.p>
                <motion.p variants={fadeUp}>
                  Il visitatore non legge solo specifiche tecniche: immagina già il soggiorno, la qualità del comfort e il livello
                  dell’esperienza.
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-xs uppercase tracking-[0.3em] text-[#8f7358]">
                Amenities
              </motion.div>
              <motion.h2 variants={fadeUp} className="mt-4 font-serif text-4xl text-[#1f1a15]">
                Servizi inclusi
              </motion.h2>
              <motion.div variants={stagger} className="mt-6 grid gap-4 sm:grid-cols-2">
                {room.amenities.map((item) => (
                  <motion.div
                    key={item}
                    variants={fadeUp}
                    whileHover={{ y: -4 }}
                    className="rounded-[24px] border border-[#eadfce] bg-[#fbf8f4] px-5 py-4 text-sm uppercase tracking-[0.16em] text-[#3f372f] shadow-sm"
                  >
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="lg:sticky lg:top-28">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-[36px] border border-[#eadfce] bg-[#fbf8f4] p-7 shadow-[0_18px_60px_rgba(47,35,23,0.08)] md:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-[0.28em] text-[#8f7358]">Booking box</div>
                <h2 className="mt-3 font-serif text-4xl text-[#1f1a15]">Prenota questa camera</h2>
              </div>
              <div className="rounded-full bg-[#d7b68a] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#241f19]">
                da {room.price}€
              </div>
            </div>
            <div className="mt-7 space-y-4">
              <input className="w-full rounded-[20px] border border-[#ddcfbc] bg-white px-5 py-4 outline-none transition focus:scale-[1.01]" placeholder="Check-in" />
              <input className="w-full rounded-[20px] border border-[#ddcfbc] bg-white px-5 py-4 outline-none transition focus:scale-[1.01]" placeholder="Check-out" />
              <select className="w-full rounded-[20px] border border-[#ddcfbc] bg-white px-5 py-4 outline-none transition focus:scale-[1.01]">
                <option>2 adulti</option>
                <option>1 adulto</option>
                <option>3 adulti</option>
              </select>
              <input className="w-full rounded-[20px] border border-[#ddcfbc] bg-white px-5 py-4 outline-none transition focus:scale-[1.01]" placeholder="Email" />
            </div>
            <div className="mt-7 rounded-[24px] bg-[#f3ece3] px-5 py-5 ring-1 ring-[#e4d6c4]">
              <div className="text-xs uppercase tracking-[0.2em] text-[#8f7358]">Stima demo</div>
              <div className="mt-3 flex items-end justify-between gap-4">
                <div className="font-serif text-5xl text-[#1f1a15]">567€</div>
                <div className="pb-2 text-sm uppercase tracking-[0.16em] text-[#6c6156]">3 notti</div>
              </div>
              <p className="mt-3 text-sm leading-6 text-[#6a6056]">
                Totale indicativo non vincolante. Pronto per collegare disponibilità e prezzi reali.
              </p>
            </div>
            <div className="mt-7 flex flex-col gap-3">
              <motion.button
                onClick={() => setCurrentPage("contact")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-full bg-[#1f1a15] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-lg"
              >
                Verifica disponibilità
              </motion.button>
              <motion.button
                onClick={() => setCurrentPage("rooms")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-full border border-[#d8c8b5] bg-transparent px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#2a241d]"
              >
                Torna alle camere
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ExperiencesPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
      <SectionTitle
        eyebrow="Experiences"
        title="Servizi ed esperienze che alzano il valore percepito"
        text="Una pagina pensata per far capire che non si vende solo una camera, ma un’esperienza completa."
      />
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} className="mt-12 grid gap-7 lg:grid-cols-3">
        {experiences.map((item) => (
          <motion.div
            key={item.title}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            className="overflow-hidden rounded-[34px] bg-[#fbf8f4] ring-1 ring-[#eadfce] shadow-sm"
          >
            <img src={item.image} alt={item.title} className="h-80 w-full object-cover" />
            <div className="p-6">
              <div className="text-xs uppercase tracking-[0.28em] text-[#8e6f52]">Experience</div>
              <h3 className="mt-3 font-serif text-3xl text-[#1f1a15]">{item.title}</h3>
              <p className="mt-4 leading-7 text-[#61574d]">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function GalleryPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
      <SectionTitle
        eyebrow="Gallery"
        title="Una gallery che sembra un magazine"
        text="Ritmo visivo, immagini grandi e overlay premium per dare profondità al brand."
      />
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {gallery.map((image, index) => (
          <motion.div
            key={image + index}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            className={`group relative overflow-hidden rounded-[34px] shadow-sm ring-1 ring-[#eadfce] ${
              index % 5 === 0 ? "md:col-span-2 lg:col-span-2 lg:row-span-2" : index % 3 === 0 ? "lg:col-span-2" : ""
            }`}
          >
            <img src={image} alt={`Gallery ${index + 1}`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="absolute bottom-6 left-6 right-6 translate-y-6 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
              <div className="text-xs uppercase tracking-[0.25em] text-white/70">VELMORA</div>
              <div className="mt-1 font-serif text-2xl text-white">Boutique Story</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionTitle
            eyebrow="About Velmora"
            title="Un concept costruito per piacere ai clienti e vendere bene nel portfolio"
            text="Velmora è un prodotto visivo pensato per il mercato hospitality: elegante, caldo, moderno e già orientato alla conversione."
          />
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="mt-8 space-y-5 text-lg leading-8 text-[#5d564d]">
            <motion.p variants={fadeUp}>
              La direzione visiva punta su lusso morbido, serif curata, immagini immersive e micro dettagli premium.
            </motion.p>
            <motion.p variants={fadeUp}>
              L’obiettivo non è solo mostrare camere, ma costruire desiderio, fiducia e senso di qualità.
            </motion.p>
            <motion.p variants={fadeUp}>
              Perfetto per essere presentato come prodotto, case study o base di un progetto reale con booking engine.
            </motion.p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[40px] bg-[#1e1a15] shadow-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1400&q=80"
            alt="About Velmora"
            className="h-[560px] w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-10">
      <SectionTitle
        eyebrow="Booking"
        title="Prenota in pochi secondi"
        text="Form premium, leggibile da mobile e già pronto per essere collegato alle API."
      />
      <div className="mt-10 grid gap-8 xl:grid-cols-[0.72fr_1.28fr]">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="space-y-6">
          <motion.div variants={fadeUp} className="rounded-[36px] bg-[#1f1a15] p-8 text-white shadow-xl md:p-10">
            <div className="text-xs uppercase tracking-[0.32em] text-[#d6b48a]">Direct booking</div>
            <h2 className="mt-4 font-serif text-5xl leading-tight">Prenota il tuo soggiorno</h2>
            <p className="mt-5 text-lg leading-8 text-white/72">
              Pagina booking costruita per conversione, lead generation e integrazione futura con prezzi e disponibilità reali.
            </p>
            <div className="mt-10 space-y-5 text-white/78">
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-[#d7b68a]">Email</div>
                <div className="mt-1">hello@velmora.com</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-[#d7b68a]">Telefono</div>
                <div className="mt-1">+39 02 0000 0000</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-[#d7b68a]">Check-in</div>
                <div className="mt-1">Dalle 14:00 • Check-out entro le 11:00</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.form
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="rounded-[38px] border border-[#eadfce] bg-[#fbf8f4] p-8 shadow-[0_18px_60px_rgba(47,35,23,0.08)] md:p-10"
        >
          <motion.div variants={fadeUp} className="flex flex-col gap-4 border-b border-[#e8dccb] pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-[#8f7358]">Booking request</div>
              <h2 className="mt-3 font-serif text-4xl text-[#1f1a15]">Verifica disponibilità e invia richiesta</h2>
            </div>
            <div className="rounded-[24px] bg-[#f3ece3] px-5 py-4 text-sm leading-6 text-[#5f564d] ring-1 ring-[#e4d6c4]">
              <div className="font-semibold uppercase tracking-[0.16em] text-[#2d261f]">Riepilogo rapido</div>
              <div className="mt-2">3 notti • 2 adulti • colazione inclusa</div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <input className="w-full rounded-[20px] border border-[#ddcfbc] bg-white px-5 py-4 outline-none" placeholder="Check-in" />
            <input className="w-full rounded-[20px] border border-[#ddcfbc] bg-white px-5 py-4 outline-none" placeholder="Check-out" />
            <select className="w-full rounded-[20px] border border-[#ddcfbc] bg-white px-5 py-4 outline-none">
              <option>2 adulti</option>
              <option>1 adulto</option>
            </select>
            <select className="w-full rounded-[20px] border border-[#ddcfbc] bg-white px-5 py-4 outline-none">
              <option>Suite Panorama</option>
              <option>Deluxe Garden</option>
              <option>Junior Suite</option>
            </select>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-5 grid gap-5 md:grid-cols-2">
            <input className="w-full rounded-[20px] border border-[#ddcfbc] bg-white px-5 py-4 outline-none" placeholder="Nome e cognome" />
            <input className="w-full rounded-[20px] border border-[#ddcfbc] bg-white px-5 py-4 outline-none" placeholder="Email" />
            <input className="w-full rounded-[20px] border border-[#ddcfbc] bg-white px-5 py-4 outline-none" placeholder="Telefono" />
            <select className="w-full rounded-[20px] border border-[#ddcfbc] bg-white px-5 py-4 outline-none">
              <option>Dopo le 14:00</option>
              <option>15:00 - 17:00</option>
            </select>
          </motion.div>

          <motion.textarea
            variants={fadeUp}
            className="mt-5 min-h-[170px] w-full rounded-[24px] border border-[#ddcfbc] bg-white px-5 py-4 outline-none"
            placeholder="Scrivi qui la tua richiesta"
          />

          <motion.div variants={fadeUp} className="mt-6 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="rounded-[24px] bg-[#f3ece3] px-5 py-5 ring-1 ring-[#e4d6c4]">
              <div className="text-xs uppercase tracking-[0.2em] text-[#8f7358]">Stima soggiorno</div>
              <div className="mt-3 flex flex-wrap items-end gap-4">
                <div className="font-serif text-5xl text-[#1f1a15]">567€</div>
                <div className="pb-2 text-sm uppercase tracking-[0.16em] text-[#6c6156]">3 notti • tariffa demo</div>
              </div>
              <p className="mt-3 text-sm leading-6 text-[#6a6056]">
                Pronto per collegare prezzi, disponibilità, stagionalità e coupon reali.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                className="rounded-full border border-[#d8c8b5] bg-transparent px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#2a241d]"
              >
                Verifica ora
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="rounded-full bg-[#1f1a15] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-lg"
              >
                Invia richiesta
              </motion.button>
            </div>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}

export default function VelmoraPremiumFrontend() {
  const [currentPage, setCurrentPage] = useState("home");

  const pageContent = useMemo(() => {
    switch (currentPage) {
      case "rooms":
        return <RoomsPage setCurrentPage={setCurrentPage} />;
      case "room-detail":
        return <RoomDetailPage setCurrentPage={setCurrentPage} />;
      case "experiences":
        return <ExperiencesPage />;
      case "gallery":
        return <GalleryPage />;
      case "about":
        return <AboutPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  }, [currentPage]);

  return <Shell currentPage={currentPage} setCurrentPage={setCurrentPage}>{pageContent}</Shell>;
}
