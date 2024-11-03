"use client";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

interface AnimationInstance {
  destroy?(): void;
}

export default function LottieAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let instance: AnimationInstance | null = null;

    if (containerRef.current) {
      instance = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("./lottie-not-found.json"),
      });

      return () => {
        if (instance?.destroy) {
          instance.destroy();
        }
      };
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h5>URL not found</h5>
      <div className="w-full max-w-[300px]">
        <div ref={containerRef} className="w-full h-full" />
      </div>
    </div>
  );
}
