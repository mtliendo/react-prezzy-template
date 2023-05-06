import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Amplify } from 'aws-amplify'
import * as gen from './generated'
Amplify.configure(gen.config)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
