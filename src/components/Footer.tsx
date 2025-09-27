import React from 'react';
import { Facebook, Instagram, Youtube, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold mb-2">Comunidad Los Mochis</h3>
            <p className="text-slate-400">
              Una iglesia para la ciudad, apasionada por Jesús y su gente.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Encuéntranos</h4>
            <div className="flex items-center justify-center md:justify-start text-slate-300 mb-2">
              <MapPin size={20} className="mr-2" />
              <p>Dirección de la Iglesia, Los Mochis, Sin.</p>
            </div>
            <p className="text-slate-300">Domingos: 10:00 AM y 12:00 PM</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Síguenos</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={24} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={24} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Youtube size={24} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-6 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Comunidad Los Mochis. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;