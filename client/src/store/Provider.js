import { useReducer, useEffect } from 'react'

import Context from './Context'
import reducer, { initState, setAuth } from './state'
import setAuthToKen from '@/utils/setAuthToken'
import { requestFastFood } from '@/utils/httpRequest'
const LOCAL_STORAGE_TOKEN_NAME = 'fastfood'
function Provider({ children }) {
	const [state, dispatch] = useReducer(reducer, initState)

	// authenticated users
	const loadUser = async () => {
		const token = localStorage[LOCAL_STORAGE_TOKEN_NAME]
		if (token) {
			setAuthToKen(token)
		}
		try {
			dispatch(setAuth({ authLoading: true }))
			const response = await requestFastFood.get('/auth')
			if (response.data.success) {
				dispatch(setAuth({ authLoading: false, isAuthenticated: true, user: response.data.user }))
			}
		} catch (error) {
			localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
			setAuthToKen(null)
			dispatch(setAuth({ authLoading: false, isAuthenticated: false, user: null }))
		}
	}

	useEffect(() => {
		loadUser()
	}, [])

	//register
	const registerUser = async (userForm) => {
		try {
			dispatch(setAuth({ authLoading: true }))
			const response = await requestFastFood.post('/auth/register', userForm)

			if (response.data.success) {
				localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.accessToken)
				dispatch(setAuth({ authLoading: false, isAuthenticated: true, user: response.data.user }))
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
			dispatch(setAuth({ authLoading: true }))
			const response = await requestFastFood.post('/auth/login', userForm)
			if (response.data.success) {
				localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.accessToken)
				dispatch(setAuth({ authLoading: false, isAuthenticated: true, user: response.data.user }))
			}
			return response.data
		} catch (error) {
			if (error.response.data) {
				dispatch(setAuth({ authLoading: false }))
				return error.response.data
			} else {
				return { success: false, message: error.message }
			}
		}
	}
	const logoutUser = () => {
		dispatch(setAuth({ authLoading: true }))
		localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
		dispatch(setAuth({ authLoading: false, isAuthenticated: false }))
	}
	const stateAuth = { ...state, dispatch, registerUser, loginUser, loadUser, logoutUser }
	return <Context.Provider value={{ stateAuth, dispatch }}>{children}</Context.Provider>
}
export default Provider
