import { useReducer, useEffect } from 'react'

import Context from './Context'
import reducer, { initState, setAuth } from './state'
import setAuthToKen from '@/utils/setAuthToken'
import { requestFastFood } from '@/utils/httpRequest'

function Provider({ children }) {
	const [state, dispatch] = useReducer(reducer, initState)

	// authenticated users
	const loadUser = async () => {
		if (localStorage[process.env.LOCAL_STORAGE_TOKEN_NAME]) {
			setAuthToKen(localStorage[process.env.LOCAL_STORAGE_TOKEN_NAME])
		}
		try {
			const response = await requestFastFood.get('/auth')
			if (response.data.success) {
				dispatch(setAuth({ isAuthenticated: true, user: response.data.user }))
			}
		} catch (error) {
			localStorage.removeItem(process.env.LOCAL_STORAGE_TOKEN_NAME)
			setAuthToKen(null)
			dispatch(setAuth({ isAuthenticated: false, user: null }))
		}
	}

	useEffect(() => {
		loadUser()
	}, [])

	//register
	const registerUser = async (userForm) => {
		try {
			const response = await requestFastFood.post({
				url: '/auth/register',
				data: userForm,
			})
			if (response.data.success) {
				localStorage.setItem(process.env.LOCAL_STORAGE_TOKEN_NAME, response.data.accessToken)
				dispatch(setAuth({ isAuthenticated: true, user: response.data.user }))
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
			const response = await requestFastFood.post({
				url: '/auth/login',
				data: userForm,
			})
			if (response.data.success) {
				localStorage.setItem(process.env.LOCAL_STORAGE_TOKEN_NAME, response.data.accessToken)
				dispatch(setAuth({ isAuthenticated: true, user: response.data.user }))
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

	const stateAuth = { ...state, registerUser, loginUser, loadUser }
	return <Context.Provider value={{ stateAuth, dispatch }}>{children}</Context.Provider>
}
export default Provider
