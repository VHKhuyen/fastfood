import { Button } from '@/components'
import style from './auth.module.scss'
import classNames from 'classnames/bind'
import FormInput from '@/components/formInput'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const cx = classNames.bind(style)

function RegisterForm() {
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
			error: 'Mật khẩu không chính xác!',
			required: true,
			pattern: valueForm.password,
		},
	]
	const handleSubmit = (e) => {
		e.preventDefault()
	}

	const handleOnChange = (e) => {
		setValueForm({ ...valueForm, [e.target.name]: e.target.value })
	}

	console.log(valueForm)
	return (
		<div className={cx('wrapper')}>
			<form onSubmit={handleSubmit}>
				<h1>Đăng ký</h1>
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

export default RegisterForm
