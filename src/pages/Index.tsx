
import { useState } from "react";
import ArtistGrid from "@/components/ArtistGrid";
import ChatDialog from "@/components/ChatDialog";
import AutographCollection from "@/components/AutographCollection";
import { Artist } from "@/types/Artist";

const Index = () => {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [autographs, setAutographs] = useState<string[]>([]);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleArtistSelect = (artist: Artist) => {
    setSelectedArtist(artist);
    setIsChatOpen(true);
  };

  const handleGetAutograph = (artistName: string) => {
    if (!autographs.includes(artistName)) {
      setAutographs([...autographs, artistName]);
    }
    setIsChatOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            🎤 Eurovision Meet & Greet 🎤
          </h1>
          <p className="text-xl text-white/90 mb-2">
            Chat with the stars and collect their autographs!
          </p>
          <div className="flex justify-center items-center gap-4 text-white/80">
            <span className="text-lg">⭐ Autographs: {autographs.length}/6 ⭐</span>
          </div>
        </div>

        {/* Autograph Collection */}
        <AutographCollection autographs={autographs} />

        {/* Artist Grid */}
        <ArtistGrid 
          onArtistSelect={handleArtistSelect} 
          autographs={autographs}
        />

        {/* Chat Dialog */}
        <ChatDialog
          artist={selectedArtist}
          isOpen={isChatOpen}
          onClose={() => setIsChatOpen(false)}
          onGetAutograph={handleGetAutograph}
        />
      </div>
    </div>
  );
};

export default Index;
