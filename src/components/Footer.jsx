import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-sky-500 to-cyan-400 grid place-items-center text-white font-bold">FB</div>
              <span className="font-semibold text-gray-800">Flames Blue Travel</span>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              Agenzia viaggi e tour operator: consulenza personalizzata, assistenza continua e selezione di partner affidabili.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Contatti</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-sky-600" /> +39 02 1234 567</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-sky-600" /> info@flamesbluetravel.it</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-sky-600" /> Via delle Vacanze 10, Milano</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Perché scegliere noi</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600 list-disc list-inside">
              <li>Miglior prezzo garantito</li>
              <li>Pagamenti sicuri e rateizzabili</li>
              <li>Policy di cancellazione chiare</li>
              <li>Assistenza 7 giorni su 7</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Flames Blue Travel — P.IVA 00000000000</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Cookie</a>
            <a href="#" className="hover:text-gray-700">Termini e condizioni</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
