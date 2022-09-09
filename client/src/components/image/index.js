import { useState, forwardRef } from 'react'
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

export default Image
