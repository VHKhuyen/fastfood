import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import classNames from 'classnames/bind'

import { Button } from '@/components'
import { getProducts, getSingleProduct } from '@/services/productServices'
import styles from './detail.module.scss'
import { ProductList, ProductItem } from '@/components'
const cx = classNames.bind(styles)

function Detail() {
	const [product, setProduct] = useState({})
	const [productList, setProductList] = useState([])

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
	}, [slug])

	useEffect(() => {
		const products = async () => {
			const response = await getProducts(product.category)
			if (response?.success) {
				setProductList(response.products)
			} else {
			}
		}

		products()
	})

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
								<img src={product.image} alt="item" />
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
							{/* <div class="options-product">
								<div class="headline">
									<h4>Ngon hơn khi ăn kèm</h4>
								</div>
								<ul class="list-options">
									<li class="checked">
										<div class="product-name">
											<span class="txt">Phô Mai Miếng</span>
										</div>
										<div class="r-info">
											<div class="inner">
												<span class="price">+ 5.000 ₫</span>
												<button type="button" class="btn-remove"></button>
											</div>
										</div>
									</li>
									<li class="checked">
										<div class="product-name">
											<span class="txt">Trứng</span>
										</div>
										<div class="r-info">
											<div class="inner">
												<span class="price">+ 7.000 ₫</span>
												<button type="button" class="btn-remove"></button>
											</div>
										</div>
									</li>
								</ul>
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
					<div className={cx('field-related')}>
						<h2>Sản phẩm liên quan</h2>
						<ProductList>
							{productList &&
								productList.map((product) => {
									if (product.slug === slug) {
										return null
									} else return <ProductItem key={product._id} product={product} />
								})}
						</ProductList>
					</div>
				</div>
			</main>
		</section>
	)
}

export default Detail
