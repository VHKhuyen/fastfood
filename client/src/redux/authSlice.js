import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	authLoading: true,
	isAuthenticated: false,
	user: null,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		registerSuccess: (state, action) => {
			state.isAuthenticated = true
			state.user = action.payload
		},
		loginSuccess: (state, action) => {
			state.isAuthenticated = true
			state.user = action.payload
		},
		loadUserFailed: (state) => {
			state.authLoading = false
		},
		loadUserSuccess: (state) => {
			state.authLoading = false
			state.isAuthenticated = true
		},
	},
})

export const { loginSuccess, loadUserSuccess, loadUserFailed, registerSuccess } = authSlice.actions

export default authSlice.reducer
