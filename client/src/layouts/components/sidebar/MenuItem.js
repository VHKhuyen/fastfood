import { NavLink } from 'react-router-dom'

function MenuItem({ to, title, icon }) {
	return (
		<NavLink to={to} icon={icon} className={({ isActive }) => (isActive ? 'active' : '')}>
			{icon}
			<span>{title}</span>
		</NavLink>
	)
}

export default MenuItem
