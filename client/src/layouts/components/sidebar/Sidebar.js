import React from 'react'
import classNames from 'classnames/bind'
import style from './sidebar.module.scss'

import Menu from './Menu'
const cx = classNames.bind(style)

function Sidebar() {
	return (
		<div className={cx('wrapper')}>
			<Menu />
		</div>
	)
}

export default Sidebar
