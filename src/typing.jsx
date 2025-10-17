import React, { useState, useEffect } from 'react';

export default function AsciiTyping({ arts }) {
  const [currentArtIndex, setCurrentArtIndex] = useState(0);
  const [display, setDisplay] = useState([]);
  const [indicesToReveal, setIndicesToReveal] = useState([]);
  const [phase, setPhase] = useState('typing'); // typing | waiting | deleting

  const currentArt = arts[currentArtIndex];

  function isBlankChar(char) {
    return char.trim() === '';
  }

  function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Setup typing animation
  useEffect(() => {
    if (!currentArt || typeof currentArt !== 'string') return;

    const chars = currentArt.split('');
    const revealIndices = chars
      .map((char, idx) => (isBlankChar(char) ? null : idx))
      .filter((idx) => idx !== null);

    const initialDisplay = chars.map((char) => (isBlankChar(char) ? char : ' '));

    setDisplay(initialDisplay);
    setIndicesToReveal(shuffle(revealIndices));
    setPhase('typing');
  }, [currentArt]);

  // Typing animation
  useEffect(() => {
    if (phase !== 'typing' || indicesToReveal.length === 0) return;

    const timeout = setTimeout(() => {
      const nextIndex = indicesToReveal[0];
      setDisplay((prev) => {
        const arr = [...prev];
        arr[nextIndex] = currentArt[nextIndex];
        return arr;
      });
      setIndicesToReveal((prev) => prev.slice(1));

      if (indicesToReveal.length === 1) {
        setPhase('waiting');
      }
    }, 0.1); // Typing speed

    return () => clearTimeout(timeout);
  }, [indicesToReveal, phase, currentArt]);

  // Wait after typing is done
  useEffect(() => {
    if (phase !== 'waiting') return;

    const timeout = setTimeout(() => {
      const chars = currentArt.split('');
      const eraseIndices = chars
        .map((char, idx) => (isBlankChar(char) ? null : idx))
        .filter((idx) => idx !== null);

      setIndicesToReveal(shuffle(eraseIndices));
      setPhase('deleting');
    }, 2500); // Wait duration

    return () => clearTimeout(timeout);
  }, [phase]);

  // Deleting animation
  useEffect(() => {
    if (phase !== 'deleting' || indicesToReveal.length === 0) return;

    const timeout = setTimeout(() => {
      const nextIndex = indicesToReveal[0];
      setDisplay((prev) => {
        const arr = [...prev];
        arr[nextIndex] = ' ';
        return arr;
      });
      setIndicesToReveal((prev) => prev.slice(1));

      if (indicesToReveal.length === 1) {
        setTimeout(() => {
          // Switch to next art
          setCurrentArtIndex((prev) => (prev + 1) % arts.length);
        }, 100);
      }
    }, 0.1); // Deletion speed

    return () => clearTimeout(timeout);
  }, [indicesToReveal, phase]);

  return (
    <div className="ascii">
      <pre className="ascii-art">{display.join('')}</pre>
    </div>
  );
}
