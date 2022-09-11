import { useState } from 'react'
import style from './formInput.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(style)

function FormInput({ onChange, error, ...props }) {
	const [focused, setFocused] = useState(false)
	const handleBlur = () => {
		setFocused(true)
	}
	const handleFocus = (props) => {
		if (props.name === 'confirmPassword') {
			setFocused(false)
		} else {
			return props
		}
	}
	return (
		<div className={cx('form-input')}>
			<input
				{...props}
				onChange={onChange}
				onBlur={handleBlur}
				onFocus={() => handleFocus(props)}
				focused={focused.toString()}
			/>
			<span className={cx('error')}>{error}</span>
		</div>
	)
}

export default FormInput
