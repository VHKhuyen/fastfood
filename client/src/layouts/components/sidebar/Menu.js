import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faHouse, faIdCardClip, faShop, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { faBlogger } from '@fortawesome/free-brands-svg-icons'
import MenuItem from './MenuItem'
import classNames from 'classnames/bind'
import style from './sidebar.module.scss'
import config from '@/config'
const cx = classNames.bind(style)

const menus = [
	{
		title: 'Home',
		icon: <FontAwesomeIcon icon={faHouse} />,
		to: config.routes.home,
	},
	{
		title: 'Menu',
		icon: <FontAwesomeIcon icon={faUtensils} />,
		to: config.routes.menu,
	},
	{
		title: 'About',
		icon: <FontAwesomeIcon icon={faIdCardClip} />,
		to: config.routes.about,
	},
	{
		title: 'Shop',
		icon: <FontAwesomeIcon icon={faShop} />,
		to: config.routes.shop,
	},
	{
		title: 'Blog',
		icon: <FontAwesomeIcon icon={faBlogger} />,
		to: config.routes.blog,
	},
	{
		title: 'Contact',
		icon: <FontAwesomeIcon icon={faAddressBook} />,
		to: config.routes.contact,
	},
]

function Menu() {
	return (
		<ul className={cx('list')}>
			{menus.map((menu, index) => {
				return (
					<li key={index}>
						<MenuItem {...menu} />
					</li>
				)
			})}
		</ul>
	)
}

export default Menu
