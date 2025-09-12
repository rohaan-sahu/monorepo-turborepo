'use client'

import React from 'react';
import './PianoKeypad.css';
import { generateLinesOfKeys } from './lineOfKeys';

const linesOfKeys = generateLinesOfKeys(3, 2); // Modify to see how the octaves renderred change

const handleKeyClick = (keyName: string) => {
  if (keyName) {
    console.log(`Key clicked: ${keyName}`);
  }
};

const PianoKeypad: React.FC = () => {
  return (
    <div className="keypad-container">
      {linesOfKeys.map((octave, octaveIndex) => (
        <React.Fragment key={octaveIndex}>
          <div className="keypad-white-keys-row">
            {octave.white.map((keyName) => (
              <button
                key={keyName}
                className="key white-key"
                onClick={() => handleKeyClick(keyName)}
              >
                {keyName}
              </button>
            ))}
          </div>
          <div className="keypad-black-keys-row">
            {octave.black.map((keyName, index) => (
              <button
                key={index}
                className={`key black-key ${keyName ? '' : 'empty-key'}`}
                onClick={() => handleKeyClick(keyName)}
              >
                {keyName}
              </button>
            ))}
          </div>
          {octaveIndex < linesOfKeys.length - 1 && <div className="key-line-separator" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default PianoKeypad;