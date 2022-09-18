import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Button.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function Button({
	to,
	href,
	onClick,
	children,
	primary = false,
	white = false,
	disable = false,
	radius = false,
	large = false,
	small = false,
	width100 = false,
	active = false,
	className,
	...passProps
}) {
	let Comp = 'button'
	const props = {
		onClick,
		...passProps,
	}
	if (disable) {
		Object.keys(props).forEach((key) => {
			if (key.startsWith('on')) {
				delete props[key]
			}
		})
	}
	if (to) {
		props.to = to
		Comp = Link
	} else if (href) {
		props.href = href
		Comp = 'a'
	}

	const classes = cx('wrapper', {
		primary,
		white,
		radius,
		large,
		small,
		width100,
		active,
		disable,
		[className]: className,
	})
	return (
		<Comp className={classes} {...props}>
			{children}
		</Comp>
	)
}
Button.propTypes = {
	to: PropTypes.string,
	href: PropTypes.string,
	onClick: PropTypes.func,
	children: PropTypes.node.isRequired,
	primary: PropTypes.bool,
	white: PropTypes.bool,
	disable: PropTypes.bool,
	radius: PropTypes.bool,
	large: PropTypes.bool,
	small: PropTypes.bool,
	width100: PropTypes.bool,
	active: PropTypes.bool,
	className: PropTypes.string,
}
export default Button
