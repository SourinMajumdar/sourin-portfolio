import { useEffect, useState } from "react";

const greetings = [
  "Hello!",
  "नमस्ते",
  "Hola!",
  "নমস্কার",
  "你好",
  "こんにちは",
];

const DISPLAY_PER_GREETING = 400; // ms
const EXIT_DURATION = 600;

const IntroScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState("loading");
  const [index, setIndex] = useState(0);

  // Phase control
  useEffect(() => {
    const t1 = setTimeout(() => {
      setPhase("hi");

      const totalHiTime = greetings.length * DISPLAY_PER_GREETING;

      const t2 = setTimeout(() => {
        setPhase("exit");

        const t3 = setTimeout(() => {
          onComplete?.();
        }, EXIT_DURATION);

      }, totalHiTime);

    }, 1400); // loader duration

    return () => clearTimeout(t1);
  }, [onComplete]);

  // Rotate greetings
  useEffect(() => {
    if (phase !== "hi") return;

    let i = 0;
    setIndex(0);

    const interval = setInterval(() => {
      i++;
      if (i < greetings.length) {
        setIndex(i);
      } else {
        clearInterval(interval);
      }
    }, DISPLAY_PER_GREETING);

    return () => clearInterval(interval);
  }, [phase]);

  return (
    <div className={`intro ${phase}`}>
      {phase === "loading" && (
        <div className="circle-loader"></div>
      )}

      {(phase === "hi" || phase === "exit") && (
        <div className="hi-text">
          {greetings[index]}
        </div>
      )}
    </div>
  );
};

export default IntroScreen;