import React from 'react'
import s from './PageTitle.module.css';
const PageTitle = (props) => {
  return (
    <center>
      <h1 className={s.title}>{props.title}</h1>
    </center>    
  )
}
export default PageTitle;