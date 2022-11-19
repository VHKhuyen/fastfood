import { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from '@/routes'
import { DefaultLayout } from '@/layouts'
import { loadUser } from '@/services/authServices'
import { loadUserSuccess } from '@/redux/authSlice'
import { useDispatch } from 'react-redux'

function App() {
	const dispatch = useDispatch()
	useEffect(() => {
		const checkUser = async () => {
			const data = await loadUser()
			if (data?.success) {
				dispatch(loadUserSuccess())
			}
		}
		checkUser()
	}, [dispatch])
	return (
		<Router>
			<div className="app">
				<Routes>
					{publicRoutes.map((route, index) => {
						let Layout = DefaultLayout
						if (route.layout) {
							Layout = route.layout
						} else if (route.layout === null) {
							Layout = Fragment
						}
						const Page = route.component
						return (
							<Route
								key={index}
								path={route.path}
								element={
									<Layout>
										<Page />
									</Layout>
								}
							/>
						)
					})}
				</Routes>
			</div>
		</Router>
	)
}

export default App
