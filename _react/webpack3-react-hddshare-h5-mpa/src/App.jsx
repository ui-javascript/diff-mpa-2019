import React, { Component } from 'react'
import Routes from './router'
import Toast from 'react-toast-mobile'
import 'react-toast-mobile/lib/react-toast-mobile.css'
import './App.css'

class App extends Component {
	render() {
		return (
			<div>
				<Toast/>
				<Routes/>
			</div>
		)
	}
}

export default App
