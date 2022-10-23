import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './productItem.module.scss'
import images from '@/assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import Button from '../button/Button'

const cx = classNames.bind(styles)

function ProductItem() {
	return (
		<div className={cx('product-item')}>
			<span className={cx('onsale')}>Sale!</span>
			<Link to={`product/12`} className={cx('transition')}>
				<button className={cx('wishlist')}>
					<FontAwesomeIcon icon={faHeart} />
				</button>
				<div className={cx('image')}>
					<img src={images.productItem1} alt="Đồ ăn" />
				</div>
			</Link>
			<div className={cx('caption')}>
				<Link to={`product/12`} className={cx('title')}>
					<h3>BBQ chicken breast</h3>
				</Link>
				<div className={cx('description')}> A mighty meaty double helping of all the reasons you love our burger.</div>
				<div className={cx('wrapper')}>
					<span className={cx('price')}>
						<span className={cx('previous')}>₫80.000</span>
						<span className={cx('current')}>₫60.000</span>
					</span>
					<Button className={cx('cart')} primary>
						<FontAwesomeIcon icon={faCartShopping} />
					</Button>
				</div>
			</div>
		</div>
	)
}

export default ProductItem
