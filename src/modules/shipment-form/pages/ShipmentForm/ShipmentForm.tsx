import React from 'react'
import { MainLayout } from 'shared/layouts'
import s from './ShipmentForm.module.scss'
import { ShipmentTable, ShipmentMapWrapper } from './components'

const ShipmentForm = () => {
  return (
    <MainLayout>
      <div className={s.root}>
        <ShipmentMapWrapper />
        <ShipmentTable />
      </div>
    </MainLayout>
  )
}

export default ShipmentForm
