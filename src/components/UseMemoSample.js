import * as React from 'react';
const { useMemo } = React;

const UseMemoSample = ({ n }) => {
  // 第一引数は値を計算する関数
  // 第二引数に渡した値が変化したときに再計算される
  const sum = useMemo(() => {
    let result = 0;
    for (let i = 1; i <= n; i++) {
      result += i;
    }
    return result;
  }, [n]);

  return (
    <div>
      <p>
        1 + … + n = <b>{sum}</b>
      </p>
    </div>
  );
};
export default UseMemoSample;
