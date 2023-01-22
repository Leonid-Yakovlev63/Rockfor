import React from 'react'
import s from './Input.module.css';
const Input = (props) => {
  return (
    <div class={s.componentWrapper}>
        <input className={s.input} placeholder = {props.placeholder} type={props.type} id={props.id} value={props.value}/>
    </div>
  )
}
export default Input;