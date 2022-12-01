import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import HeadlessTippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'

import classNames from 'classnames/bind'
import style from './cart.module.scss'

import ProductCart from '@/components/productCart/ProductCart'
import { Wrapper as PopperWrapper } from '@/components/popper'
import { Button } from '@/components'
import { cartSelector } from '@/redux/selector'

const cx = classNames.bind(style)

function Cart() {
	const [visible, setVisible] = useState(false)
	const cartState = useSelector(cartSelector)
	const { cartItems } = cartState
	// const dispatch = useDispatch()
	const refCart = useRef(null)
	const hide = () => setVisible(false)
	const handleVisible = (e) => {
		e.preventDefault()
		setVisible(!visible)
	}
	return (
		<div ref={refCart} className={cx('cart')}>
			<HeadlessTippy
				arrow={true}
				visible={visible && cartItems.length > 0}
				offset={[16, 16]}
				placement="bottom-end"
				interactive
				render={(attrs) => (
					<div className={cx('content')} tabIndex="-1" {...attrs}>
						<PopperWrapper className={cx('content-cart')}>
							<div className={cx('minicart')}>
								<ul>
									{cartItems.map((item) => (
										<li key={item.product.slug}>
											<ProductCart item={item} />
										</li>
									))}
								</ul>
							</div>
							<div className={cx('total')}>
								<p>Tổng cộng</p>
								<span>676.000 ₫</span>
							</div>
							<Button width100 large primary noRadius>
								Thanh toán
							</Button>
						</PopperWrapper>
					</div>
				)}
				onClickOutside={hide}
			>
				<a href="/" onClick={handleVisible}>
					<FontAwesomeIcon icon={faCartShopping} />
					<span className={cx('count')}>{cartItems.length}</span>
				</a>
			</HeadlessTippy>
		</div>
	)
}

export default Cart
