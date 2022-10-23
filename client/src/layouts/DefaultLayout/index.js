import PropTypes from 'prop-types'
import Header from '../components/header/header'
import style from './defaultLayout.module.scss'
import classNames from 'classnames/bind'
import { Footer } from '@/components'

const cx = classNames.bind(style)

function DefaultLayout({ children }) {
	return (
		<div className={cx('wrapper')}>
			<Header />
			<div className={cx('container')}>{children}</div>
			<Footer />
		</div>
	)
}
DefaultLayout.propTypes = {
	children: PropTypes.node.isRequired,
}
export default DefaultLayout
