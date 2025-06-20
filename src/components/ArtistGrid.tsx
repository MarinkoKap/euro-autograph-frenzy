
import { artists } from "@/data/artists";
import ArtistCard from "./ArtistCard";
import { Artist } from "@/types/Artist";

interface ArtistGridProps {
  onArtistSelect: (artist: Artist) => void;
  autographs: string[];
}

const ArtistGrid = ({ onArtistSelect, autographs }: ArtistGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {artists.map((artist, index) => (
        <ArtistCard
          key={artist.id}
          artist={artist}
          onClick={() => onArtistSelect(artist)}
          hasAutograph={autographs.includes(artist.name)}
          delay={index * 100}
        />
      ))}
    </div>
  );
};

export default ArtistGrid;
