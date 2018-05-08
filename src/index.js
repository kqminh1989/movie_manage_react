import React from 'react'
import ReactDOM from 'react-dom'
import Movie from './movie/components/Movie'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
	<Provider store = { store }>
		<Movie />
	</Provider>,
	
	document.getElementById('root')
)
registerServiceWorker()
