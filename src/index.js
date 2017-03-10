import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import FontFaceObserver from 'fontfaceobserver'
import 'reset-css/reset.css'


import { font } from 'styles/constants'
import 'styles/base'
import 'styles/typography'
import createStore from 'store/createStore'

const fontsLoader = Object.keys(font).reduce((loader, type) => {
  const observer = new FontFaceObserver(font[type].name)
  loader.push(observer.load())
  return loader
}, [])

Promise.all(fontsLoader).then(() => {
  document.body.classList.add('fontLoaded')
}, () => {
  document.body.classList.remove('fontLoaded')
})


const store = createStore()
const render = () => {
  const routes = require('./routes/index').default(store) // eslint-disable-line global-require

  ReactDOM.render(
    <Provider store={store}>
      <div style={{ height: '100%' }}>
        <Router
          history={browserHistory}
          // eslint-disable-next-line react/no-children-prop
          children={routes}
        />
      </div>
    </Provider>,
    document.getElementById('container')
  )
}

// This code is excluded from production bundle
if (__DEV__) {
  if (module.hot) {
    // Setup hot module replacement
    // eslint-disable-next-line global-require
    module.hot.accept('./routes/index', () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(document.getElementById('container'))
        render()
      })
    )
  }
}
render()
