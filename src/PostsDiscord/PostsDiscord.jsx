import React from 'react'
import ScrollBtn from '../UI/ScrollBtn/ScrollBtn';
import Posts from './Posts/Posts';
import s from './PostsDiscord.module.css';

const PostsDiscord = () => {
  
  return (
    <div className={s.mainWrapper}>
    <center>
      <h1 className={s.title}>Посты Discord</h1>
    </center>
      <Posts />
      <center>
        <ScrollBtn />
      </center>
    </div>
  )
}
export default PostsDiscord;