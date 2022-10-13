import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyle from '@/components/globalStyles'
import { Provider } from 'react-redux'
import { store } from '@/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<GlobalStyle>
			<Provider store={store}>
				<App />
			</Provider>
		</GlobalStyle>
	</React.StrictMode>,
)
