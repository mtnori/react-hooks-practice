import React, { useState, useEffect } from 'react';

export default () => {
  const [count, setCount] = useState(0);
  const [_a, _b] = useState('!');

  /*
  useEffect(() => {
    alert(`updated! ${count}times!!`);
  }, [count]);
  */

  // componentDidMount
  useEffect(() => {
    console.log('-------------', count)
  }, []);

  // 3回に1回発火する
  useEffect(() => {
    console.log(`updated! ${count}times!!`);
  }, [Math.floor(count/3)]);

  return (
    <div>
      <button onClick={() => {setCount( count + 1 )}}>
        \ovo/ {"<"} {count}times!!
      </button>
      <button onClick={() => {_b(`${_a}!`)}}>
        \omo/ {"<"} hello{_a}
      </button>
    </div>
  )
};
