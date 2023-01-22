import React from 'react'
import Input from '../../UI/Input/Input';
import TextArea from '../../UI/TextArea/TextArea';
import ColorSelector from '../../UI/ColorSelector/ColorSelector';
import s from './NewPost.module.css';
const NewPost = () => {
  return (
        <div className={s.compnentWrapper}>
            <div className={s.compnentTitle}>
                <h4>Новый пост</h4>
            </div>
            <div className={s.topLevel}>
                <Input placeholder = "Заголовок (не обязателен)"/>
                <ColorSelector />
            </div>
            <TextArea />
            <Input placeholder = "Ссылка на картинку" type="url"/>
            
        </div>
    
  )
}
export default NewPost;