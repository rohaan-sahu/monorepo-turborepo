type KeyLine = {
  white: string[];
  black: string[];
};

export const generateLinesOfKeys = (startOctave: number, numOctaves: number): KeyLine[] => {
  const baseWhiteNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  const baseBlackNotes = ['C#', 'D#', '', 'F#', 'G#', 'A#'];
  const allLines: KeyLine[] = [];

  for (let i = 0; i < numOctaves; i++) {
    const currentOctave = startOctave + i;

    const whiteKeys = baseWhiteNotes.map(note => `${note}${currentOctave}`);
    const blackKeys = baseBlackNotes.map(note => note ? `${note}${currentOctave}` : '');

    allLines.push({ white: whiteKeys, black: blackKeys });
  }

  return allLines;
};