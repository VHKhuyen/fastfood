import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import style from './auth.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import FormInput from '@/components/formInput'
import { Button } from '@/components'
import { authSelector } from '@/redux/selector'
import { fetchRegister } from '@/redux/authSlice'
import config from '@/config'
import images from '@/assets/images'

const cx = classNames.bind(style)

function RegisterForm() {
	let body

	const dispatch = useDispatch()
	const auth = useSelector(authSelector)
	const { authLoading, isAuthenticated } = auth
	// const [message, setMessage] = useState({ error: false, message: '' })

	const [valueForm, setValueForm] = useState({
		username: '',
		email: '',
		password: '',
	})

	const inputs = [
		{
			id: 1,
			name: 'username',
			type: 'text',
			placeholder: 'Tên đăng nhập',
			error: 'Chưa có tên đăng nhập!',
			required: true,
		},
		{
			id: 2,
			name: 'email',
			type: 'text',
			placeholder: 'Email',
			error: 'Chưa có email!',
			required: true,
		},
		{
			id: 3,
			name: 'password',
			type: 'password',
			placeholder: 'Mật khẩu',
			error: 'Tối thiểu 6 ký tự!',
			required: true,
			pattern: '[0-9a-zA-Z]{6,}',
		},
		{
			id: 4,
			name: 'confirmPassword',
			type: 'password',
			placeholder: 'Xác nhận mật khẩu',
			error: 'Mật khẩu không khớp!',
			required: true,
			pattern: valueForm.password,
		},
	]
	const handleSubmit = async (e) => {
		e.preventDefault()
		dispatch(fetchRegister(valueForm))
		// if (response.message === 'Network Error') {
		// 	setMessage({ error: true, message: 'Không thể kết nối tới máy chủ!' })
		// } else {
		// 	setMessage({ error: true, message: response.message })
		// }
	}

	const handleOnChange = (e) => {
		setValueForm({ ...valueForm, [e.target.name]: e.target.value })
	}
	if (isAuthenticated) {
		body = <Navigate to={config.routes.home} />
	} else {
		body = (
			<div className={cx('wrapper')}>
				<div className={cx('login-header')}>
					<Link to={config.routes.home}>
						<img src={images.logo} alt="Logo" />
					</Link>
				</div>
				<form onSubmit={handleSubmit}>
					<h1>Đăng ký</h1>
					{/* {message.error && <h4>{message.message}</h4>} */}

					{inputs.map((input) => (
						<FormInput
							key={input.id}
							{...input}
							value={valueForm[input.name]}
							onChange={handleOnChange}
						/>
					))}
					{authLoading ? (
						<Button primary width100 radius disable className={cx('btn-disable')}>
							<FontAwesomeIcon icon={faSpinner} />
						</Button>
					) : (
						<Button primary width100 radius>
							Đăng ký
						</Button>
					)}
					<div className={cx('help')}>
						<span>Bạn đã có tài khoản?</span>
						<Link to={config.routes.login}>Đăng Nhập</Link>
					</div>
				</form>
			</div>
		)
	}
	return <div>{body}</div>
}

export default RegisterForm
