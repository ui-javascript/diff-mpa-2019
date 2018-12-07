import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './assets/css/ReactPullLoad.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import './common/global'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
