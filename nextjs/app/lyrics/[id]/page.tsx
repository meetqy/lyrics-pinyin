import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Share2, ThumbsUp } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock data - replace with real API data later
const MOCK_SONG = {
  id: 1,
  title: "月亮代表我的心",
  titlePinyin: "Yuè liàng dài biǎo wǒ de xīn",
  artist: "邓丽君",
  artistPinyin: "Dèng lì jūn",
  image: "https://picsum.photos/500/500",
  difficulty: {
    easy: 45,
    medium: 35,
    hard: 20,
  },
  lyrics: [
    {
      text: "你问我爱你有多深",
      pinyin: "nǐ wèn wǒ ài nǐ yǒu duō shēn",
    },
    {
      text: "我爱你有几分",
      pinyin: "wǒ ài nǐ yǒu jǐ fēn",
    },
    // ... more lyrics
  ],
};

const DifficultyButton = ({
  difficulty,
  votes,
  isHighest,
}: {
  difficulty: string;
  votes: number;
  isHighest: boolean;
}) => {
  return (
    <Button
      variant={isHighest ? "default" : "outline"}
      size="sm"
      className={cn(
        "min-w-[100px] relative",
        isHighest && "ring-2 ring-primary/20"
      )}
    >
      <div className="flex items-center gap-1">
        <span className="capitalize">{difficulty}</span>
        <span className="text-xs font-normal">{votes}%</span>
      </div>
      {isHighest && (
        <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-1.5 py-0.5 rounded-full">
          Most
        </span>
      )}
    </Button>
  );
};

export default function LyricsDetailPage() {
  const votes = MOCK_SONG.difficulty;
  const highestVotes = Math.max(...Object.values(votes));

  return (
    <div className="min-h-screen bg-gradient-to-b from-background/80 to-background">
      {/* Hero Section */}
      <div className="relative">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-[400px]">
            <Image
              src={MOCK_SONG.image}
              alt={MOCK_SONG.title}
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background to-background" />
          </div>
        </div>

        {/* Content */}
        <div className="container max-w-screen-lg relative z-10 pt-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Album Cover */}
            <div className="w-[200px] md:w-[280px] shrink-0 mx-auto md:mx-0">
              <div className="aspect-square relative rounded-lg overflow-hidden shadow-xl ring-1 ring-white/10">
                <Image
                  src={MOCK_SONG.image}
                  alt={MOCK_SONG.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Song Info */}
            <div className="flex flex-col justify-center text-center md:text-left">
              <div className="space-y-6">
                {/* Title & Artist */}
                <div className="space-y-2">
                  <h1 className="text-3xl md:text-5xl font-bold">
                    {MOCK_SONG.title}
                  </h1>
                  <p className="text-lg md:text-xl text-primary/90">
                    {MOCK_SONG.titlePinyin}
                  </p>
                  <div className="space-y-1 pt-2">
                    <p className="text-lg">{MOCK_SONG.artist}</p>
                    <p className="text-sm text-muted-foreground">
                      {MOCK_SONG.artistPinyin}
                    </p>
                  </div>
                </div>

                {/* Difficulty Rating */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center md:justify-start">
                    <ThumbsUp className="w-4 h-4" />
                    <span>Difficulty Rating</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
                    {Object.entries(votes).map(([key, value]) => (
                      <DifficultyButton
                        key={key}
                        difficulty={key}
                        votes={value}
                        isHighest={value === highestVotes}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lyrics Section */}
      <div className="container max-w-screen-lg py-12">
        <div className="border rounded-lg p-8 bg-card/50 backdrop-blur-sm">
          <div className="space-y-12 text-center">
            {MOCK_SONG.lyrics.map((line, index) => (
              <div key={index} className="group">
                <p className="text-sm tracking-widest text-primary/70 font-medium mb-2">
                  {line.pinyin}
                </p>
                <p className="text-2xl tracking-wide group-hover:text-primary transition-colors">
                  {line.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons Section */}
      <div className="container max-w-screen-lg relative z-10 py-12">
        <div className="flex items-center justify-end h-16 gap-4">
          <Button size="lg" variant="outline">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button size="lg" className="min-w-[140px]">
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>
      </div>
    </div>
  );
}
