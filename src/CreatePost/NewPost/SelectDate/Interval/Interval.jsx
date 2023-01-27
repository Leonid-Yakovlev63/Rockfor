import React from 'react'
import DateInput from '../../../../UI/DateInput/DateInput';
import s from './Interval.module.css';
const Interval = () => {
  return (
    <div className={s.componentWrapper}>
              <center>
                <p className={s.componentTitle}>Интервал отправки</p>
              </center>
                <DateInput />
    </div>
    
  )
}
export default Interval;