import React from 'react'
import s from './TextArea.module.css';
const TextArea = (props) => {
  return (
    <div class={s.componentWrapper}>
        <div className={s.textPlace}>
                  <textarea placeholder='Текст поста'></textarea>
        </div>
    </div>
  )
}
export default TextArea;