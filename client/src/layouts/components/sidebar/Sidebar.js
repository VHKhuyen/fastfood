import React from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames/bind'
import style from './sidebar.module.scss'

import Menu from './Menu'
const cx = classNames.bind(style)

function Sidebar() {
	const navLinkClass = ({ isActive }) => {
		return isActive ? cx('isActive') : ''
	}

	return (
		<div className={cx('sidebar')}>
			<div className={cx('wrapper')}>
				<Menu />
			</div>
		</div>
	)
}

export default Sidebar
