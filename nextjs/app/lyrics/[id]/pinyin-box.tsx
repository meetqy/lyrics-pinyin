import { cn } from "@/lib/utils";

export const PinyinBox = ({ lyrics, lyricsPinyin, align = "center", items = "top" }: { lyrics: string[]; lyricsPinyin: string[]; align?: "left" | "center" | "right"; items?: "top" | "bottom" }) => {
  return (
    <div className="container max-w-screen-lg py-6 md:py-12">
      <div className="border rounded-lg bg-card/50 backdrop-blur-sm">
        <div id="pinyin-box" className="w-full p-4 md:p-8">
          {lyrics.map((line: string, index: number) => {
            const characters = line.split("");
            const pinyinWords = lyricsPinyin[index]?.replace(/\s\s/g, " ")?.split(" ") || [];

            return (
              <div key={index} className="group mb-8">
                <div
                  className={cn("text-xl sm:text-2xl md:text-3xl leading-relaxed", {
                    "text-center": align === "center",
                    "text-left": align === "left",
                    "text-right": align === "right",
                  })}
                >
                  {characters.map((char, charIndex) => {
                    // 跳过空格和标点符号
                    if (char === " " || /[^\u4e00-\u9fff]/.test(char)) {
                      return (
                        <span key={charIndex} className="text-muted-foreground/70">
                          {char}
                        </span>
                      );
                    }

                    // 为汉字添加拼音
                    const pinyin = pinyinWords[charIndex] || "";

                    return (
                      <ruby
                        key={charIndex}
                        className="px-1 md:py-0 py-3"
                        style={{
                          rubyPosition: items === "top" ? "over" : "under",
                        }}
                      >
                        <span className="font-medium">{char}</span>
                        <rt className="text-sm md:text-base text-primary/70 font-normal">{pinyin}</rt>
                      </ruby>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
