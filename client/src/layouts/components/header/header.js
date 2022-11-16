import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import style from './header.module.scss'

import images from '@/assets/images'
import { Button } from '@/components'
import MenuPopper from '@/components/popper/menuPopper'
import Image from '@/components/image'
import Search from '../search/search'
import Sidebar from '../sidebar/Sidebar'
import config from '@/config'
import Cart from '../cart/Cart'
const cx = classNames.bind(style)

function Header() {
	const auth = useSelector((state) => state.auth)
	const { isAuthenticated } = auth
	const navLinkClass = ({ isActive }) => {
		return isActive ? cx('isActive') : ''
	}

	return (
		<div className={cx('wrapper')}>
			<div className={cx('container')}>
				<div className={cx('logo')}>
					<a href="/">
						<img src={images.logo} alt="logo" />
					</a>
				</div>
				<Sidebar />
				<div className={cx('actions')}>
					<Search />
					<div className={cx('wishlist')}>
						<a>
							<FontAwesomeIcon icon={faHeart} />
							<span className={cx('count')}>0</span>
						</a>
					</div>
					<Cart />
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
		</div>
	)
}

export default Header
