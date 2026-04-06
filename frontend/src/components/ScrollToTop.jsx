import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { ACCENT_PALETTES } from "../hooks/useAccentColor";
import "../styles/ScrollToTop.css";

const ScrollToTop = ({ accentId, changeAccent }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={`accent-picker ${visible ? "show" : ""}`}>
        {Object.entries(ACCENT_PALETTES).map(([id, { swatch, label }]) => (
          <button
            key={id}
            className={`accent-swatch${accentId === id ? " active" : ""}`}
            style={{ '--swatch-color': swatch }}
            onClick={() => changeAccent(id)}
            aria-label={`${label} accent`}
            title={label}
            type="button"
          />
        ))}
      </div>
      <button
        className={`scroll-to-top ${visible ? "show" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
};

export default ScrollToTop;