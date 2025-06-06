"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { AlignLeft, AlignCenter, AlignRight, MoveUp, MoveDown, Settings2 } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface Controls {
  align: "left" | "center" | "right";
  items: "top" | "bottom";
}

export const Controls = ({ align, items }: Controls) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleAlignChange = (value: string) => {
    router.push(`${pathname}?items=${items}&align=${value}`);
  };

  const handleItemsChange = (value: string) => {
    router.push(`${pathname}?items=${value}&align=${align}`);
  };

  return (
    <div className="container max-w-screen-lg py-6">
      <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-sm">
        <CardContent className="p-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Header */}
            <div className="flex items-center gap-2">
              <Settings2 className="w-4 h-4 text-muted-foreground" />
              <h3 className="text-sm font-medium text-foreground">Layout Settings</h3>
            </div>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
              {/* Pinyin Position Controls */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <label className="text-sm font-medium text-muted-foreground whitespace-nowrap">Pinyin Position</label>
                <ToggleGroup type="single" value={items} onValueChange={handleItemsChange} className="justify-start bg-muted/70">
                  <ToggleGroupItem value="top" aria-label="Pinyin on top" size="sm" className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground px-4">
                    <MoveUp className="w-4 h-4" />
                    <span>Top</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="bottom" aria-label="Pinyin on bottom" size="sm" className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground px-4">
                    <MoveDown className="w-4 h-4" />
                    <span>Bottom</span>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>

              <Separator orientation="vertical" className="hidden sm:block h-8" />
              <Separator orientation="horizontal" className="sm:hidden" />

              {/* Text Alignment Controls */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <label className="text-sm font-medium text-muted-foreground whitespace-nowrap">Text Alignment</label>
                <ToggleGroup type="single" value={align} onValueChange={handleAlignChange} className="justify-start bg-muted/70">
                  <ToggleGroupItem value="left" aria-label="Align left" size="sm" className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground px-4">
                    <AlignLeft className="w-4 h-4" />
                    <span className="hidden md:inline">Left</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="center" aria-label="Align center" size="sm" className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground px-4">
                    <AlignCenter className="w-4 h-4" />
                    <span className="hidden md:inline">Center</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="right" aria-label="Align right" size="sm" className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground px-4">
                    <AlignRight className="w-4 h-4" />
                    <span className="hidden md:inline">Right</span>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
