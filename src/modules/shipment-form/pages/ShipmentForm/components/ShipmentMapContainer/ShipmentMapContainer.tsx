import React from 'react'
import s from './ShipmentMapContainer.module.scss'
import { Map } from '../index'

const ShipmentMapContainer = () => {
  return (
    <div className={s.root}>
      <h3>Карта</h3>
      <div className={s.wrapper}>
        <Map />
      </div>
    </div>
  )
}

export default ShipmentMapContainer
