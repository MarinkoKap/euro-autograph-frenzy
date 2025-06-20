
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Artist } from "@/types/Artist";

interface ChatDialogProps {
  artist: Artist | null;
  isOpen: boolean;
  onClose: () => void;
  onGetAutograph: (artistName: string) => void;
}

const ChatDialog = ({ artist, isOpen, onClose, onGetAutograph }: ChatDialogProps) => {
  const [chatMessages, setChatMessages] = useState<string[]>([]);
  const [currentResponseIndex, setCurrentResponseIndex] = useState(0);

  if (!artist) return null;

  const startChat = () => {
    if (chatMessages.length === 0) {
      setChatMessages([artist.greeting]);
    }
  };

  const getNextResponse = () => {
    if (currentResponseIndex < artist.responses.length) {
      const newMessage = artist.responses[currentResponseIndex];
      setChatMessages([...chatMessages, newMessage]);
      setCurrentResponseIndex(currentResponseIndex + 1);
    }
  };

  const requestAutograph = () => {
    const autographMessage = `*${artist.name} signs your autograph book* ✍️\n\n"${artist.autographMessage}"`;
    setChatMessages([...chatMessages, autographMessage]);
    setTimeout(() => {
      onGetAutograph(artist.name);
    }, 2000);
  };

  const resetChat = () => {
    setChatMessages([]);
    setCurrentResponseIndex(0);
  };

  const handleClose = () => {
    resetChat();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md mx-4">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${artist.color} flex items-center justify-center text-xl`}>
              {artist.flag}
            </div>
            <div>
              <div className="text-lg">{artist.name}</div>
              <div className="text-sm text-muted-foreground font-normal">{artist.country}</div>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Chat Messages */}
          <div className="max-h-64 overflow-y-auto space-y-3">
            {chatMessages.length === 0 ? (
              <Card className="bg-muted/50">
                <CardContent className="p-4">
                  <p className="text-center text-muted-foreground">
                    Click "Start Chatting" to begin your meet & greet!
                  </p>
                </CardContent>
              </Card>
            ) : (
              chatMessages.map((message, index) => (
                <Card key={index} className="bg-primary/10">
                  <CardContent className="p-4">
                    <p className="text-sm whitespace-pre-line">{message}</p>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2">
            {chatMessages.length === 0 ? (
              <Button onClick={startChat} className="w-full">
                Start Chatting 💬
              </Button>
            ) : (
              <>
                {currentResponseIndex < artist.responses.length && (
                  <Button onClick={getNextResponse} variant="outline" className="w-full">
                    Continue Conversation 🗣️
                  </Button>
                )}
                <Button onClick={requestAutograph} className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold">
                  Request Autograph ✍️
                </Button>
              </>
            )}
            
            <Button onClick={handleClose} variant="secondary" className="w-full">
              End Chat 👋
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatDialog;
