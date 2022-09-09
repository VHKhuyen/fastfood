import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import style from './sidebar.module.scss'
import { faAddressBook, faHome, faIdCardClip, faShop, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { faBlogger } from '@fortawesome/free-brands-svg-icons'

const cx = classNames.bind(style)

function Sidebar() {

  const navLinkClass = ({ isActive }) => {
    return isActive ? cx('isActive') : ''
  }

  return (
    <div className={cx('sidebar')}>
      <div className={cx('wrapper')}>
        <ul className={cx('list')}>
          <li aria-label='Trang chủ'>
            <NavLink to='/'
              className={navLinkClass}>
              <FontAwesomeIcon icon={faHome} />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/menu'
              className={navLinkClass}>
              <FontAwesomeIcon icon={faUtensils} />
              <span>Menu</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/about'
               className={navLinkClass}>
              <FontAwesomeIcon icon={faIdCardClip} />
              <span>About</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/shop'
               className={navLinkClass}>
              <FontAwesomeIcon icon={faShop} />
              <span>Shop</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/blog'
              className={navLinkClass}>
              <FontAwesomeIcon icon={faBlogger} />
              <span>Blog</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact'
              className={navLinkClass}>
              <FontAwesomeIcon icon={faAddressBook} />
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar