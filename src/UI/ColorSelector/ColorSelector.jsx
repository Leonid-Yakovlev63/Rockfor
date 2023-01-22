import React from 'react'
import s from './ColorSelector.module.css';
const ColorSelector = (props) => {
  return (
        <div className={s.componentWrapper}>
            <input type="color"/>
        </div>
  )
}
export default ColorSelector;