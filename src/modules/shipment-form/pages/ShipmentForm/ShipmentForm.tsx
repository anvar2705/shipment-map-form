import React, { MouseEvent, useState } from 'react'
import { MainLayout } from 'shared/layouts'
import s from './ShipmentForm.module.scss'
import { ShipmentTable, ShipmentMapWrapper } from './components'

const ShipmentForm = () => {
  const [isDrag, setIsDrag] = useState(false)
  const [mapWidth, setMapWidth] = useState<null | number>(null)

  const startDrag = () => {
    setIsDrag(true)
  }

  const endDrag = () => {
    setIsDrag(false)
  }

  const drag = (event: MouseEvent<HTMLDivElement>) => {
    if (isDrag) {
      setMapWidth(event.clientX - 30)
      event.preventDefault()
    }
  }

  return (
    <MainLayout>
      <div className={s.root} onMouseUp={endDrag} onMouseLeave={endDrag} onMouseMove={drag}>
        <div
          className={s.section}
          style={{
            width: mapWidth ? `${mapWidth}px` : undefined,
            minWidth: mapWidth ? `${mapWidth}px` : undefined,
          }}
        >
          <ShipmentMapWrapper />
        </div>
        <div className={s.dragBar} onMouseDown={startDrag}></div>
        <div className={s.section}>
          <ShipmentTable />
        </div>
      </div>
    </MainLayout>
  )
}

export default ShipmentForm
