import React from 'react'
import ScrollBtn from '../UI/ScrollBtn/ScrollBtn';
import PageTitle from '../UI/PageTitle/PageTitle';
import Posts from './Posts/Posts';
import s from './PostsDiscord.module.css';

const PostsDiscord = () => {
  
  return (
    <div className={s.mainWrapper}>
    <PageTitle title = "Посты Discord"/>
      <Posts />
      <center>
        <ScrollBtn />
      </center>
    </div>
  )
}
export default PostsDiscord;