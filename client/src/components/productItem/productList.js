import classNames from 'classnames/bind'
import styles from './productItem.module.scss'
const cx = classNames.bind(styles)

function ProductList({ children }) {
	return <div className={cx('product-list')}>{children}</div>
}

export default ProductList
