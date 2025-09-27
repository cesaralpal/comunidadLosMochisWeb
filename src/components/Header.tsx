import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

// Definimos el tipo para nuestros links de navegación
interface NavLinkItem {
  title: string;
  path: string;
}

const navLinks: NavLinkItem[] = [
  { title: 'Inicio', path: '/' },
  { title: 'Conócenos', path: '/nosotros' },
  { title: 'Mensajes', path: '/mensajes' },
  { title: 'Eventos', path: '/eventos' },
  { title: 'Dar', path: '/dar' },
];

const Header: React.FC = () => {
  // Tipamos el estado 'isOpen' como booleano
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-slate-800">
          Comunidad <span className="text-indigo-600">Los Mochis</span>
        </NavLink>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.title}
              to={link.path}
              // Tipamos el objeto destructurado en la función className
              className={({ isActive }: { isActive: boolean }) =>
                `text-gray-600 hover:text-indigo-600 transition-colors ${
                  isActive ? 'font-bold text-indigo-600' : ''
                }`
              }
            >
              {link.title}
            </NavLink>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white px-6 pb-4">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.title}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }: { isActive: boolean }) =>
                    `block text-center py-2 rounded-md text-gray-700 hover:bg-indigo-50 ${
                      isActive ? 'font-bold bg-indigo-100 text-indigo-700' : ''
                    }`
                  }
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;