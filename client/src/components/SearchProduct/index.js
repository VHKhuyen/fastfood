import classNames from 'classnames/bind'
import styles from './searchProduct.module.scss'
const cx = classNames.bind(styles)

function SearchProduct({ avatar, nickname, likes_count }) {
	return (
		<a href="/" className={cx('search-product')}>
			<img className={cx('avatar')} src={avatar} alt="Food" />
			<div className={cx('info')}>
				<h3 className={cx('name')}>{nickname}</h3>
				<span className={cx('price')}>{likes_count}</span>
			</div>
		</a>
	)
}

export default SearchProduct
