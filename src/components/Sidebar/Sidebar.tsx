
import { Home, Music } from 'lucide-react';
import logo from '../../assets/Logo.png';


const Sidebar: React.FC = () => {
  return (
    <aside className="h-screen w-64 bg-gradient-to-b from-neutral-800 to-orange-900 text-white flex flex-col py-8 px-4 shadow-lg">
      <div className="flex items-center gap-4 mb-10">
        <img src={logo} alt="Logo DrumBase" className="w-8 h-8 mb-2 rounded-full shadow-lg bg-white object-contain" />
        <div className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-white via-orange-400 to-orange-600 bg-clip-text text-transparent select-none">
          DrumBase
        </div>
      </div>
      <nav className="flex-1">
        <ul className="space-y-4">
          <li>
            <a
              href="#"
              className="py-2 px-4 rounded-lg hover:bg-orange-400/20 transition-colors font-semibold flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-orange-400/10 bg-orange-400/10"
              tabIndex={0}
              aria-current="page"
            >
              <Home size={20} />
              Accueil
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-4 rounded-lg hover:bg-orange-400/20 transition-colors font-semibold flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-orange-400/10"
            >
              <Music size={20} />
              Playlists
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
