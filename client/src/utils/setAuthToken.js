import { requestFastFood } from './httpRequest'
const setAuthToKen = (token) => {
	if (token) {
		requestFastFood.defaults.headers.common['Authorization'] = `Bearer ${token}`
	} else {
		delete requestFastFood.defaults.headers.common['Authorization']
	}
}

export default setAuthToKen
