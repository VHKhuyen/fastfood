import { useState } from 'react'
import PropTypes from 'prop-types'
import style from './formInput.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(style)

function FormInput({ onChange, value, error, ...props }) {
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
				value={value || ''}
				onChange={onChange}
				onBlur={handleBlur}
				onFocus={() => handleFocus(props)}
				focused={focused.toString()}
			/>
			<span className={cx('error')}>{error}</span>
		</div>
	)
}

FormInput.propTypes = {
	onChange: PropTypes.func,
	error: PropTypes.string,
}
export default FormInput
