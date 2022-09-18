import { SET_AUTH } from './constants'
const initState = {
	authLoading: true,
	isAuthenticated: false,
	user: null,
}

function reducer(state, action) {
	const {
		type,
		payload: { authLoading, isAuthenticated, user },
	} = action
	switch (type) {
		case SET_AUTH:
			return {
				...state,
				authLoading,
				isAuthenticated,
				user,
			}
		default:
			return state
	}
}

export { initState }
export default reducer
