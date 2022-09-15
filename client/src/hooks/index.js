import PropTypes from 'prop-types'
import { useContext, useEffect, useState } from 'react'
import { Context } from '@/store'

export const useStore = () => {
	const { stateAuth, dispatch } = useContext(Context)
	return { stateAuth, dispatch }
}
export const useDebounce = (value, delay) => {
	const [debounce, setDebounce] = useState(value)

	useEffect(() => {
		const id = setTimeout(() => setDebounce(value), delay)

		return () => clearTimeout(id)
	}, [value, delay])

	return debounce
}

useDebounce.propTypes = {
	value: PropTypes.string,
	delay: PropTypes.number,
}
