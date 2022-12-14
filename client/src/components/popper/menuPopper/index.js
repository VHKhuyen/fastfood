import PropTypes from 'prop-types'
import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import style from './menuPopper.module.scss'
import { Wrapper as PopperWrapper } from '@/components/popper'
import { useDispatch } from 'react-redux'
import { logout } from '@/redux/authSlice'
const cx = classNames.bind(style)
MenuPopper.propTypes = {
	children: PropTypes.node.isRequired,
}
function MenuPopper({ children }) {
	const dispatch = useDispatch()

	const handleLogout = (e) => {
		e.preventDefault()
		dispatch(logout())
	}
	return (
		<Tippy
			interactive
			trigger="click"
			placement="bottom-end"
			render={(attrs) => (
				<div className={cx('menu-list')} tabIndex="-1" {...attrs}>
					<PopperWrapper>
						<ul>
							<li>
								<a href="/">Viết Blog</a>
							</li>
							<li>
								<a href="/">Bài viết của tôi</a>
							</li>
							<li>
								<a href="/">Bài viết đã lưu</a>
							</li>
							<li>
								<a href="/" onClick={handleLogout}>
									Đăng xuất
								</a>
							</li>
						</ul>
					</PopperWrapper>
				</div>
			)}
		>
			{children}
		</Tippy>
	)
}

export default MenuPopper
