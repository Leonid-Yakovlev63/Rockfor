
import React from 'react'
import s from './Switch.module.css';
const Switch = () => {
  return (
    <label class={s.toggle}>
        <input type= "checkbox" />
        <span class={s.slider}></span>
        <span class={s.labels} data-on="Много раз" data-off="Один раз"></span>
    </label> 
  )
}
export default Switch;