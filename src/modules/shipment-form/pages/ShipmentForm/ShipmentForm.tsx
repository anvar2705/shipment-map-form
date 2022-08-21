import React, { MouseEvent, useState } from 'react'
import { MainLayout } from 'shared/layouts'
import s from './ShipmentForm.module.scss'
import { ShipmentTable, ShipmentMapWrapper } from './components'
import normalizeValue from 'utils/normalizeValue'
import useHorizontalScroll from 'shared/hooks/useHorizontalScroll'

const ShipmentForm = () => {
  const [isDrag, setIsDrag] = useState(false)
  const [mapWidth, setMapWidth] = useState<number>(0)
  const [cursor, setCursor] = useState<'auto' | 'ew-resize'>('auto')
  const tableRef = useHorizontalScroll(mapWidth > 620 || mapWidth === 0)

  const startDrag = () => {
    setIsDrag(true)
    setCursor('ew-resize')
  }

  const endDrag = () => {
    setIsDrag(false)
    setCursor('auto')
  }

  const drag = (event: MouseEvent<HTMLDivElement>) => {
    if (isDrag) {
      setMapWidth(normalizeValue(event.clientX - 30, 400, window.innerWidth - 400))
      event.preventDefault()
    }
  }

  return (
    <MainLayout>
      <div
        className={s.root}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        onMouseMove={drag}
        style={{ cursor }}
      >
        <div
          className={s.section}
          ref={tableRef}
          style={{
            width: mapWidth ? `${mapWidth}px` : undefined,
            minWidth: mapWidth ? `${mapWidth}px` : undefined,
          }}
        >
          <ShipmentTable />
        </div>
        <div className={s.dragBar} onMouseDown={startDrag}></div>
        <div className={s.section}>
          <ShipmentMapWrapper />
        </div>
      </div>
    </MainLayout>
  )
}

export default ShipmentForm
