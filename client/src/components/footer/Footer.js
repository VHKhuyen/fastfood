import classNames from 'classnames/bind'
import style from './footer.module.scss'
const cx = classNames.bind(style)

function Footer() {
	return (
		<div className={cx('footer')}>
			<div className={cx('container')}></div>
		</div>
	)
}

export default Footer
