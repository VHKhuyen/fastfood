import { NavLink } from 'react-router-dom'
import config from '@/config'
import classNames from 'classnames/bind'
import style from './sidebar.module.scss'

const cx = classNames.bind(style)

const menus = [
	{
		title: 'Home',
		to: config.routes.home,
	},
	{
		title: 'Menu',
		to: config.routes.menu,
	},
	{
		title: 'About',
		to: config.routes.about,
	},
	{
		title: 'Shop',
		to: config.routes.shop,
	},
	{
		title: 'Blog',
		to: config.routes.blog,
	},
	{
		title: 'Contact',
		to: config.routes.contact,
	},
]

function Menu() {
	return (
		<div className={cx('wrapper')}>
			<ul className={cx('list')}>
				{menus.map((menu, index) => {
					return (
						<li key={index}>
							<NavLink to={menu.to} className={({ isActive }) => (isActive ? 'active' : '')}>
								{menu.title}
							</NavLink>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Menu
