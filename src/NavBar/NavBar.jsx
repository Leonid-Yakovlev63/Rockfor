import React from 'react'
import { NavLink } from 'react-router-dom';
import CirlceButton from './CircleButton/CirlceButton';
import s from './NavBar.module.css';
import NavbarElement from './NavbarElement/NavbarElement';
const NavBar = (props) => {

  return (
    <div className={s.navWrapper}>
        <div className={s.navLinks}>
            <NavLink to = 'main' ><NavbarElement linkText='Главная'/></NavLink>
            <NavLink to = 'createPost'><NavbarElement linkText='Создать пост'/></NavLink>
            <NavLink to = 'postsVK'><NavbarElement linkText='Посты VK'/></NavLink>
            <NavLink to = 'postsDiscord'><NavbarElement linkText='Посты Discord'/></NavLink>
            <NavLink to = 'settings'><NavbarElement linkText='Настройки'/></NavLink>
        </div>
        <div className={s.buttons}>
          <CirlceButton />
          <CirlceButton />
          <CirlceButton />
        </div>
    </div>
  )
}

export default NavBar;
