import React 
//, { useState } 
from 'react'
import DateInput from '../../../UI/DateInput/DateInput';
import Switch from '../../../UI/Switch/Switch';
import Interval from './Interval/Interval';
import s from './SelectDate.module.css';

const SelectDate = ({state, setState}) => {
  return (
    <div className={s.componentWrapper}>
        <center>
            <p>Отправить</p>
            <div className={s.dateInput}>
                <DateInput />
            </div>
            <div className={s.switch}>
                <Switch state={state} setState={setState}/>
            </div>  
        </center>
        <Interval state={state}/>
    </div>
    
  )
}
export default SelectDate;