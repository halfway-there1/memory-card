import { useState } from 'react';
import PropTypes from 'prop-types';

function shuffle(n) {
  let arr = [];
  for (let i = 0; i < n; i++) arr[i] = i;

  for (let i = 0; i < n; i++) {
    let ri = Math.floor(Math.random() * (n - 1));
    let temp = arr[i];
    arr[i] = arr[ri];
    arr[ri] = temp;
  }

  return arr;
}

Cards.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      path: PropTypes.string,
    })
  ),
  currentRoundScore: PropTypes.number,
  setCurrentRoundScore: PropTypes.func,
  setHighestScore: PropTypes.func,
  setShowLoseModal: PropTypes.func,
};

export default function Cards({
  characters,
  currentRoundScore,
  setCurrentRoundScore,
  setHighestScore,
  setShowLoseModal,
}) {
  let arr = shuffle(characters.length);
  console.log(arr);

  return (
    <>
      <div className="card-container">
        {arr.map((val) => {
          return (
            <Card
              character={characters[val]}
              key={characters[val].id}
              currentRoundScore={currentRoundScore}
              setCurrentRoundScore={setCurrentRoundScore}
              setHighestScore={setHighestScore}
              setShowLoseModal={setShowLoseModal}
            ></Card>
          );
        })}
      </div>
    </>
  );
}

Card.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number,
    path: PropTypes.string,
  }),
  currentRoundScore: PropTypes.number,
  setCurrentRoundScore: PropTypes.func,
  setHighestScore: PropTypes.func,
  setShowLoseModal: PropTypes.func,
};

function Card({
  character,
  currentRoundScore,
  setCurrentRoundScore,
  setHighestScore,
  setShowLoseModal,
}) {
  const [clicks, setClicks] = useState(0);

  console.log('rendering card');

  function handleClick() {
    if (clicks === 0) {
      setClicks((clicks) => clicks + 1);
      setCurrentRoundScore((prev) => prev + 1);
    } else if (clicks === 1) {
      setHighestScore((prev) => Math.max(prev, currentRoundScore));
      setShowLoseModal(true);
    }
  }

  return (
    <img src={character.path} className="character" onClick={handleClick} />
  );
}
