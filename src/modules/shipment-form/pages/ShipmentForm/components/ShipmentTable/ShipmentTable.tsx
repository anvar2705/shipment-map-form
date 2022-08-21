import React from 'react'
import s from './ShipmentTable.module.scss'
import { SHIPMENTS } from '_mocks/shipmentForm'
import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { IPointCoordinates, IShipment } from '../../ShipmentForm.types'
import { useAppDispatch } from 'shared/hooks/redux'
import { setShipment } from 'modules/shipment-form/store/slice'

const renderCoordinates = (value: IPointCoordinates) => (
  <span>
    {value.lat}, {value.lng}
  </span>
)

const columns: ColumnsType<IShipment> = [
  {
    title: 'Id',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Point A',
    dataIndex: 'pointA',
    key: 'pointA',
    render: renderCoordinates,
  },
  {
    title: 'Point B',
    dataIndex: 'pointB',
    key: 'pointB',
    render: renderCoordinates,
  },
]

const ShipmentTable = () => {
  const dispatch = useAppDispatch()

  const onSelectRow = (selectedRowKeys: React.Key[], selectedRows: IShipment[]) => {
    dispatch(setShipment(selectedRows[0]))
  }

  return (
    <div className={s.root}>
      <h3 className={s.title}>Таблица отгрузок</h3>
      <Table
        dataSource={SHIPMENTS}
        columns={columns}
        pagination={false}
        rowSelection={{
          type: 'radio',
          onChange: onSelectRow,
        }}
      />
    </div>
  )
}

export default ShipmentTable
