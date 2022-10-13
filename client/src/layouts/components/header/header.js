import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import style from './header.module.scss'

import images from '@/assets/images'
import { Button } from '@/components'
import MenuPopper from '@/components/popper/menuPopper'
import Image from '@/components/image'
import Search from '../search/search'
import Sidebar from '../sidebar/Sidebar'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import config from '@/config'

const cx = classNames.bind(style)

function Header() {
	const auth = useSelector((state) => state.auth)
	const { isAuthenticated } = auth
	const navLinkClass = ({ isActive }) => {
		return isActive ? cx('isActive') : ''
	}

	return (
		<div className={cx('wrapper')}>
			<div className={cx('logo')}>
				<Link to={config.routes.home}>
					<img src={images.logo} alt="logo" />
				</Link>
			</div>
			<Sidebar />
			<div className={cx('actions')}>
				<Search />
				<div className={cx('wishlist')}>
					<Tippy content="Yêu thích">
						<NavLink to={config.routes.wishlist} className={navLinkClass}>
							<FontAwesomeIcon icon={faHeart} />
							<span className={cx('count')}>0</span>
						</NavLink>
					</Tippy>
				</div>
				<div className={cx('cart')}>
					<Tippy content="Giỏ hàng">
						<NavLink to={config.routes.cart} className={navLinkClass}>
							<FontAwesomeIcon icon={faCartShopping} />
							<span className={cx('count')}>0</span>
						</NavLink>
					</Tippy>
				</div>
				{isAuthenticated ? (
					<>
						<MenuPopper>
							<Image className={cx('user-avatar')} alt="Avatar" />
						</MenuPopper>
					</>
				) : (
					<Button to={config.routes.login} primary small>
						Đăng nhập
					</Button>
				)}
			</div>
		</div>
	)
}

export default Header
