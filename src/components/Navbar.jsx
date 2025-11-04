import { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { id: 'cruises', label: 'Crociere' },
    { id: 'groups', label: 'Tour di Gruppo' },
    { id: 'italy', label: 'Italia' },
    { id: 'world', label: 'Mondo' },
    { id: 'dynamic', label: 'Dynamic Package' },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-sky-500 to-cyan-400 grid place-items-center text-white font-bold">FB</div>
            <span className="font-semibold text-gray-800">Flames Blue Travel</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-sm text-gray-600 hover:text-sky-600 transition-colors"
              >
                {n.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-sky-600" /> +39 02 1234 567</div>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-sky-600" /> Milano, IT</div>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="block w-full text-left py-2 text-gray-700"
              >
                {n.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
