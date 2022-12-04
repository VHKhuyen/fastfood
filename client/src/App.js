import { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from '@/routes'
import { DefaultLayout } from '@/layouts'
import { fetchLoadUser } from '@/redux/authSlice'
import { useDispatch } from 'react-redux'
import ScrollToTop from './components/ScrollToTop'

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchLoadUser())
	})

	return (
		<Router>
			<div className="app">
				<ScrollToTop>
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
				</ScrollToTop>
			</div>
		</Router>
	)
}

export default App
