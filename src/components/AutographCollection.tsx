
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AutographCollectionProps {
  autographs: string[];
}

const AutographCollection = ({ autographs }: AutographCollectionProps) => {
  if (autographs.length === 0) {
    return (
      <Card className="mb-8 bg-white/10 backdrop-blur-sm border-white/30">
        <CardHeader>
          <CardTitle className="text-white text-center">
            🏆 Your Autograph Collection 🏆
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-white/70 text-center">
            No autographs yet! Start chatting with the artists to collect them.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mb-8 bg-white/10 backdrop-blur-sm border-white/30">
      <CardHeader>
        <CardTitle className="text-white text-center">
          🏆 Your Autograph Collection ({autographs.length}/6) 🏆
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 justify-center">
          {autographs.map((autograph, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="bg-yellow-400 text-black font-bold px-3 py-1 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              ✨ {autograph} ✨
            </Badge>
          ))}
        </div>
        
        {autographs.length === 6 && (
          <div className="text-center mt-4 animate-fade-in">
            <p className="text-yellow-300 font-bold text-lg">
              🎉 CONGRATULATIONS! 🎉
            </p>
            <p className="text-white/90">
              You've collected all the autographs! You're a true Eurovision superfan!
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AutographCollection;
