import { useState } from 'react';

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

export default function Cards({ characters }) {
  let arr = shuffle(characters.length);
  console.log(arr);
  return (
    <>
      <div className="card-container">
        {arr.map((val) => {
          return (
            <Card character={characters[val]} key={characters[val].id}></Card>
          );
        })}
      </div>
    </>
  );
}

function Card({ character }) {
  const [clicks, setClicks] = useState(0);

  function handleClick() {
    setClicks(clicks + 1);
  }

  return (
    <img src={character.path} className="character" onClick={handleClick} />
  );
}
