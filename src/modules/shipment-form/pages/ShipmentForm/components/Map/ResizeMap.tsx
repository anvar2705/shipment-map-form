import { useMap } from 'react-leaflet'

const ResizeMap = () => {
  const map = useMap()
  map.invalidateSize()
  return null
}

export default ResizeMap
