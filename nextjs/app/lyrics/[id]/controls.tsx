"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";
import { AlignLeft, AlignCenter, AlignRight, MoveUp, MoveDown, Settings2, FileImage, FileText } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import domtoimage from "dom-to-image";
import jsPDF from "jspdf";

interface Controls {
  align: "left" | "center" | "right";
  items: "top" | "bottom";
  songName: string;
  artistName: string;
}

export const Controls = ({ align, items, songName, artistName }: Controls) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isDownloading, setIsDownloading] = useState(false);

  const handleAlignChange = (value: string) => {
    router.push(`${pathname}?items=${items}&align=${value}`);
  };

  const handleItemsChange = (value: string) => {
    router.push(`${pathname}?items=${value}&align=${align}`);
  };

  const downloadAsImage = async () => {
    setIsDownloading(true);
    try {
      const element = document.getElementById("pinyin-box");
      if (!element) {
        throw new Error("Pinyin box element not found");
      }

      const dataUrl = await domtoimage.toPng(element, {
        quality: 1,
        bgcolor: "#ffffff",
        style: {
          transform: "scale(2)",
          transformOrigin: "top left",
          width: element.offsetWidth + "px",
          height: element.offsetHeight + "px",
        },
      });

      const link = document.createElement("a");
      link.download = `${songName} - ${artistName} (Pinyin Lyrics).png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Error downloading image:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  const downloadAsPDF = async () => {
    setIsDownloading(true);
    try {
      const element = document.getElementById("pinyin-box");
      if (!element) {
        throw new Error("Pinyin box element not found");
      }

      // 使用 toPng 方法获取图片数据
      const dataUrl = await domtoimage.toPng(element, {
        quality: 1,
        bgcolor: "#ffffff",
        style: {
          transform: "scale(2)",
          transformOrigin: "top left",
          width: element.offsetWidth + "px",
          height: element.offsetHeight + "px",
        },
      });

      // 创建一个图片对象来获取尺寸
      const img = new Image();
      img.onload = () => {
        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: "a4",
        });

        const imgWidth = 210; // A4 width in mm
        const pageHeight = 295; // A4 height in mm
        const imgHeight = (img.height * imgWidth) / img.width;
        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(dataUrl, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(dataUrl, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save(`${songName} - ${artistName} (Pinyin Lyrics).pdf`);
        setIsDownloading(false);
      };

      img.onerror = () => {
        console.error("Error loading image for PDF generation");
        setIsDownloading(false);
      };

      img.src = dataUrl;
    } catch (error) {
      console.error("Error downloading PDF:", error);
      setIsDownloading(false);
    }
  };

  return (
    <div className="container max-w-screen-lg py-6">
      <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-sm">
        <CardContent className="p-4">
          <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center gap-2 pb-2">
              <Settings2 className="w-4 h-4 text-muted-foreground" />
              <h3 className="text-sm font-medium text-foreground">Layout Settings</h3>
            </div>

            {/* Controls Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* Download Controls */}
              <div className="flex flex-col gap-3">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Download</label>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={downloadAsImage} disabled={isDownloading} className="flex-1 sm:flex-none">
                    <FileImage className="w-4 h-4" />
                    <span className="ml-2">PNG</span>
                  </Button>
                  <Button variant="outline" onClick={downloadAsPDF} disabled={isDownloading} className="flex-1 sm:flex-none">
                    <FileText className="w-4 h-4" />
                    <span className="ml-2">PDF</span>
                  </Button>
                </div>
              </div>

              {/* Pinyin Position Controls */}
              <div className="flex flex-col gap-3">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Pinyin Position</label>
                <ToggleGroup type="single" value={items} onValueChange={handleItemsChange} className="w-full">
                  <ToggleGroupItem value="top" aria-label="Pinyin on top" className="flex-1 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground">
                    <MoveUp className="w-4 h-4" />
                    <span className="ml-2">Top</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="bottom" aria-label="Pinyin on bottom" className="flex-1 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground">
                    <MoveDown className="w-4 h-4" />
                    <span className="ml-2">Bottom</span>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>

              {/* Text Alignment Controls */}
              <div className="flex flex-col gap-3 col-span-1 md:col-span-2 xl:col-span-1">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Text Alignment</label>
                <ToggleGroup type="single" value={align} onValueChange={handleAlignChange} className="w-full">
                  <ToggleGroupItem value="left" aria-label="Align left" className="flex-1 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground">
                    <AlignLeft className="w-4 h-4" />
                    <span className="ml-2">Left</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="center" aria-label="Align center" className="flex-1 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground">
                    <AlignCenter className="w-4 h-4" />
                    <span className="ml-2">Center</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="right" aria-label="Align right" className="flex-1 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground">
                    <AlignRight className="w-4 h-4" />
                    <span className="ml-2">Right</span>
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
