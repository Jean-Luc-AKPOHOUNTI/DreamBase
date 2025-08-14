import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="h-screen w-56 bg-gradient-to-b from-neutral-800 to-orange-500 text-white flex flex-col py-8 px-4 shadow-lg">
      <div className="text-2xl font-extrabold mb-10 tracking-tight bg-gradient-to-r from-white via-orange-400 to-orange-600 bg-clip-text text-transparent select-none">
        DrumBase
      </div>
      <nav className="flex-1">
        <ul className="space-y-4">
          <li>
            <a href="#" className="block py-2 px-4 rounded-lg hover:bg-orange-400/20 transition-colors font-semibold">
              Accueil
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 rounded-lg hover:bg-orange-400/20 transition-colors font-semibold">
              Playlists
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
