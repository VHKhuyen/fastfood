import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import style from './header.module.scss'

import images from '@/assets/images'
import { Button } from '@/components'
import MenuPopper from '@/components/popper/menuPopper'
import Image from '@/components/image'
import { Search, Cart, Menu } from '../index'
import config from '@/config'
import routes from '@/config/routes'
import { authSelector } from '@/redux/selector'
const cx = classNames.bind(style)

function Header() {
	const auth = useSelector(authSelector)
	const { isAuthenticated } = auth
	const [visibleLocation, setVisibleLocation] = useState(false)

	const handleWishlist = (e) => {
		e.preventDefault()
		setVisibleLocation(!visibleLocation)
	}
	return (
		<div className={cx('wrapper')}>
			<div className={cx('container')}>
				<div className={cx('logo')}>
					<Link to={routes.home}>
						<img src={images.logo} alt="logo" />
					</Link>
				</div>
				<Menu />
				<div className={cx('actions')}>
					<Search />
					<div className={cx('wishlist')}>
						<a href="/" onClick={handleWishlist}>
							<FontAwesomeIcon icon={faLocationDot} />
						</a>
					</div>
					<Cart />
					{isAuthenticated ? (
						<MenuPopper>
							<Image className={cx('user-avatar')} alt="Avatar" />
						</MenuPopper>
					) : (
						<Button to={config.routes.login} primary small>
							Đăng nhập
						</Button>
					)}
				</div>
			</div>
		</div>
	)
}

export default Header
