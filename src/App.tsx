

import React, { useState } from 'react';
import MainLayout from './components/MainLayout/MainLayout';
import Sidebar from './components/Sidebar/Sidebar';
import HeroSection from './components/HeroSection/HeroSection';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <MainLayout>
      <div className="relative min-h-screen w-full">
        {/* Bouton menu flottant en haut à gauche, caché si sidebar ouverte */}
        {!sidebarOpen && (
          <button
            className="fixed top-6 left-6 z-30 bg-orange-500 text-white p-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            onClick={() => setSidebarOpen(true)}
            aria-label="Ouvrir le menu"
          >
            {/* Icône menu burger */}
            <span className="block w-6 h-0.5 bg-white mb-1 transition-all duration-300"></span>
            <span className="block w-6 h-0.5 bg-white mb-1 transition-all duration-300"></span>
            <span className="block w-6 h-0.5 bg-white transition-all duration-300"></span>
          </button>
        )}

        {/* Sidebar slide-in */}
        <div className={`fixed top-0 left-0 h-full z-20 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <Sidebar />
        </div>

        {/* Overlay pour fermer la sidebar */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-10"
            onClick={() => setSidebarOpen(false)}
            aria-label="Fermer le menu"
          />
        )}

        {/* HeroSection en full screen */}
        <main className="w-full min-h-screen flex items-center justify-center">
          <HeroSection />
        </main>
      </div>
    </MainLayout>
  );
}

export default App;
