import { useState } from 'react';

import Header from './components/Header';
import CountryFlag from './components/FlagApi';

export default function App() {
  const [score, setScore] = useState(0); // Curr score
  const [highScore, setHighScore] = useState(0);
  const [countryCodes, addCode] = useState([]); // Curr selected country codes

  function playGame(value, array) {
    if (!value) return null;
    // Check is country code value correct type if not return
    const isCountryCode = array.some((code) => code === value);
    if (!isCountryCode) return null;

    const flagIsDuplicate = countryCodes.some((flag) => flag === value);
    if (!flagIsDuplicate) {
      // If flag is not duplicate add it to curr country code array
      addCode((prev) => [...prev, value]);
      setScore(score + 1);
    } else if (flagIsDuplicate) {
      addCode([]);
      setScore(0);
      checkForHighScore();
    }
  }

  function checkForHighScore() {
    if (score > highScore) setHighScore(score);
  }

  return (
    <div>
      <Header currScore={score} highScore={highScore} />
      <CountryFlag
        playGame={playGame}
        currScore={score}
        highScore={highScore}
      />
    </div>
  );
}
