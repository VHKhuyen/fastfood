import PropTypes from 'prop-types'
import './GlobalStyle.scss'

GlobalStyle.propTypes = {
	children: PropTypes.node.isRequired,
}
export default function GlobalStyle({ children }) {
	return children
}
