import { useEffect } from 'react'
import L from 'leaflet'
import { useMap } from 'react-leaflet'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import 'leaflet-routing-machine'
import { useAppSelector } from 'shared/hooks/redux'

const Routing = () => {
  const map = useMap()
  const { selected } = useAppSelector((state) => state.shipmentFormReducer)

  useEffect(() => {
    if (!map || !selected) return

    const { lat: latStart, lng: lngStart } = selected.pointA
    const { lat: latEnd, lng: lngEnd } = selected.pointB

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(latStart, lngStart), L.latLng(latEnd, lngEnd)],
      collapsible: true,
    }).addTo(map)

    return () => {
      map.removeControl(routingControl)
    }
  }, [map, selected])

  return null
}

export default Routing
