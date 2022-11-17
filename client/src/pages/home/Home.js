import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import classNames from 'classnames/bind'
import style from './home.module.scss'
import ProductItem from '@/components/productItem/ProductItem'
import { Button } from '@/components'
import { homeSliderData } from './data'
import { Slide, PrevArrow, NextArrow } from '@/components/slider'

const cx = classNames.bind(style)

function Home() {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 5000,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	}
	return (
		<div className={cx('wrapper')}>
			<Slider {...settings}>
				{homeSliderData.map((slide) => {
					return <Slide key={slide.id} {...slide} />
				})}
			</Slider>
			<section>
				<div className={cx('popular-dishes')}>
					<h2>Danh mục phổ biến</h2>
					<div className={cx('tabs-wrapper')}>
						<Button primary radius>
							Pizza
						</Button>
						<Button radius>Burger</Button>
						<Button radius>Mỳ ý</Button>
						<Button radius>Đồ uống</Button>
					</div>
					<div className={cx('product-list')}>
						<ProductItem />
						<ProductItem />
						<ProductItem />
						<ProductItem />
						<ProductItem />
					</div>
					<div className={cx('view-all')}>
						<Button primary large>
							Xem tất cả
						</Button>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home
