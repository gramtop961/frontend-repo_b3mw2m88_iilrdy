import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OffersGrid from './components/OffersGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <OffersGrid />
        <section id="dynamic" className="py-14 sm:py-20 bg-gradient-to-b from-white to-sky-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold">Dynamic Package con tariffe in tempo reale</h2>
                <p className="mt-3 text-gray-600">Componi il tuo pacchetto ideale con voli, hotel e servizi aggiuntivi in tempo reale grazie all’integrazione con API/XML dei principali fornitori. Massimizza convenienza e flessibilità.</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700 list-disc list-inside">
                  <li>Comparazione multi-fornitore</li>
                  <li>Prezzi dinamici e disponibilità live</li>
                  <li>Upsell automatico su assicurazioni e servizi</li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button className="px-4 py-2 rounded-lg bg-sky-600 text-white font-medium shadow hover:brightness-110">Richiedi demo</button>
                  <button className="px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50">Scopri come funziona</button>
                </div>
              </div>
              <div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-gray-100 shadow">
                  <img
                    src="https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1600&auto=format&fit=crop"
                    alt="Dynamic packaging"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
