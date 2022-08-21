import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import './Map.scss'
import Routing from './Routing'
import ResizeMap from './ResizeMap'

const Map = () => {
  return (
    <MapContainer center={[46.361, 48.047]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Routing />
      <ResizeMap />
    </MapContainer>
  )
}

export default Map
