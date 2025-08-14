
import { Home, Music, Heart } from 'lucide-react';
import logo from '../../assets/Logo.png';


type SidebarProps = {
  onNavigate?: (page: 'hero' | 'home' | 'playlists' | 'favoris') => void;
};

const Sidebar: React.FC<SidebarProps> = ({ onNavigate }) => {
  return (
    <aside className="h-screen w-64 bg-gradient-to-b from-neutral-800 to-orange-900 text-white flex flex-col py-8 px-4 shadow-lg">
      <button
        type="button"
        className="flex items-center gap-4 mb-10 focus:outline-none cursor-pointer"
        onClick={() => onNavigate && onNavigate('hero')}
        tabIndex={0}
        aria-label="Retour à l'accueil DrumBase"
      >
        <img src={logo} alt="Logo DrumBase" className="w-8 h-8 rounded-full shadow-lg bg-white object-contain" />
        <div className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-white via-orange-400 to-orange-600 bg-clip-text text-transparent select-none">
          DrumBase
        </div>
      </button>
      <nav className="flex-1">
        <ul className="space-y-4">
          <li>
            <button
              type="button"
              className="w-full text-left py-2 px-4 rounded-lg hover:bg-orange-400/20 transition-colors font-semibold flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-orange-400/10 cursor-pointer"
              tabIndex={0}
              aria-current="page"
              onClick={() => onNavigate && onNavigate('home')}
            >
              <Home size={20} />
              Accueil
            </button>
          </li>
          <li>
            <button
              type="button"
              className="w-full text-left py-2 px-4 rounded-lg hover:bg-orange-400/20 transition-colors font-semibold flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-orange-400/ cursor-pointer"
              onClick={() => onNavigate && onNavigate('playlists')}
            >
              <Music size={20} />
              Playlists
            </button>
          </li>
          <li>
            <button
              type="button"
              className="w-full text-left py-2 px-4 rounded-lg hover:bg-orange-400/20 transition-colors font-semibold flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-orange-400/10 cursor-pointer"
              onClick={() => onNavigate && onNavigate('favoris')}
            >
              <Heart size={20} />
              Favoris
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
