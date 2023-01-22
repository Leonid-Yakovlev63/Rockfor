import React from 'react'
import PageTitle from '../UI/PageTitle/PageTitle';
import s from './Main.module.css';
const Main = () => {
  return (
    <div className={s.mainWrapper}>
      <PageTitle title = "Главная"/>
    </div>
  )
}
export default Main;