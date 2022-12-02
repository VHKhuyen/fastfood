import { useDispatch } from 'react-redux'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import className from 'classnames/bind'
import styles from './productcart.module.scss'
import { removeItem } from '@/redux/cartSlice'
import { Link } from 'react-router-dom'
const cx = className.bind(styles)
function ProductCart({ item }) {
	const { product, qty } = item
	const dispatch = useDispatch()

	const handleDelete = () => {
		dispatch(removeItem(item.product))
	}

	return (
		<div className={cx('wrapper')}>
			<button onClick={handleDelete}>
				<FontAwesomeIcon icon={faTrashCan} />
			</button>
			<div className={cx('field-img')}>
				<Link to={`/product/${product.slug}`}>
					<img src={product.image} alt="burger" />
				</Link>
			</div>
			<div className={cx('info')}>
				<div className={cx('field-name')}>
					<Link to={`/product/${product.slug}`}>{product.name}</Link>
				</div>
				<div className={cx('price')}>
					<span>{product.price}</span>
					{/* <span>.</span>
					<span>000</span> */}
					<span>₫</span> x {qty}
				</div>
			</div>
		</div>
	)
}

export default ProductCart
