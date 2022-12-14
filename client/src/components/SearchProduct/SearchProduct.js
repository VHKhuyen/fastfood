import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './searchProduct.module.scss'
const cx = classNames.bind(styles)
SearchProduct.propTypes = {
	avatar: PropTypes.string,
	nickname: PropTypes.string,
	likesCount: PropTypes.string,
}
function SearchProduct({ avatar, nickname, likesCount }) {
	return (
		<Link to={`product/${nickname}`} className={cx('search-product')}>
			<img className={cx('avatar')} src={avatar} alt="Food" />
			<div className={cx('info')}>
				<h3 className={cx('name')}>{nickname}</h3>
				<span className={cx('price')}>{likesCount}</span>
			</div>
		</Link>
	)
}

export default SearchProduct
