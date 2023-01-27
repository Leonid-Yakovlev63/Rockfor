import React from 'react'
import s from './Submit.module.css';
const Submit = () => {
  return (
        <button className={s.submitButton}>
            <div className={s.buttonText}>
                <h4>Отправить</h4>
            </div>
        </button>
  )
}
export default Submit;