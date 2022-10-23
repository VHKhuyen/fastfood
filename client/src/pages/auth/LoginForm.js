import { useState, useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames/bind'
import style from './auth.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import { Button } from '@/components'
import FormInput from '@/components/formInput'
import config from '@/config'
import images from '@/assets/images'
import { loadUserSuccess, loginSuccess, loadUserFailed } from '@/redux/authSlice'
import { loadUser, loginUser } from '@/services/authServices'

const cx = classNames.bind(style)

function LoginForm() {
	let body
	const [valueForm, setValueForm] = useState({
		username: '',
		password: '',
	})
	const [loadSubmit, setLoadSubmit] = useState(false)
	const [message, setMessage] = useState({ error: false, message: '' })

	const auth = useSelector((state) => state.auth)
	const dispatch = useDispatch()

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
	]

	const handleOnChange = (e) => {
		setValueForm({ ...valueForm, [e.target.name]: e.target.value })
	}

	useEffect(() => {
		const checkUser = async () => {
			const response = await loadUser()
			if (response?.success) {
				dispatch(loadUserSuccess())
			} else {
				dispatch(loadUserFailed())
			}
		}
		checkUser()
	}, [])

	const handleSubmit = async (e) => {
		e.preventDefault()
		setLoadSubmit(true)
		const response = await loginUser(valueForm)
		if (response.success) {
			dispatch(loginSuccess())
		} else {
			if (response.message === 'Network Error') {
				setMessage({ error: true, message: 'Không thể kết nối tới máy chủ!' })
			} else {
				setMessage({ error: true, message: response.message })
			}
		}
		setLoadSubmit(false)
	}

	if (auth.authLoading) {
		body = <h1>Loading...</h1>
	} else if (auth.isAuthenticated) {
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
					<h1>Đăng nhập</h1>
					{!!message.error && <h4>{message.message}</h4>}
					{inputs.map((input) => (
						<FormInput key={input.id} {...input} value={valueForm[input.name]} onChange={handleOnChange} />
					))}
					{loadSubmit ? (
						<Button primary width100 radius disable className={cx('btn-disable')}>
							<FontAwesomeIcon icon={faSpinner} />
						</Button>
					) : (
						<Button primary width100 radius>
							Đăng nhập
						</Button>
					)}
					<div className={cx('help')}>
						<span>Bạn chưa có tài khoản?</span>
						<Link to={config.routes.register}>Đăng ký</Link>
					</div>
				</form>
			</div>
		)
	}
	return <div>{body}</div>
}

export default LoginForm
