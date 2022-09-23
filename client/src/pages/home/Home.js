import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import classNames from 'classnames/bind'
import style from './home.module.scss'
import { homeSliderData } from './data'
import Slide from '@/components/slider/Slide'

const cx = classNames.bind(style)

function Home() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	}
	return (
		<div className={cx('wrapper')}>
			<div className={cx('sliders')}>
				<Slider {...settings}>
					{homeSliderData.map((item) => {
						return <Slide key={item.id} {...item} />
					})}
				</Slider>
			</div>
		</div>
	)
}

export default Home
