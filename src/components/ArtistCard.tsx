
import { Artist } from "@/types/Artist";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ArtistCardProps {
  artist: Artist;
  onClick: () => void;
  hasAutograph: boolean;
  delay: number;
}

const ArtistCard = ({ artist, onClick, hasAutograph, delay }: ArtistCardProps) => {
  return (
    <Card 
      className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 ${
        hasAutograph ? 'border-yellow-400 shadow-yellow-400/50' : 'border-white/30'
      } bg-white/10 backdrop-blur-sm animate-fade-in hover-scale`}
      onClick={onClick}
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="p-6 text-center relative">
        {hasAutograph && (
          <Badge className="absolute top-2 right-2 bg-yellow-400 text-black font-bold">
            ✓ Signed!
          </Badge>
        )}
        
        <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${artist.color} flex items-center justify-center text-3xl shadow-lg`}>
          {artist.flag}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2">{artist.name}</h3>
        <p className="text-white/80 text-sm mb-2">{artist.country}</p>
        <p className="text-white/70 text-sm italic mb-3">"{artist.song}"</p>
        <p className="text-white/60 text-xs">{artist.personality}</p>
        
        <div className="mt-4 px-4 py-2 bg-white/20 rounded-full text-white text-sm hover:bg-white/30 transition-colors">
          {hasAutograph ? "Chat Again" : "Meet & Greet"}
        </div>
      </CardContent>
    </Card>
  );
};

export default ArtistCard;
