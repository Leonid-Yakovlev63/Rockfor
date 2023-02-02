import React from 'react'
import s from './CreatePost.module.css';
import PageTitle from '../UI/PageTitle/PageTitle';
import NewPost from './NewPost/NewPost';
import { useState } from 'react';
const CreatePost = () => {
  const [state, setState] = useState("one");
  return (
    <div className={s.mainWrapper}>
    <PageTitle title = "Создать пост"/>
      <div className={s.NewPost}>
        <NewPost state={state} setState={setState}/>  
      </div>  
    </div>
  )
}
export default CreatePost;