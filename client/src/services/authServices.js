import setAuthToKen from '@/utils/setAuthToken'
import { requestFastFood } from '@/utils/httpRequest'

const LOCAL_STORAGE_TOKEN_NAME = 'fastfood'

// authenticated users
const loadUser = async () => {
	const token = localStorage[LOCAL_STORAGE_TOKEN_NAME]
	if (token) {
		setAuthToKen(token)
		try {
			const response = await requestFastFood.get('/auth')
			return response.data
		} catch (error) {
			localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
			setAuthToKen(null)
			return error.response.data
		}
	}
}

//register
const registerUser = async (userForm) => {
	try {
		const response = await requestFastFood.post('/auth/register', userForm)

		if (response.data.success) {
			localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.accessToken)
		}
		return response.data
	} catch (error) {
		if (error.response.data) {
			return error.response.data
		} else {
			return { success: false, message: error.message }
		}
	}
}

//  login
const loginUser = async (userForm) => {
	try {
		const response = await requestFastFood.post('/auth/login', userForm)
		if (response.data.success) {
			localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.accessToken)
			return response.data
		}
	} catch (error) {
		if (error.response.data) {
			return error.response.data
		} else return { success: false, message: error.message }
	}
}

export { loadUser, registerUser, loginUser }
