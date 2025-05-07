import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { StarIcon } from "lucide-react";

export const Featured = () => {
  return (
    <section className="container py-24">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">
            Popular Chinese Songs
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Start with these trending songs - each with synchronized pinyin
            lyrics
          </p>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array(8)
            .fill(null)
            .map((_, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative">
                  <div className="aspect-square relative">
                    <Image
                      src={`/placeholder-${index + 1}.jpg`}
                      alt="Song cover"
                      width={500}
                      height={500}
                      className="object-cover group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Song Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center justify-between text-white">
                      <div className="space-y-1">
                        <h3 className="font-semibold text-lg leading-none">
                          好想你
                        </h3>
                        <p className="text-sm opacity-90">Hǎo xiǎng nǐ</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <StarIcon className="w-4 h-4" />
                        <span className="text-sm">4.9</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <CardDescription>四叶草</CardDescription>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                      Easy
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* Stats Row */}
        <div className="flex justify-center gap-12 pt-8">
          {[
            { number: "500+", label: "Songs" },
            { number: "10K+", label: "Users" },
            { number: "4.9/5", label: "Rating" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl font-bold">{stat.number}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
