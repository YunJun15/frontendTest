import React, { useEffect, useState } from 'react';

const DebounceAndThrottle = () => {

  function debounce(func, delay = 250) {
    let timer = null;

    return () => {
      let context = this;
      let args = arguments;

      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(context, args);
      }, delay)
    }
  };

  const renderDebounce = (
    <>
      {`function debounce(func, delay = 250) {
        let timer = null;
        return () => {
          let context = this;
          let args = arguments;
          clearTimeout(timer);
          timer = setTimeout(() => {
            func.apply(context, args);
          }, delay)
        }
      }`}
    </>
  )

  const [scroll, setScroll] = useState(0);
  const handleScroll = () => {
    console.log(window.scrollY)
    setScroll(window.scrollY)
  };
  window.addEventListener('scroll', debounce(handleScroll));

  // let counterVal = 0;

  // const [count, setCount] = useState(0);
  // const handleClick = () => {
  //   setCount(count + 1);
  //   return;
  // }

  //簡單來說，
  // 就是在函數域加入一個計時器，
  // 如果事件一直觸發，便刷新計時器，直至計時器時限內沒有觸發該事件，便執行事件行為。


  return (
    <>
      <div>3. 實作 Debounce</div>
      <div style={{ whiteSpace: 'pre-wrap' }}>{renderDebounce}</div>
      <div className='container'>
        4. scroll 操作結合Debounce
        <h4>{`scroll: ${scroll}`}</h4>
      </div>

      {/* <button type='button' onClick={handleClick}>Click Me</button> */}
      {/* {debounce(handleClick)} */}

    </>
  )
}

export default (DebounceAndThrottle);