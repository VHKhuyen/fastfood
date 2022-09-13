import { Button } from '@/components'
import style from './auth.module.scss'
import classNames from 'classnames/bind'
import FormInput from '@/components/formInput'
import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useStore } from '@/hooks'

const cx = classNames.bind(style)

function RegisterForm() {
	let body
	const {
		stateAuth: { registerUser, isAuthenticated, authLoading },
	} = useStore()
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
		try {
			const response = await registerUser(valueForm)
			if (!response.success) {
				setMessage({ error: true, message: response.message })
			}
		} catch (error) {}
	}

	const handleOnChange = (e) => {
		setValueForm({ ...valueForm, [e.target.name]: e.target.value })
	}

	if (authLoading) {
		body = (
			<>
				<h1>Loading...</h1>
			</>
		)
	} else if (isAuthenticated) {
		body = <Navigate to="/" />
	} else {
		body = (
			<div className={cx('wrapper')}>
				<form onSubmit={handleSubmit}>
					<h1>Đăng ký</h1>
					{message.error && <h1>{message.message}</h1>}

					{inputs.map((input) => (
						<FormInput key={input.id} {...input} value={valueForm[input.name]} onChange={handleOnChange} />
					))}
					<Button primary width100 radius>
						Đăng ký
					</Button>
					<div className={cx('help')}>
						<span>Bạn đã có tài khoản?</span>
						<Link to="/auth/login">Đăng Nhập</Link>
					</div>
				</form>
			</div>
		)
	}
	return <>{body}</>
}

export default RegisterForm
