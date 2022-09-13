import { Route, Navigate } from 'react-router-dom'
import { useStore } from '@/store'

function ProtectedRoute() {
	const {
		stateAuth: { authLoading, isAuthenticated },
	} = useStore()
	return <div></div>
}

export default ProtectedRoute
