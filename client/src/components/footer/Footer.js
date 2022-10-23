import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import images from '@/assets/images'
import style from './footer.module.scss'
const cx = classNames.bind(style)

function Footer() {
	return (
		<footer className={cx('footer')}>
			<div className={cx('container')}>
				<div>
					<div className={cx('content')}>
						<div>
							<a href="Logo">
								<img src={images.logo} alt="Logo" />
							</a>
							<ul>
								<li>
									Điện thoại: <a href="tel:0354509990">0354509990</a>
								</li>
								<li>
									Email: <a href="mailto:vhkhuyen1810@gmail.com">vhkhuyen1810@gmail.com</a>
								</li>
								<li>Địa chỉ: 66 Xuân Thủy, Cầu Giấy Hà Nội</li>
							</ul>
						</div>
						<div>
							<h2>Về Vuki Foods</h2>
							<ul>
								<li>
									<Link to="">Giới thiệu</Link>
								</li>
								<li>
									<Link to="">Tuyển dụng</Link>
								</li>
							</ul>
						</div>
						<div>
							<h2>Hỗ trơ</h2>
							<ul>
								<li>
									<Link to="">Liên hệ</Link>
								</li>
								<li>
									<Link to="">Điều khoản</Link>
								</li>
							</ul>
						</div>
						<div>
							<h2>Giờ mở cửa</h2>
							<ul>
								<li>
									Thứ 2 đến 6: <span>7am - 8pm</span>
								</li>
								<li>
									Thứ 7- CN: <span> 8am – 9pm</span>
								</li>
							</ul>
						</div>
						<div>
							<h2>Truyền thông</h2>
							<ul>
								<li className={cx('icon', 'fb')}>
									<a href="/">Facebook</a>
								</li>
								<li className={cx('icon', 'ins')}>
									<a href="/">Instagram</a>
								</li>
								<li className={cx('icon', 'zalo')}>
									<a href="/">Zalo</a>
								</li>
							</ul>
						</div>
					</div>{' '}
				</div>
			</div>
			<div className={cx('container ', 'license')}>
				<div>
					<div className={cx('trace-mark')}>
						<span className={cx('brand')}>VUKI FOODS</span>
						<span className={cx('copyright')}>Copyright © 2022 Vuki Foods Co.</span>
						<a href="mailto:vuki@vuki.co" className={cx('email')}>
							vuki@vuki.co
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
