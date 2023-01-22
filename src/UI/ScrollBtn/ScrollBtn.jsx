import React from 'react'
import s from './ScrollBtn.module.css';

const handlerScrollUp = () => {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    window.scrollBy(0, -50);
    setTimeout(handlerScrollUp, 10);
  }
}

const ScrollBtn = () => {
  
  return (
        <button className={s.btn} onClick={ handlerScrollUp }><h3>Вернуться в начало страницы</h3></button>
  )
}
export default ScrollBtn;