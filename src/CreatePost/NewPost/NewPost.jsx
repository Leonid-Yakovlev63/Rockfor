import React from 'react'
import Input from '../../UI/Input/Input';
import TextArea from '../../UI/TextArea/TextArea';
import ColorSelector from '../../UI/ColorSelector/ColorSelector';
import s from './NewPost.module.css';
import SelectDate from './SelectDate/SelectDate';
import Selects from './Selects/Selects';
import Submit from '../../UI/Submit/Submit';
const NewPost = ({state, setState}) => {
    return (
        <form className={s.compnentWrapper}>
            <div className={s.compnentTitle}>
                <h4>Новый пост</h4>
            </div>
            <div className={s.topLevel}>
                <div className={s.inputTitle}>
                    <Input placeholder = "Заголовок (не обязателен)" />
                </div>
                <div className={s.ColorSelector}>
                    <ColorSelector />
                </div>
            </div>
            <div className={s.middleLevel}>
                <div className={s.textArea}>
                    <TextArea />
                </div>
                <div className={s.inputLink}>
                    <Input placeholder = "Ссылка на картинку" type="url"/>
                </div>
            </div>
            <div className={s.optionsLevel}>
                <div className={s.inputDate}>
                    <SelectDate state={state} setState={setState}/>
                </div>
                <div className={s.selector}>
                    <Selects />
                </div>
            </div>
            <center>
                <div className={s.submitButton}>
                    <Submit />
                </div>
            </center>   
        </form>
    
  )
}
export default NewPost;