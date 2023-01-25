import React from 'react'
import s from './DateInput.module.css';
const DateInput = () => {
  return (
    <div class={s.componentWrapper}>
        <input className={s.inputDate} type="date" />
    </div>
  )
}
export default DateInput;