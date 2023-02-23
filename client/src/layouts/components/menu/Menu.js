import { NavLink } from 'react-router-dom'
import config from '@/config'
import classNames from 'classnames/bind'
import style from './sidebar.module.scss'

const cx = classNames.bind(style)

const menus = [
	{
		title: 'Khuyến mãi',
		to: config.routes.discount,
	},
	{
		title: 'Thực đơn',
		to: config.routes.menu,
	},
	{
		title: 'Cửa hàng',
		to: config.routes.shop,
	},
	{
		title: 'Tin tức',
		to: config.routes.blog,
	},
	{
		title: 'Liên hệ',
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
