import { useState } from 'react';
import './App.css';
import Header from './Header.jsx';
import ScoreBoard from './ScoreBoard.jsx';
import Cards from './Cards.jsx';

const characters = [
  {
    id: 0,
    path: '/images/characters/annie.png',
  },
  {
    id: 1,
    path: '/images/characters/pieck.png',
  },
  {
    id: 2,
    path: '/images/characters/sasha.png',
  },
  {
    id: 3,
    path: '/images/characters/armin.png',
  },
  {
    id: 4,
    path: '/images/characters/mikasa.png',
  },
  {
    id: 5,
    path: '/images/characters/eren-jaegar.png',
  },
  {
    id: 6,
    path: '/images/characters/historia-reiss.png',
  },
  {
    id: 7,
    path: '/images/characters/levi-ackerman.png',
  },
];

export default function App() {
  const [showLoseModal, setShowLoseModal] = useState(false);
  const [currentRoundScore, setCurrentRoundScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  function handleNewRound() {
    setShowLoseModal(false);
    setCurrentRoundScore(0);
  }

  return (
    <>
      <Header></Header>
      <ScoreBoard
        currentRoundScore={currentRoundScore}
        highestScore={highestScore}
      ></ScoreBoard>
      {!showLoseModal ? (
        <Cards
          characters={characters}
          currentRoundScore={currentRoundScore}
          setCurrentRoundScore={setCurrentRoundScore}
          setHighestScore={setHighestScore}
          setShowLoseModal={setShowLoseModal}
        ></Cards>
      ) : (
        <>
          <p>You Lose</p>
          <button onClick={handleNewRound}>Try Again</button>
        </>
      )}
    </>
  );
}
