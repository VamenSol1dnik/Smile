import React from "react";

function Results({ results }) {
  return <div>{results}</div>;
}

function ShowResults({ emojis }) {
  const getWinner = () => {
    let max = -1;
    let winner = "";

    Object.keys(emojis).forEach((emoji) => {
      if (emojis[emoji] > max) {
        max = emojis[emoji];
        winner = emoji;
      }
    });

    return winner;
  };

  const handleClick = () => {
    const winner = getWinner();
    alert(`The winner is ${winner}`);
  };

  return (
    <div>
      <button onClick={handleClick}>Show Results</button>
    </div>
  );
}

export default ShowResults;