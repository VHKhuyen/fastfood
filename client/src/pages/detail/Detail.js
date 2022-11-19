import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import classNames from 'classnames/bind'

import { Button } from '@/components'
import { getSingleProduct } from '@/services/productServices'
import styles from './detail.module.scss'
const cx = classNames.bind(styles)

function Detail() {
	const [product, setProduct] = useState({})

	const location = useLocation()
	const navigate = useNavigate()
	const slug = location.pathname.split('/')[2]

	useEffect(() => {
		const singleProduct = async () => {
			const response = await getSingleProduct(slug)
			if (response?.success) {
				setProduct(response.products)
			} else {
			}
		}
		singleProduct()
	}, [])

	return (
		<section className={cx('wrapper')}>
			<main className={cx('main')}>
				<div className={cx('container')}>
					<div className={cx('field-back')}>
						<Button onClick={() => navigate(-1)} className={cx('btn-back')} small radius title="Quay lại">
							← Quay lại
						</Button>
					</div>
					<div className={cx('product-detail')}>
						<div className={cx('field-img')}>
							<div className={cx('item')}>
								<img src={product.image} alt="image item" />
							</div>
							<div className={cx('field-top')}></div>
						</div>
						<div className={cx('field-content')}>
							<h3>{product.name}</h3>
							<p>{product.description}</p>
							<div className={cx('field-price')}>{product.price} ₫</div>
							{/* <p className="discount-f">
									<span className="price-old">184.000 ₫</span>
								</p> */}
							{/* <div className="field-note">
									<span className="field-text">
									<p>02&nbsp;Gà Rán 1 Miếng</p>
									<p>02&nbsp;Mì Ý&nbsp;&nbsp;</p>
									<p>01&nbsp;Khoai Tây Chiên (M)</p>
									<p>02&nbsp;Pepsi (M)</p>
									</span>
								</div> */}
							<form>
								<div className={cx('cart')}>
									<div className={cx('inner')}>
										<div className={cx('qty')}>
											<span>Số lượng</span>
											<div className={cx('q-inner')}>
												<Button small primary className={cx('btn-decr')}>
													-
												</Button>
												<span className="number">1</span>
												<Button small primary className="btn-incr">
													+
												</Button>
											</div>
										</div>
										<div className={cx('txt-note')}>
											Bạn tiết kiệm được <strong>55.000 ₫</strong> sau khi giảm giá.
										</div>
										<Button className={cx('btn-cart')} primary>
											Thêm vào giỏ hàng
										</Button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</main>
		</section>
	)
}

export default Detail
