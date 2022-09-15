import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'

import classNames from 'classnames/bind'
import style from './header.module.scss'
import images from '@/assets/images'
import Tippy from '@tippyjs/react'
import { Button } from '@/components'
import MenuPopper from '@/components/popper/menuPopper'
import Image from '@/components/image'
import Search from '../search/search'
import 'tippy.js/dist/tippy.css'

import { useStore } from '@/hooks'

const cx = classNames.bind(style)

function Header() {
	const {
		stateAuth: { isAuthenticated },
	} = useStore()

	const navLinkClass = ({ isActive }) => {
		return isActive ? cx('isActive') : ''
	}

	return (
		<div className={cx('wrapper')}>
			<div className={cx('logo')}>
				<Link to="/">
					<img src={images.logo} alt="logo" />
				</Link>
			</div>

			<Search />

			<div className={cx('actions')}>
				<div className={cx('wishlist')}>
					<Tippy content="Yêu thích">
						<NavLink to="/wishlist" className={navLinkClass}>
							<FontAwesomeIcon icon={faHeart} />
							<span className={cx('count')}>0</span>
						</NavLink>
					</Tippy>
				</div>
				<div className={cx('cart')}>
					<Tippy content="Giỏ hàng">
						<NavLink to="/cart" className={navLinkClass}>
							<FontAwesomeIcon icon={faCartShopping} />
							<span className={cx('count')}>0</span>
						</NavLink>
					</Tippy>
				</div>
				{isAuthenticated ? (
					<>
						<MenuPopper>
							<Image
								src="https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?cs=srgb&dl=pexels-valeria-boltneva-1251198.jpg&fm=jpg"
								className={cx('user-avatar')}
								alt="Avatar"
							/>
						</MenuPopper>
					</>
				) : (
					<Button to="/auth/login" primary small>
						Đăng nhập
					</Button>
				)}
			</div>
		</div>
	)
}

export default Header
