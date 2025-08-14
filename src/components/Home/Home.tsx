

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AlbumGrid from './AlbumGrid';
import type { Album } from './AlbumGrid';

const Home: React.FC = () => {

  const [albums, setAlbums] = useState<Album[]>([
    {
      id: '1',
      title: 'Sunset Grooves',
      artist: 'DJ Chillwave',
      cover: '/images/back2.webp',
    },
    {
      id: '2',
      title: 'Night Drive',
      artist: 'Synth Master',
      cover: '/images/back3.webp',
    },
    {
      id: '3',
      title: 'Tropical Vibes',
      artist: 'Summer Beats',
      cover: '/images/back4.webp',
    },
    {
      id: '4',
      title: 'Lo-Fi Dreams',
      artist: 'LoFi Collective',
      cover: '/images/back5.webp',
    },
    {
      id: '5',
      title: 'Electro Pulse',
      artist: 'Pulse Machine',
      cover: '/images/back6.webp',
    },
    {
      id: '6',
      title: 'Jazz & Chill',
      artist: 'Blue Note',
      cover: '/images/back8.webp',
    },
  ]);
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [search, setSearch] = useState('');
  const [importTitle, setImportTitle] = useState('');
  const [importArtist, setImportArtist] = useState('');
  const [importCover, setImportCover] = useState('');
  const [showImport, setShowImport] = useState(false);
  const [page, setPage] = useState(1);
  const ALBUMS_PER_PAGE = 8;
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Filtrage des albums selon la recherche
  const filteredAlbums = albums.filter(
    (album) =>
      album.title.toLowerCase().includes(search.toLowerCase()) ||
      album.artist.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination : si pas de recherche, on affiche 8 albums max
  const isSearching = search.trim().length > 0;
  const totalPages = Math.ceil(albums.length / ALBUMS_PER_PAGE);
  const paginatedAlbums = isSearching
    ? filteredAlbums
    : albums.slice((page - 1) * ALBUMS_PER_PAGE, page * ALBUMS_PER_PAGE);

  // Gestion de l'import d'album
  const handleImport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!importTitle.trim() || !importArtist.trim() || !importCover.trim()) return;
    setAlbums([
      ...albums,
      {
        id: Date.now().toString(),
        title: importTitle,
        artist: importArtist,
        cover: importCover,
      },
    ]);
    setImportTitle('');
    setImportArtist('');
    setImportCover('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // Gestion de l'import d'image locale (optionnel)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (typeof ev.target?.result === 'string') {
          setImportCover(ev.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <section
      className="relative min-h-screen w-full flex flex-row items-stretch text-white px-4 py-12"
      style={{
        background: `url('/images/back7.webp') center/cover no-repeat, linear-gradient(120deg, #1a1a1a 60%, #ff6b35 100%)`,
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center">
        <p className="text-lg md:text-2xl mb-8 text-white/90 text-center">
          Découvrez, écoutez et vibrez avec les meilleures playlists et nouveautés du moment.
        </p>
        <AlbumGrid albums={paginatedAlbums} onSelect={setSelectedAlbum} />
        {/* Pagination */}
        {!isSearching && totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className={`px-3 py-1 rounded bg-orange-500/80 hover:bg-orange-600 text-white font-bold transition-colors disabled:opacity-40 disabled:cursor-not-allowed`}
            >
              Précédent
            </button>
            <span className="text-white/80 font-semibold">Page {page} / {totalPages}</span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className={`px-3 py-1 rounded bg-orange-500/80 hover:bg-orange-600 text-white font-bold transition-colors disabled:opacity-40 disabled:cursor-not-allowed`}
            >
              Suivant
            </button>
          </div>
        )}
        <div className="mt-12 text-white/80 text-base text-center">
          <span className="font-bold">À la une :</span> Playlist spéciale été, nouveautés, et plus encore à découvrir !
        </div>
      </div>
      {/* Colonne droite : recherche et import */}
      <aside className="relative z-10 w-full max-w-xs flex flex-col gap-8 bg-black/40 rounded-xl p-6 ml-8 mt-8 self-start shadow-2xl">
        <div>
          <label htmlFor="search" className="block text-lg font-bold mb-2">Rechercher un album</label>
          <input
            id="search"
            type="text"
            className="w-full px-3 py-2 rounded bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Titre ou artiste..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <button
          onClick={() => setShowImport(v => !v)}
          className="relative group flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-orange-200 to-pink-300 text-white font-bold shadow-lg hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400 mt-2 mb-2 overflow-hidden"
        >
          <span className="z-10">{showImport ? 'Fermer le formulaire' : 'Importer un album'}</span>
        </button>
        <AnimatePresence>
          {showImport && (
            <motion.form
              onSubmit={handleImport}
              className="flex flex-col gap-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4, type: 'spring' }}
            >
              <div className="text-lg font-bold mb-1 animate-pulse bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">Importer un album</div>
              <input
                type="text"
                className="px-3 py-2 rounded bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Titre de l'album"
                value={importTitle}
                onChange={e => setImportTitle(e.target.value)}
                required
              />
              <input
                type="text"
                className="px-3 py-2 rounded bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Artiste"
                value={importArtist}
                onChange={e => setImportArtist(e.target.value)}
                required
              />
              <input
                type="url"
                className="px-3 py-2 rounded bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="URL de la pochette (ou importer ci-dessous)"
                value={importCover}
                onChange={e => setImportCover(e.target.value)}
              />
              <div className="flex items-center gap-2">
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="block w-full text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                />
              </div>
              <button
                type="submit"
                className="mt-2 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded transition-all shadow-lg"
              >
                Ajouter l'album
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </aside>
      {/* TODO: Afficher le lecteur audio quand un album est sélectionné */}
      {/* {selectedAlbum && <AudioPlayer album={selectedAlbum} />} */}
    </section>
  );
};

export default Home;
