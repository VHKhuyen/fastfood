import PropTypes from 'prop-types'
import Header from '../components/header/header'
import style from './defaultLayout.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(style)
HeaderOnly.propTypes = {
	children: PropTypes.node.isRequired,
}
function HeaderOnly({ children }) {
	return (
		<div className={cx('wrapper')}>
			<Header />
			<div className={cx('container')}>
				<div className={cx('content')}>{children}</div>
			</div>
		</div>
	)
}

export default HeaderOnly
