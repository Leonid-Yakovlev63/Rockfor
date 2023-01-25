import React from 'react'
import Input from '../../UI/Input/Input';
import TextArea from '../../UI/TextArea/TextArea';
import ColorSelector from '../../UI/ColorSelector/ColorSelector';
import s from './NewPost.module.css';
import SelectDate from './SelectDate/SelectDate';
const NewPost = () => {
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
                <div className={s.inputDate}>
                    <SelectDate />
                </div>
            </div>
            
        </form>
    
  )
}
export default NewPost;