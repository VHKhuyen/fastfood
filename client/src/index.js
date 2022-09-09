import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyle from '@/components/globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<GlobalStyle>
			<App />
		</GlobalStyle>
	</React.StrictMode>,
)