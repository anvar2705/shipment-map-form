import React from 'react'
import s from './ShipmentTable.module.scss'
import { SHIPMENTS } from '_mocks/shipmentForm'
import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { IPointCoordinates, IShipment } from '../../ShipmentForm.types'
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { setShipment } from 'modules/shipment-form/store/slice'

const renderCoordinates = (value: IPointCoordinates) => (
  <span>
    {value.lat}, {value.lng}
  </span>
)

const columns: ColumnsType<IShipment> = [
  {
    title: '№',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Точка A',
    dataIndex: 'pointA',
    key: 'pointA',
    render: renderCoordinates,
  },
  {
    title: 'Точка B',
    dataIndex: 'pointB',
    key: 'pointB',
    render: renderCoordinates,
  },
]

const ShipmentTable = () => {
  const { selected } = useAppSelector((state) => state.shipmentFormReducer)
  const dispatch = useAppDispatch()

  const onSelectRow = (selectedRowKeys: React.Key[], selectedRows: IShipment[]) => {
    dispatch(setShipment(selectedRows[0]))
  }

  return (
    <div className={s.root}>
      <h3 className={s.title}>Таблица отгрузок</h3>
      <div className={s.table}>
        <Table
          dataSource={SHIPMENTS}
          columns={columns}
          pagination={false}
          rowSelection={{
            type: 'radio',
            selectedRowKeys: selected ? [selected.key] : [],
            onChange: onSelectRow,
          }}
          onRow={(record) => {
            return {
              onClick: () => {
                dispatch(setShipment(record))
              },
            }
          }}
        />
      </div>
    </div>
  )
}

export default ShipmentTable
