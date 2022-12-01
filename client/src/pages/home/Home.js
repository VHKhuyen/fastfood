import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import classNames from 'classnames/bind'
import style from './home.module.scss'
import { Button } from '@/components'
import { homeSliderData } from './data'
import { Slide, PrevArrow, NextArrow } from '@/components/slider'
import { ProductList, ProductItem } from '@/components'
import { fetchProducts } from '@/redux/productsSlice'
import { productsSelector } from '@/redux/selector'

const cx = classNames.bind(style)

const tabs = [
	{
		type: 'new',
		title: 'Mới nhất',
	},
	{
		type: 'burger',
		title: 'Burger',
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
	const dispatch = useDispatch()
	const productState = useSelector(productsSelector)
	const { products, loading } = productState
	const [typeTab, setTypeTab] = useState('new')

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
		dispatch(fetchProducts(typeTab))
	}, [typeTab, dispatch])

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
					<ProductList>
						{loading ? (
							<p>Loading...</p>
						) : (
							<>
								{products && products.map((product) => <ProductItem key={product._id} product={product} />)}
								{/* <div className={cx('view-all')}>
						<Button primary large>
							Xem tất cả
						</Button>
					</div> */}
							</>
						)}
					</ProductList>
				</div>
			</section>
		</div>
	)
}

export default Home
