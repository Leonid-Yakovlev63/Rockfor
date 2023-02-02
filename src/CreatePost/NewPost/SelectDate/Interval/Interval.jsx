import React from 'react'
import DateInput from '../../../../UI/DateInput/DateInput';
import s from './Interval.module.css';
const Interval = ({state}) => {
  console.log(state)
  return (
    <div className={s.componentWrapper} disabled={state==="one"?true:false}>
              <center>
                <p className={s.componentTitle}>Интервал отправки</p>
              </center>
                <DateInput state={state}/>
    </div>
    
  )
}
export default Interval;