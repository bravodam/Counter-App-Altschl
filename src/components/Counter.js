
import React from 'react';
import useCounter from '../hooks/useCounter';
const Counter = () => {
  const { count, increment, decrement, reset, setValue } = useCounter(0);

  return (
    <div className='container'>
      <h1>Counter App </h1>
      <div className='counter'>
        
      <h1>Counter Value: {count}</h1>
      <button className='btn-green' onClick={increment}>Increment</button>
      <button className='btn-red' onClick={decrement}>Decrement</button>
      <button className='btn-blue' onClick={reset}>Reset</button>
      <input
        type="number"
        value={count}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      </div>
      <p>By Ebenezer Akinde</p>
    </div>
  );
};

export default Counter;
