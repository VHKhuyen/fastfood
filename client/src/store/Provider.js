import { useReducer, useEffect } from 'react'

import Context from './Context'
import reducer, { initState, setAuth } from './state'
import axios from 'axios'
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from './constants'
import setAuthToKen from '@/utils/setAuthToken'

function Provider({ children }) {
	const [state, dispatch] = useReducer(reducer, initState)

	// authenticated users
	const loadUser = async () => {
		if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
			setAuthToKen(localStorage[LOCAL_STORAGE_TOKEN_NAME])
		}
		try {
			const response = await axios.get(`${apiUrl}/auth`)
			if (response.data.success) {
				dispatch(setAuth({ isAuthenticated: true, user: response.data.user }))
			}
		} catch (error) {
			localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
			setAuthToKen(null)
			dispatch(setAuth({ isAuthenticated: false, user: null }))
		}
	}

	useEffect(() => {
		loadUser()
	}, [])
	//  login
	const loginUser = async (userForm) => {
		try {
			const response = await axios({
				method: 'post',
				url: `${apiUrl}/auth/login`,
				data: userForm,
			})
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

	const stateAuth = { ...state, loginUser, loadUser }
	return <Context.Provider value={{ stateAuth, dispatch }}>{children}</Context.Provider>
}
export default Provider
