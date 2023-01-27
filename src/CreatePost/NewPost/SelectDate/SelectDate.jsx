import React from 'react'
import DateInput from '../../../UI/DateInput/DateInput';
import Switch from '../../../UI/Switch/Switch';
import Interval from './Interval/Interval';
import s from './SelectDate.module.css';

const SelectDate = () => {
  return (
    <div className={s.componentWrapper}>
        <center>
            <p>Отправить</p>
            <div className={s.dateInput}>
                <DateInput />
            </div>
            <div className={s.switch}>
                <Switch />
            </div>  
        </center>
        <Interval />
        
    </div>
    
  )
}
export default SelectDate;