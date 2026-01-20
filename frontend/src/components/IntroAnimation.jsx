import { useEffect, useState } from "react";

const IntroScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState("loading"); // loading → hi → exit

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hi"), 1400);     // loader duration
    const t2 = setTimeout(() => setPhase("exit"), 2200);   // hi visible
    const t3 = setTimeout(() => onComplete?.(), 2800);     // unmount

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <div className={`intro ${phase}`}>
      {phase === "loading" && (
        <div className="circle-loader"></div>
      )}

      {(phase === "hi" || phase === "exit") && (
        <div className="hi-text">Hello!</div>
      )}
    </div>
  );
};

export default IntroScreen;
