import React, { useState } from 'react';

const UseStateSample2 = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  return (
    <p>
      <b>{left}</b>
      <button
        onClick={() => {
          setLeft(left + 1);
          setRight(right - 1);
        }}
      >
        ←
      </button>
      <b>{right}</b>
      <button onClick={() => setRight(right + 1)}>+</button>
    </p>
  );
};
export default UseStateSample2;
