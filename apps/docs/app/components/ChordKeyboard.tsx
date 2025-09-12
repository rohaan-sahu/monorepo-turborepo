'use client'

import React from 'react';
import './ChordKeyboard.css';
import { majorScaleChords } from './chords';

type ChordKeyboardProps = {
  chords?: string[]; // Make the prop optional
};

const handleChordClick = (chordName: string) => {
  console.log(`Chord clicked: ${chordName}`);
};

// Helper function to determine chord type
const getChordType = (chordName: string) => {
  if (chordName.toLowerCase().endsWith('°')) {
    return 'diminished';
  }
  if (chordName.toLowerCase() === chordName) {
    return 'minor';
  }
  return 'major';
};

const ChordKeyboard: React.FC<ChordKeyboardProps> = ({ chords = majorScaleChords }) => {
  return (
    <div className="chord-keyboard-container">
      {chords.map((chordName) => (
        <button
          key={chordName}
          className={`chord-key ${getChordType(chordName)}`}
          onClick={() => handleChordClick(chordName)}
        >
          {chordName}
        </button>
      ))}
    </div>
  );
};

export default ChordKeyboard;