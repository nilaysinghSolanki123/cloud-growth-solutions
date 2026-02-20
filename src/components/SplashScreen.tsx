import { useEffect, useState, useCallback, useRef } from "react";
import { useRive } from "@rive-app/react-canvas";

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
    onLoad: () => {
      console.log("Rive loaded");
    },
    onLoadError: () => {
      console.log("Rive load error, skipping");
      handleComplete();
    },
  });

  // Listen for the one-shot animation to finish
  useEffect(() => {
    if (!rive) return;

    const onStop = () => {
      console.log("Rive animation stopped");
      handleComplete();
    };

    // Use the rive instance's onStop callback
    rive.on(1 as any, onStop); // EventType.Stop = 1

    return () => {
      rive.off(1 as any, onStop);
    };
  }, [rive, handleComplete]);

  // Fallback: if rive never loads, skip after 3s
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!rive) handleComplete();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [rive, handleComplete]);

  // Ultimate fallback: skip after 20 seconds
  useEffect(() => {
    const timeout = setTimeout(handleComplete, 20000);
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
