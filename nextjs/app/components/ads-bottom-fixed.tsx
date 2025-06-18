"use client";

import { cn } from "@/lib/utils";
import { AdsBanner } from "./ads-banner";
import { useEffect, useState } from "react";

interface AdsBottomFixedProps {
  className?: string;
}

export function AdsBottomFixed({ className }: AdsBottomFixedProps) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    // 初始检查
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // 立即检查一次
    checkMobile();

    // 监听窗口大小变化
    const handleResize = () => {
      checkMobile();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile === null) return null; // 等待初始检查完成

  return (
    <div>
      {!isMobile ? (
        <AdsBanner className={cn("fixed bottom-0 left-1/2 -translate-x-1/2 z-50", className)} atKey="e6b55b366201530668951e1ea5fc5153" width={728} height={90} />
      ) : (
        <AdsBanner className={cn("fixed bottom-0 left-1/2 -translate-x-1/2 z-50", className)} atKey="2fb9f59aefd42450687dbf205292444a" width={320} height={50} />
      )}
    </div>
  );
}
