import React, { useEffect } from 'react';

const Fibonacci = () => {

  const fib = (position) => {
    if (position < 2) {
      return position;
    }
    return fib(position - 1) + fib(position - 2);
  }

  return (
    <>
      <div>1. 實作 Fibonacci number (費式數列)</div>
      <div>{`fibonacci(0)：${fib(0)}`}</div>
      <div>{`fibonacci(1)：${fib(1)}`}</div>
      <div>{`fibonacci(2)：${fib(2)}`}</div>
      <div>{`fibonacci(3)：${fib(3)}`}</div>
      <div>{`fibonacci(4)：${fib(4)}`}</div>
    </>
  )
}

export default (Fibonacci);