import React, { useState } from 'react';

const SuperButton = ({ onClick, children }) => {
  const onclickHere =
    onClick &&
    (e => {
      for (const _ of [0, 1, 2, 3, 4]) onClick(e);
    });
  return <button onClick={onclickHere}>{children}</button>;
};

export default () => {
  const [count, setCount] = useState(0);

  return (
    <p>
      <SuperButton onClick={() => setCount(count - 1)}>-</SuperButton>
      <b>{count}</b>
      <SuperButton onClick={() => setCount(count => count + 1)}>+</SuperButton>
    </p>
  );
};
