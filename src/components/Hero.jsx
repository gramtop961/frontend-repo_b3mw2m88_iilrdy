import { Calendar, MapPin, Users, Search } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-cyan-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-medium mb-4">
              Viaggia con sicurezza e serenità
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Crociere, Tour e Viaggi su misura per ogni <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500">viaggiatore</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              Dalla scoperta dell'Italia alle meraviglie del mondo, fino ai pacchetti dinamici con voli + hotel. Pianifica l'itinerario perfetto con l'aiuto dei nostri travel specialist.
            </p>

            <div className="mt-8 p-4 sm:p-6 bg-white/90 backdrop-blur rounded-2xl shadow-lg border border-gray-100">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="grid sm:grid-cols-5 gap-3"
              >
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-gray-700 mb-1">Destinazione</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Es. Grecia, Giappone, Puglia"
                      className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Quando"
                      className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Persone</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <input
                      type="number"
                      min={1}
                      defaultValue={2}
                      className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Tipologia</label>
                  <select className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-500">
                    <option>Crociere</option>
                    <option>Tour di Gruppo</option>
                    <option>Italia</option>
                    <option>Mondo</option>
                    <option>Dynamic Package</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-sky-600 to-cyan-500 text-white font-medium shadow hover:brightness-110 transition">
                    <Search className="h-4 w-4" /> Cerca
                  </button>
                </div>
              </form>
              <p className="mt-3 text-xs text-gray-500">Suggerimento: prova a cercare per stagionalità o esperienza (es. "aurora boreale", "mare agosto").</p>
            </div>

            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex -space-x-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  // Decorative avatars
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br from-sky-400 to-cyan-400" />
                ))}
              </div>
              <p><span className="font-semibold text-gray-900">4.9/5</span> valutazione media | Garanzia miglior prezzo</p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop"
                alt="Crociere e viaggi nel mondo"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white shadow-lg border border-gray-100 rounded-xl px-4 py-3">
              <p className="text-sm font-medium text-gray-900">Assistenza 7/7</p>
              <p className="text-xs text-gray-600">Consulenti dedicati durante tutto il viaggio</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
