import { useEffect, useState, useCallback, useRef } from "react";
import { useRive, EventType } from "@rive-app/react-canvas";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [fadeOut, setFadeOut] = useState(false);
  const completed = useRef(false);

  const handleComplete = useCallback(() => {
    if (completed.current) return;
    completed.current = true;
    setFadeOut(true);
    setTimeout(onComplete, 500);
  }, [onComplete]);

  const { RiveComponent, rive } = useRive({
    src: "/cg-intro.riv",
    animations: ["one shot"],
    autoplay: true,
    onLoadError: () => {
      handleComplete();
    },
  });

  useEffect(() => {
    if (rive) {
      rive.on(EventType.Stop, handleComplete);
      return () => {
        rive.off(EventType.Stop, handleComplete);
      };
    }
  }, [rive, handleComplete]);

  // Fallback timeout - skip after 15 seconds if animation hasn't finished
  useEffect(() => {
    const timeout = setTimeout(handleComplete, 15000);
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
