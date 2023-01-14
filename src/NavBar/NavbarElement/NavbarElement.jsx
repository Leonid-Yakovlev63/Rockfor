import React from 'react'
import s from './NavbarElement.module.css';
const NavbarElement = (props) => {
  return (
    <div className={s.navLinkWrapper}>
      <a>{props.linkText}</a>
    </div>
  )
}

export default NavbarElement;