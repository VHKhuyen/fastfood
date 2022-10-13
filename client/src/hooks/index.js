import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

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
