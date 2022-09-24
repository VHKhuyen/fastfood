import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyle from '@/components/globalStyles'
import StoreProvider from '@/store/Provider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<GlobalStyle>
			<StoreProvider>
				<App />
			</StoreProvider>
		</GlobalStyle>
	</React.StrictMode>,
)
