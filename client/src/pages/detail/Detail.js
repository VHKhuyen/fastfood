import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import classNames from 'classnames/bind'

import { Button } from '@/components'
import styles from './detail.module.scss'
import { ProductList, ProductItem } from '@/components'
import { singleProductSelector } from '@/redux/selector'
import { fetchSingleProduct } from '@/redux/singleProductSlice'
import { addItem } from '@/redux/cartSlice'
const cx = classNames.bind(styles)

function Detail() {
	const dispatch = useDispatch()
	const productState = useSelector(singleProductSelector)
	const { singleProduct, loading, productRelated } = productState

	const location = useLocation()
	const navigate = useNavigate()
	const slug = location.pathname.split('/')[2]

	const [qty, setQty] = useState(1)
	const handleQty = (e) => {
		e.preventDefault()
		if (e.target.innerText === '-' && qty > 1) {
			setQty((preQty) => (preQty -= 1))
		} else if (e.target.innerText === '+') {
			setQty((preQty) => (preQty += 1))
		} else return
	}

	const handleAdd = (e) => {
		e.preventDefault()
		dispatch(addItem({ product: singleProduct, qty: qty }))
		setQty(1)
	}
	useEffect(() => {
		dispatch(fetchSingleProduct(slug))
	}, [dispatch, slug])

	return (
		<section className={cx('wrapper')}>
			<main className={cx('main')}>
				<div className={cx('container')}>
					<div className={cx('field-back')}>
						<Button
							onClick={() => navigate(-1)}
							className={cx('btn-back')}
							small
							radius
							title="Quay lại"
						>
							← Quay lại
						</Button>
					</div>
					{loading ? (
						<p>Loading...</p>
					) : (
						<>
							<div className={cx('product-detail')}>
								<div className={cx('field-img')}>
									<div className={cx('item')}>
										<img src={singleProduct.image} alt="item" />
									</div>
									<div className={cx('field-top')}></div>
								</div>
								<div className={cx('field-content')}>
									<h3>{singleProduct.name}</h3>
									<p>{singleProduct.description}</p>
									<div className={cx('field-price')}>{singleProduct.price} ₫</div>
									<form>
										<div className={cx('cart')}>
											<div className={cx('inner')}>
												<div className={cx('qty')}>
													<span>Số lượng</span>
													<div className={cx('q-inner')}>
														<Button onClick={handleQty} small primary className={cx('btn-decr')}>
															-
														</Button>
														<span>{qty}</span>
														<Button onClick={handleQty} small primary className={cx('btn-incr')}>
															+
														</Button>
													</div>
												</div>
												<div className={cx('txt-note')}>
													Bạn tiết kiệm được <strong>55.000 ₫</strong> sau khi giảm giá.
												</div>
												<Button onClick={handleAdd} className={cx('btn-cart')} primary>
													Thêm vào giỏ hàng
												</Button>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div className={cx('field-related')}>
								{productRelated && (
									<>
										<h2>Sản phẩm liên quan</h2>
										<ProductList>
											{productRelated.map((product) => {
												if (product.slug === slug) {
													return null
												} else return <ProductItem key={product._id} product={product} />
											})}
										</ProductList>
									</>
								)}
							</div>
						</>
					)}
				</div>
			</main>
		</section>
	)
}

export default Detail
