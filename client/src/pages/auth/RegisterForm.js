import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import style from './auth.module.scss'
import classNames from 'classnames/bind'
import FormInput from '@/components/formInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@/components'
import { registerUser } from '@/services/authServices'
import { registerSuccess } from '@/redux/authSlice'

import config from '@/config'
import images from '@/assets/images'

const cx = classNames.bind(style)

function RegisterForm() {
	let body

	const auth = useSelector((state) => state.auth)
	const dispatch = useDispatch()
	const { isAuthenticated, authLoading } = auth

	const [loadSubmit, setLoadSubmit] = useState(false)
	const [message, setMessage] = useState({ error: false, message: '' })

	const [valueForm, setValueForm] = useState({
		username: '',
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
			name: 'password',
			type: 'password',
			placeholder: 'Mật khẩu',
			error: 'Tối thiểu 6 ký tự!',
			required: true,
			pattern: '[0-9a-zA-Z]{6,}',
		},
		{
			id: 3,
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
		setLoadSubmit(true)
		const response = await registerUser(valueForm)
		setLoadSubmit(false)
		if (response?.success) {
			dispatch(registerSuccess())
		} else {
			setMessage({ error: true, message: response.message })
		}
	}

	const handleOnChange = (e) => {
		setValueForm({ ...valueForm, [e.target.name]: e.target.value })
	}
	if (authLoading) {
		body = <h1>Loading...</h1>
	} else if (isAuthenticated) {
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
					{message.error && <h4>{message.message}</h4>}

					{inputs.map((input) => (
						<FormInput key={input.id} {...input} value={valueForm[input.name]} onChange={handleOnChange} />
					))}
					{loadSubmit ? (
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
