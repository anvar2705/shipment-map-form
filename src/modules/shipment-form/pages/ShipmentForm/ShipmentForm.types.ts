export interface IShipment {
  key: number
  name: string
  pointA: IPointCoordinates
  pointB: IPointCoordinates
}

export interface IPointCoordinates {
  lat: number
  lng: number
}
