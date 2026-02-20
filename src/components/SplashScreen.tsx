import { useEffect, useState, useCallback } from "react";
import { useRive } from "@rive-app/react-canvas";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [fadeOut, setFadeOut] = useState(false);

  const { RiveComponent, rive } = useRive({
    src: "/cg-intro.riv",
    autoplay: true,
    onLoadError: () => {
      // If animation fails to load, skip to landing page
      onComplete();
    },
  });

  const handleComplete = useCallback(() => {
    setFadeOut(true);
    setTimeout(onComplete, 500);
  }, [onComplete]);

  useEffect(() => {
    if (rive) {
      // Listen for animation stop
      rive.on("stop" as any, handleComplete);
    }
  }, [rive, handleComplete]);

  // Fallback timeout - skip after 6 seconds regardless
  useEffect(() => {
    const timeout = setTimeout(handleComplete, 6000);
    return () => clearTimeout(timeout);
  }, [handleComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-background flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-full h-full max-w-2xl max-h-96">
        <RiveComponent />
      </div>
      <button
        onClick={handleComplete}
        className="absolute bottom-8 right-8 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        Skip
      </button>
    </div>
  );
};

export default SplashScreen;
