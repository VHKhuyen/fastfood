import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './popper.module.scss'

const cx = classNames.bind(styles)
Wrapper.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
}
export default function Wrapper({ children, className }) {
	return <div className={cx('wrapper', className)}>{children}</div>
}
