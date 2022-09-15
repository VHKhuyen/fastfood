import { useState, forwardRef } from 'react'
import PropTypes from 'prop-types'
import image from '@/assets/images'
import classNames from 'classnames'
import styles from './image.module.scss'

const Image = forwardRef(({ src, alt, fallback: customFallback = image.noImage, className, ...props }, ref) => {
	const [fallback, setFallback] = useState('')

	const handleError = () => {
		setFallback(customFallback)
	}

	return (
		<img
			ref={ref}
			className={classNames(styles.wrapper, className)}
			src={fallback || src}
			alt={alt}
			{...props}
			onError={handleError}
		/>
	)
})
Image.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string,
	fallback: PropTypes.string,
	className: PropTypes.string,
}
export default Image
