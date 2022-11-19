import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import classNames from 'classnames/bind'
import style from './home.module.scss'
import ProductItem from '@/components/productItem/ProductItem'
import { Button } from '@/components'
import { homeSliderData } from './data'
import { Slide, PrevArrow, NextArrow } from '@/components/slider'
import { useEffect, useState } from 'react'
import { getProducts } from '@/services/productServices'
const cx = classNames.bind(style)

const tabs = [
	// {
	// 	type: 'new',
	// 	title: 'Mới nhất',
	// },
	{
		type: 'burger',
		title: 'burger',
	},
	{
		type: 'pasta',
		title: 'Mỳ ý',
	},
	{
		type: 'drink',
		title: 'Đồ uống',
	},
]

function Home() {
	const [productList, setProductList] = useState([])
	const [typeTab, setTypeTab] = useState('burger')
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
	useEffect(() => {
		const checkUser = async () => {
			const response = await getProducts(typeTab)
			if (response?.success) {
				setProductList(response.products)
			} else {
			}
		}
		checkUser()
	}, [typeTab])

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
						{tabs.map((tab) => (
							<Button
								key={tab.type}
								primary={typeTab === tab.type ? true : false}
								radius
								onClick={() => setTypeTab(tab.type)}
							>
								{tab.title}
							</Button>
						))}
					</div>
					<div className={cx('product-list')}>
						{productList.map((product) => {
							if (product.category === typeTab) return <ProductItem key={product._id} product={product} />
						})}
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
