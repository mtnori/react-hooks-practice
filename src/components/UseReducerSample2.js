import * as React from 'react';
const { useContext, useReducer, createContext } = React;

// dispatch関数を下位コンポーネントに伝えるためのコンテキスト
const DispatchContext = createContext(() => {});

// Reducer
// 基本的にReduxのReducerと同じ
// 第一引数が現在の状態、第二引数がアクション
const reducer = ({ year, month }, action) => {
  switch (action) {
    case 'increment':
      return month === 11
        ? { year: year + 1, month: 0 }
        : { year, month: month + 1 };
    case 'decrement':
      return month === 0
        ? { year: year - 1, month: 11 }
        : { year, month: month -1 }
    default:
        return;
  }
};

const ControlButtons = () => {
  // 親コンポーネントからコンテキスト経由でdispatch関数を取得する
  const dispatch = useContext(DispatchContext);

  return (
    <p>
      <button onClick={() => dispatch('decrement')}>-</button>
      <button onClick={() => dispatch('increment')}>+</button>
    </p>
  );
};

// ステートの初期化関数
const init = initialMonth => ({
  year: 0,
  month: initialMonth
});

const UseReduserSample2 = ({ initialMonth }) => {
  // stateを作成
  // 第一引数がreducer、第二引数が初期ステートの元となる値、第三引数が初期化関数
  const [state, dispatch] = useReducer(reducer, initialMonth, init);
  return (
    <div>
      <p>
        <b>
          {state.year}年{state.month}ヶ月
        </b>
      </p>
      {/* コンテキストに値を設定する */}
      <DispatchContext.Provider value={dispatch}>
        <ControlButtons />
      </DispatchContext.Provider>
    </div>
  );
};
export default UseReduserSample2;
