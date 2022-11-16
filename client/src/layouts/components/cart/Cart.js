import { useRef, useState } from 'react'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import HeadlessTippy from '@tippyjs/react/headless'
import { Wrapper as PopperWrapper } from '@/components/popper'
import ProductCart from '@/components/productCart/ProductCart'
import classNames from 'classnames/bind'
import 'tippy.js/dist/tippy.css'
import style from './cart.module.scss'
import { Button } from '@/components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const cx = classNames.bind(style)

function Cart() {
	const [visible, setVisible] = useState(false)

	const refCart = useRef(null)

	const hide = () => setVisible(false)

	return (
		<div ref={refCart} className={cx('cart')}>
			<HeadlessTippy
				arrow={true}
				visible={visible}
				offset={[16, 16]}
				placement="bottom-end"
				interactive
				render={(attrs) => (
					<div className={cx('content')} tabIndex="-1" {...attrs}>
						<PopperWrapper className={cx('content-cart')}>
							<div className={cx('minicart')}>
								<ul>
									<li>
										<ProductCart />
									</li>
									<li>
										<ProductCart />
									</li>
									<li>
										<ProductCart />
									</li>
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
				<a onClick={() => setVisible(!visible)}>
					<FontAwesomeIcon icon={faCartShopping} />
					<span className={cx('count')}>0</span>
				</a>
			</HeadlessTippy>
		</div>
	)
}

export default Cart
