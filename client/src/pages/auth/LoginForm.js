import { useState } from 'react'
import { Link, useNavigate, Navigate } from 'react-router-dom'

import { Button } from '@/components'
import style from './auth.module.scss'
import classNames from 'classnames/bind'
import FormInput from '@/components/formInput'
import { useStore } from '@/store/hooks'

const cx = classNames.bind(style)

function LoginForm() {
	let body

	const navigate = useNavigate()
	const [valueForm, setValueForm] = useState({
		username: '',
		password: '',
	})
	const {
		stateAuth: { loginUser, isAuthenticated, authLoading },
	} = useStore()

	if (authLoading) {
		body = <h1>Loading</h1>
	}
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
	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const loginData = await loginUser(valueForm)
			console.log(loginData)
			navigate('/')
		} catch (error) {
			console.log(error)
		}
	}

	const handleOnChange = (e) => {
		setValueForm({ ...valueForm, [e.target.name]: e.target.value })
	}

	if (authLoading) {
		body = <h1>Loading</h1>
	} else if (isAuthenticated) {
		return <Navigate to="/" />
	} else {
		body = (
			<div className={cx('wrapper')}>
				<form onSubmit={handleSubmit}>
					<h1>Đăng nhập</h1>
					{inputs.map((input) => (
						<FormInput key={input.id} {...input} value={valueForm[input.name]} onChange={handleOnChange} />
					))}
					<Button primary width100 radius>
						Đăng nhập
					</Button>
					<div className={cx('help')}>
						<span>Bạn chưa có tài khoản?</span>
						<Link to="/auth/register">Đăng ký</Link>
					</div>
				</form>
			</div>
		)
	}

	return <>{body}</>
}

export default LoginForm
