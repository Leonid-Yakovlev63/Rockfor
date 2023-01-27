
import React from 'react'
import s from './SendingSelection.module.css';
import Option from './Option/Option';
const SendingSelection = (props) => {

  let optionsList = props.options.map(o => <Option id = {o.id} name = {o.name} text = {o.text} />)

  return (
    <div className={s.componentWrapper}>
      <div id={s.scrollableContentWrapper}>
        <div id={s.scrollableContent}>
          {optionsList}
        </div>
      </div>
    </div>
    
  )
}
export default SendingSelection;