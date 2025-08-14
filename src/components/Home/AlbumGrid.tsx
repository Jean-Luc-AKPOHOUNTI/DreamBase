import React from 'react';

export interface Album {
  id: string;
  title: string;
  artist: string;
  cover: string;
};

type AlbumGridProps = {
  albums: Album[];
  onSelect: (album: Album) => void;
};

const AlbumGrid: React.FC<AlbumGridProps> = ({ albums, onSelect }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-5xl mx-auto mt-8">
      {albums.map((album) => (
        <button
          key={album.id}
          className="group bg-white/10 rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
          onClick={() => onSelect(album)}
        >
          <img
            src={album.cover}
            alt={album.title}
            className="w-full h-40 object-cover group-hover:opacity-90"
          />
          <div className="p-3 text-left">
            <div className="font-bold text-lg text-white truncate">{album.title}</div>
            <div className="text-white/70 text-sm truncate">{album.artist}</div>
          </div>
        </button>
      ))}
    </div>
  );
};

export { AlbumGrid };
export default AlbumGrid;
