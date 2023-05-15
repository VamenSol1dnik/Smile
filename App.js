import React, { useState } from 'react';
import SmileyList from './SmileyList';
import Results from './Results';

function App() {
  const [smileys, setSmileys] = useState([
    { id: 1, name: 'Smiley 1', count: 0 },
    { id: 2, name: 'Smiley 2', count: 0 },
    { id: 3, name: 'Smiley 3', count: 0 },
  ]);
  const [winner, setWinner] = useState(null);

  const handleVote = (id) => {
    const updatedSmileys = smileys.map((smiley) =>
      smiley.id === id ? { ...smiley, count: smiley.count + 1 } : smiley
    );
    setSmileys(updatedSmileys);
  };

  const handleShowResults = () => {
    const winner = smileys.reduce((prev, current) =>
      prev.count > current.count ? prev : current
    );
    setWinner(winner);
  };

  return (
    <div>
      <SmileyList smileys={smileys} onVote={handleVote} />
      <Results winner={winner} onShowResults={handleShowResults} />
    </div>
  );
}

export default App;