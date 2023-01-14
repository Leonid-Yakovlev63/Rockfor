import React from 'react'
import Posts from './Posts/Posts';
import s from './PostsDiscord.module.css';
import { useEffect } from 'react';
const PostsDiscord = () => {
  
  return (
    <div className={s.mainWrapper}>
    <center>
      <h1 className={s.title}>Посты Discord</h1>
    </center>
      <Posts /> 
      <center>
        <button onClick={ () => window.scrollTo(0, 0)}>Вернуться в начало страницы</button>
      </center>
    </div>
  )
}
export default PostsDiscord;