import React from 'react'
import s from './ShipmentMapWrapper.module.scss'
import { Map } from '../index'
import { useAppSelector } from 'shared/hooks/redux'

const ShipmentMapWrapper = () => {
  const { selected } = useAppSelector((state) => state.shipmentFormReducer)

  return (
    <div className={s.root}>
      <h3>Карта</h3>
      {selected === null && <div className={s.helperText}>Пожалуйста, выберите заявку</div>}
      <div className={s.wrapper}>
        <Map />
      </div>
    </div>
  )
}

export default ShipmentMapWrapper
