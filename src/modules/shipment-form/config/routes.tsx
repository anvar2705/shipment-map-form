import { IRoute } from 'config/types'
import { ShipmentForm } from '../pages'

const ROUTES: IRoute[] = [
  {
    path: '/shipment-map-form',
    element: <ShipmentForm />,
  },
]

export default ROUTES
