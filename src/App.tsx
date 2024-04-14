import * as React from 'react';
const { useState,} = React;
const ResistorValues: { [key: string]: number } = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};


function ResistorDecoder() {
  const [firstColor, setFirstColor] = useState('black');
  const [secondColor, setSecondColor] = useState('black');

  const decodedValue = () => {
    return Number(`${ResistorValues[firstColor]}${ResistorValues[secondColor]}`);
  };

  return (
    <div>
      <select value={firstColor} onChange={(e) => setFirstColor(e.target.value)}>
        {Object.keys(ResistorValues).map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
      <select value={secondColor} onChange={(e) => setSecondColor(e.target.value)}>
        {Object.keys(ResistorValues).map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
      <p>Decoded Value: {decodedValue()}</p>
    </div>
  );
}

export default ResistorDecoder;
