import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Search,
  Download,
  Printer,
  MousePointerClick,
  BookOpen,
} from "lucide-react";

export default function UserGuidePage() {
  const guides = [
    {
      icon: Search,
      title: "Finding Songs",
      description: "How to search and browse Chinese songs",
      steps: [
        "Use the search bar at the top of the page",
        "Enter song title, artist name, or lyrics in Chinese/Pinyin",
        "Browse popular songs from the homepage",
        "Filter songs by difficulty level",
      ],
    },
    {
      icon: MousePointerClick,
      title: "Using Synchronized Lyrics",
      description: "Learn to use the lyrics viewer",
      steps: [
        "Click on any song to open the lyrics viewer",
        "Chinese characters are shown with Pinyin above",
        "English translation appears below (when available)",
        "Click on any line to focus on that part",
      ],
    },
    {
      icon: Download,
      title: "Downloading Content",
      description: "Save lyrics for offline learning",
      steps: [
        "Look for the download button on any song page",
        "Choose PDF format for best print quality",
        "Downloads include both Chinese and Pinyin",
        "Files are optimized for mobile and desktop",
      ],
    },
    {
      icon: Printer,
      title: "Printing Lyrics",
      description: "Get physical copies of lyrics",
      steps: [
        "Click the print button on any song page",
        "Select your preferred paper size",
        "Choose to include/exclude English translations",
        "Use landscape mode for better formatting",
      ],
    },
    {
      icon: BookOpen,
      title: "Study Tips",
      description: "Make the most of Lyrics Pinyin",
      steps: [
        "Start with easier songs for beginners",
        "Practice reading Pinyin alongside characters",
        "Use the audio playback feature while reading",
        "Print lyrics for offline practice",
      ],
    },
  ];

  return (
    <div className="container py-12 max-w-4xl">
      {/* Header */}
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tight">User Guide</h1>
        <p className="text-muted-foreground text-lg">
          Learn how to use Lyrics Pinyin effectively for your Chinese learning
          journey
        </p>
      </div>

      {/* Guide Cards */}
      <div className="space-y-6">
        {guides.map((guide, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <guide.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle>{guide.title}</CardTitle>
                  <CardDescription>{guide.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                {guide.steps.map((step, stepIndex) => (
                  <li key={stepIndex}>{step}</li>
                ))}
              </ol>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Help Section */}
      <div className="mt-12 p-6 bg-muted/50 rounded-lg text-center space-y-4">
        <h2 className="font-semibold">Need More Help?</h2>
        <p className="text-muted-foreground">
          If you have any questions or need assistance, please check our FAQ
          section or contact us directly.
        </p>
      </div>
    </div>
  );
}
