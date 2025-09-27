import React from 'react';
import heroImage from '../assets/hero-background.jpg';

const Hero: React.FC = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})`, height: '70vh' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Bienvenido a Casa
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow-md">
          Somos una familia de fe que busca conocer a Dios y darlo a conocer.
        </p>
        <div className="space-x-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105">
            Nuevo Aquí
          </button>
          <button className="bg-white/20 backdrop-blur-sm border border-white/50 hover:bg-white/30 text-white font-bold py-3 px-8 rounded-full transition-colors">
            Ver en Vivo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;