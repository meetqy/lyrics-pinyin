import { cn } from "@/lib/utils";

export const PinyinBox = ({ lyrics, lyricsPinyin, align = "center", items = "top" }: { lyrics: string[]; lyricsPinyin: string[]; align?: "left" | "center" | "right"; items?: "top" | "bottom" }) => {
  return (
    <div className="container max-w-screen-lg py-12">
      <div id="pinyin-box" className="w-full">
        <div className="border rounded-lg p-8 bg-card/50 backdrop-blur-sm">
          {lyrics.map((line: string, index: number) => {
            const characters = line.split("");
            const pinyinWords = lyricsPinyin[index]?.split(" ") || [];

            return (
              <div key={index} className="group mb-8">
                <div
                  className={cn("text-3xl", {
                    "text-center": align === "center",
                    "text-left": align === "left",
                    "text-right": align === "right",
                  })}
                >
                  {characters.map((char, charIndex) => {
                    // 跳过空格和标点符号
                    if (char === " " || /[^\u4e00-\u9fff]/.test(char)) {
                      return <span key={charIndex}>{char}</span>;
                    }

                    // 为汉字添加拼音
                    const pinyin = pinyinWords[charIndex] || "";

                    return (
                      <ruby
                        key={charIndex}
                        className="px-1"
                        style={{
                          rubyPosition: items === "top" ? "over" : "under",
                        }}
                      >
                        {char}
                        <rt className="text-lg text-primary/70">{pinyin}</rt>
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
