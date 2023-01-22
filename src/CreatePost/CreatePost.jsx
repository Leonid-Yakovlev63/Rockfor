import React from 'react'
import s from './CreatePost.module.css';
import PageTitle from '../UI/PageTitle/PageTitle';
import NewPost from './NewPost/NewPost';
const CreatePost = () => {
  return (
    <div className={s.mainWrapper}>
    <PageTitle title = "Создать пост"/>
    <NewPost />    
    </div>
  )
}
export default CreatePost;