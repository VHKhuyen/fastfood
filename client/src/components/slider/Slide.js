import styles from './slide.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

function Slide(props) {
	const { image, title, category } = props
	return (
		<div className={cx('wrapper')}>
			<img src={image} alt="Home Slider" />
			<h1>{title}</h1>
			<p>{category}</p>
		</div>
	)
}

export default Slide
