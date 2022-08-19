import { IRoute } from 'config/types'
import { ShipmentForm } from '../pages'

const ROUTES: IRoute[] = [
  {
    path: '/',
    element: <ShipmentForm />,
  },
]

export default ROUTES
