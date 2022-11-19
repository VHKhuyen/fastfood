import images from '@/assets/images'
import { Button } from '@/components'
import classNames from 'classnames/bind'
import styles from './detail.module.scss'

const cx = classNames.bind(styles)
function Detail() {
	return (
		<section className={cx('wrapper')}>
			<form>
				<main className={cx('main')}>
					<div className={cx('container')}>
						<div className={cx('product-detail')}>
							<div className={cx('field-back')}></div>
							<div className={cx('field-img')}>
								<div className={cx('item')}>
									<img src={images.burger1} alt="image item" />
								</div>
								<div className={cx('field-top')}></div>
							</div>
							<div className={cx('field-content')}>
								<h3>Apricot Chicken</h3>
								<p>
									Thịt xông khói giòn, giăm bông thơm ngon, dứa, hành tây và phô mai mozzarella dẻo dai, kết thúc bằng
									món sốt BBQ.
								</p>
								<div className={cx('field-price')}>129.000 ₫</div>
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
							</div>
						</div>
					</div>
				</main>
			</form>
		</section>
	)
}

export default Detail
