export default function ScoreBoard({ highestScore, currentRoundScore }) {
  return (
    <>
      <p>Current Round Score {currentRoundScore}</p>
      <p>Highest Score {highestScore}</p>
    </>
  );
}
