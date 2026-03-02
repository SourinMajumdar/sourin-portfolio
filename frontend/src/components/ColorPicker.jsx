import React from 'react';
import { ACCENT_PALETTES } from '../hooks/useAccentColor';
import '../styles/ColorPicker.css';

const ColorPicker = ({ accentId, changeAccent }) => {
  return (
    <div className="color-picker" aria-label="Accent colour">
      {Object.entries(ACCENT_PALETTES).map(([id, { swatch, label }]) => (
        <button
          key={id}
          className={`color-swatch${accentId === id ? ' active' : ''}`}
          style={{ '--swatch-color': swatch }}
          onClick={() => changeAccent(id)}
          aria-label={`${label} accent`}
          title={label}
        />
      ))}
    </div>
  );
};

export default ColorPicker;
