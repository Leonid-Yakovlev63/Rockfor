
import React from 'react'
import s from './Switch.module.css';
const Switch = ({state, setState}) => {
  return (
    <label class={s.toggle}>
        <input type= "checkbox" onClick={() => {setState(state==="one"?"many":"one")}}/>
        <span class={s.slider}></span>
        <span class={s.labels} data-on="Много раз" data-off="Один раз"></span>
    </label> 
  )
}
export default Switch;