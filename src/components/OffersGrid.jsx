import { Ship, Users, MapPin, Globe, Package } from 'lucide-react';

const offers = [
  {
    id: 'cruises',
    title: 'Crociere',
    desc: 'Mediterraneo, Caraibi, Nord Europa e giri del mondo: scegli la rotta e salpa con le migliori compagnie.',
    icon: Ship,
    image: 'https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=1600&auto=format&fit=crop',
    badge: 'Promo Early Booking',
  },
  {
    id: 'groups',
    title: 'Tour di Gruppo',
    desc: 'Itinerari guidati con accompagnatore, date garantite e partenze da tutta Italia. Cultura, natura e relax.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop',
    badge: 'Partenze Garantite',
  },
  {
    id: 'italy',
    title: 'Viaggi in Italia',
    desc: 'Mare cristallino, città d’arte, borghi e sapori autentici. Scopri il Bel Paese in ogni stagione.',
    icon: MapPin,
    image: 'https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=1600&auto=format&fit=crop',
    badge: 'Speciale Weekend',
  },
  {
    id: 'world',
    title: 'Viaggi nel Mondo',
    desc: 'Dall’Asia all’America, dall’Africa all’Oceania: esperienze uniche per ogni stile di viaggio.',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
    badge: 'Top Destinazioni 2025',
  },
  {
    id: 'dynamic',
    title: 'Dynamic Package',
    desc: 'Componi in autonomia volo + hotel + servizi con tariffe in tempo reale via XML/API. Massima flessibilità.',
    icon: Package,
    image: 'https://images.unsplash.com/photo-1468413253725-0d5181091126?q=80&w=1600&auto=format&fit=crop',
    badge: 'Prezzi Dinamici',
  },
];

function OfferCard({ offer }) {
  const Icon = offer.icon;
  return (
    <a
      href={`#${offer.id}`}
      className="group relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition"
    >
      <div className="absolute z-10 m-3 px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-900 shadow">{offer.badge}</div>
      <div className="h-48">
        <img src={offer.image} alt={offer.title} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2">
          <span className="h-9 w-9 grid place-items-center rounded-lg bg-sky-50 text-sky-600">
            <Icon className="h-5 w-5" />
          </span>
          <h3 className="text-lg font-semibold text-gray-900">{offer.title}</h3>
        </div>
        <p className="mt-2 text-sm text-gray-600">{offer.desc}</p>
        <div className="mt-4 inline-flex items-center text-sm font-medium text-sky-700 group-hover:gap-2 transition-all">
          Scopri di più
          <span className="opacity-0 group-hover:opacity-100 transition">→</span>
        </div>
      </div>
    </a>
  );
}

export default function OffersGrid() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Le nostre proposte</h2>
            <p className="mt-1 text-gray-600">Soluzioni per ogni esigenza: famiglia, coppie, gruppi e viaggi su misura.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-sky-600 text-white font-medium shadow hover:brightness-110">Richiedi preventivo</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((o) => (
            <OfferCard key={o.id} offer={o} />
          ))}
        </div>
      </div>
    </section>
  );
}
