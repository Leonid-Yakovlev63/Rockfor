import React from 'react'
import SendingSelection from '../SendingSelection/SendingSelection';
import s from './Selects.module.css';
const Selects = () => {
  return (
    <div className={s.componentWrapper}>
        <div className={s.selects}>
            <div>
                <center>
                    <p>ВКонтакте</p>
                </center>
                <SendingSelection options = {[{value : "1", text : "Первая беседа"}, {value : "2", text : "Вторая беседа"},{value : "3", text : "Третья беседа"}]}/>
            </div>
            <div>
                <center>
                    <p>Discord</p>
                </center>
                <SendingSelection options = {[{value : "1", text : "Первый сервер"}, {value : "2", text : "Второй сервер"}, {value : "3", text : "Третий сервер"}]}/>
            </div>
        </div>
    </div>
  )
}
export default Selects;