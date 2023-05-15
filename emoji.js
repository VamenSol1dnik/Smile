import React, { useState } from "react";

function Emoji({ symbol }) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <span role="img" aria-label="emoji" onClick={handleClick}>
        {symbol}
      </span>
      <span>{count}</span>
    </div>
  );
}

export default Emoji;