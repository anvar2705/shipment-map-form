import type { IRoute } from 'config/types'
import { Route } from 'react-router-dom'

const renderRoutesRecursive = (routes: IRoute[], prefix: string) =>
  routes.map((route) => {
    return (
      <Route
        key={`${prefix}-${route.path || 'index'}-route`}
        index={!route.path}
        path={route.path}
        element={route.element}
      >
        {route.routes && renderRoutesRecursive(route.routes, prefix)}
      </Route>
    )
  })

export default renderRoutesRecursive
