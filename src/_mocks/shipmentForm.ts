import { IShipment } from 'modules/shipment-form/pages/ShipmentForm/ShipmentForm.types'

export const SHIPMENTS: IShipment[] = [
  {
    key: 125,
    name: 'Заявка 1',
    pointA: {
      lat: 46.372037,
      lng: 48.074875,
    },
    pointB: {
      lat: 46.349469,
      lng: 48.034101,
    },
  },
  {
    key: 321,
    name: 'Заявка 2',
    pointA: {
      lat: 46.366494,
      lng: 48.029062,
    },
    pointB: {
      lat: 46.352751,
      lng: 48.075957,
    },
  },
  {
    key: 389,
    name: 'Заявка 3',
    pointA: {
      lat: 46.343035,
      lng: 48.063646,
    },
    pointB: {
      lat: 46.37668,
      lng: 48.04719,
    },
  },
]
