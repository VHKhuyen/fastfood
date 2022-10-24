import styles from './slide.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

function Slide(props) {
	return (
		<div className={cx('wrapper')}>
			<img src={props.image} alt="Home Slider" />
		</div>
	)
}

export default Slide
