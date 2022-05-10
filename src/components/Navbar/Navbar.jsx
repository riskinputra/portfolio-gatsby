import React from 'react'
import { Link } from 'gatsby'

import { headerContainer, headerNav, navLogo, navMenu, navMenuList } from './Navbar.module.scss'

import logo from '../../images/logo.svg'

const Navbar = () => {
  const menus = [
    { 
      path: 'about',
      label: 'About'
     },
     { 
      path: 'experience',
      label: 'Experience'
     },
     { 
      path: 'work',
      label: 'Work'
     },
     { 
      path: 'contact',
      label: 'Contact'
     }
  ]
  const menuList = menus.map((menu, index) => (
    <li key={index}>
      <a href={`/#${menu.path}`}>{menu.label}</a>
    </li>
  ))

  return (
    <header className={headerContainer}>
      <nav className={headerNav}>
        <div className={navLogo}>
          <Link to="/">
            <img src={logo} alt="logo" width="40" />
          </Link>
        </div>

        <div className={navMenu}>
          <ol className={navMenuList}>
            {menuList}
          </ol>
        </div>
      </nav>
    </header>
  )
}

export default Navbar