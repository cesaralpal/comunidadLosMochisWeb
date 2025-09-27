import React from 'react';
import Hero from '../components/Hero';

const Inicio: React.FC = () => {
  return (
    <div>
      <Hero />
      <div className="px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">¡Nos encantaría conocerte!</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Nuestras reuniones están llenas de adoración, enseñanza práctica de la Biblia y un ambiente amigable para toda la familia.
        </p>
        <div className="border-t pt-8">
            <h3 className="text-2xl font-bold mb-2">Horarios de Reuniones</h3>
            <p className="text-gray-700">Domingos | 10:00 AM & 12:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default Inicio;