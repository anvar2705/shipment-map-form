import React from 'react'
import ReactDOM from 'react-dom/client'
import { ErrorBoundary, Page404 } from 'shared/components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import renderRoutesRecursive from 'utils/renderRoutesRecursive'
import './assets/styles/global.scss'
import 'antd/dist/antd.min.css'
import shipmentFormRoutes from 'modules/shipment-form/config/routes'
import { Provider } from 'react-redux'
import { store } from './store'

const ROUTES = [shipmentFormRoutes]

const App = () => {
  return (
    <ErrorBoundary>
      <Routes>
        {ROUTES.map((arrayOfRoutes, index) =>
          renderRoutesRecursive(arrayOfRoutes, `group-${index}`)
        )}
        <Route path='*' element={<Page404 />} />
      </Routes>
    </ErrorBoundary>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
)
