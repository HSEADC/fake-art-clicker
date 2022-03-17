import '../bundle.scss'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Game from './containers/Game.jsx'
import configureStore from './store/configureStore.js'

const store = configureStore()

console.log('STORE', store)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Game />
    </Provider>,
    document.body.appendChild(document.createElement('div'))
  )
})
