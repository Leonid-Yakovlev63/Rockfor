
import React from 'react'
import s from './Option.module.css';
const Option = (props) => {


  return (
    <div className={s.optionWrapper}>
      <div></div>
      <input className={s.inputCheckbox} type="checkbox" id={props.id} name={props.name}/>
      <span></span>
      <label for="scales">{props.text}</label> 
    </div>
    
  )
}
export default Option;