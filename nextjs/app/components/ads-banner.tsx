"use client";

import { useEffect, useRef } from "react";

interface AdsBannerProps {
  className?: string;
  width?: number;
  height?: number;
  atKey: string;
}

export function AdsBanner({
  className,
  width = 320,
  height = 50,
  atKey,
}: AdsBannerProps) {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bannerRef.current?.firstChild && atKey) {
      // 配置广告参数
      const atOptions = {
        key: atKey,
        format: "iframe",
        height,
        width,
        params: {},
      };

      // 创建配置脚本
      const configScript = document.createElement("script");
      configScript.type = "text/javascript";
      configScript.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

      // 创建广告脚本
      const adScript = document.createElement("script");
      adScript.type = "text/javascript";
      adScript.src = `//www.profitabledisplaynetwork.com/${atKey}/invoke.js`;

      // 添加脚本到容器
      bannerRef.current?.appendChild(configScript);
      bannerRef.current?.appendChild(adScript);
    }
  }, [atKey, height, width]);

  return (
    <div
      ref={bannerRef}
      className={className}
      style={{
        width,
        height,
      }}
    />
  );
}
