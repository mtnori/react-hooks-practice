import * as React from 'react';
const { useState } = React;

const UseStateSample = () => {
  const [count, setCount] = useState(0);

  return (
    <p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <b>{count}</b>
      <button onClick={() => setCount(count + 1)}>+</button>
    </p>
  );
};
export default UseStateSample;
