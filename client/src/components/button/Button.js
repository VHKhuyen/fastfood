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
	radius,
	large,
	small,
	width100,
	active = false,
	className,
	...passProps
}) {
	let Comp = 'button'
	const props = {
		onClick,
		...passProps,
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

export default Button
