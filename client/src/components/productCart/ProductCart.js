import images from '@/assets/images'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import className from 'classnames/bind'
import styles from './productcart.module.scss'
const cx = className.bind(styles)
function ProductCart() {
	return (
		<div className={cx('wrapper')}>
			<button>
				<FontAwesomeIcon icon={faTrashCan} />
			</button>
			<div className={cx('field-img')}>
				<a href="">
					<img src={images.combo149} alt="burger" />
				</a>
			</div>
			<div className={cx('info')}>
				<div className={cx('field-name')}>
					<a href="">Combo Pokémon 2</a>
				</div>
				<div className={cx('price')}>
					<span>169</span>
					<span>.</span>
					<span>000</span>
					<span>₫</span> x 1
				</div>
			</div>
		</div>
	)
}

export default ProductCart
