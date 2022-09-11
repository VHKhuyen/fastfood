import { useContext } from 'react'
import Context from './Context'

export const useStore = () => {
	const { stateAuth, dispatch } = useContext(Context)
	return { stateAuth, dispatch }
}
